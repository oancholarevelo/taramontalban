// app/(main)/trails/[slug]/TrailSlugClientPage.tsx
"use client";

import Image from 'next/image';
import dynamic from 'next/dynamic';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { GeoJsonObject } from 'geojson';
import type { Trail } from '@/app/data/trails';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });
const GeoJSON = dynamic(() => import('react-leaflet').then((mod) => mod.GeoJSON), { ssr: false });

// --- INTERFACES AND TYPE DEFINITIONS ---
interface OSRMStep {
  maneuver: { type: string; modifier?: string; location: [number, number] };
  name: string;
  distance: number;
  duration: number;
}

// --- MAP CONTROLLER COMPONENT ---
const MapController = ({ route, userLocation, trailCoords }: { route: GeoJsonObject | null; userLocation: LatLngExpression | null; trailCoords: LatLngExpression }) => {
  const [useMap, setUseMap] = useState<any>(null);

  useEffect(() => {
    import('react-leaflet').then(leaflet => {
      setUseMap(() => leaflet.useMap);
    });
  }, []);

  if (!useMap) return null;

  const MapComponent = () => {
    const map = useMap();
    useEffect(() => {
      if (route && userLocation) {
        const geoJsonLayer = L.geoJSON(route);
        const bounds = geoJsonLayer.getBounds().extend(userLocation as L.LatLngTuple);
        map.fitBounds(bounds, { padding: [50, 50] });
      } else {
        map.setView(trailCoords, 14);
      }
    }, [route, userLocation, map, trailCoords]);
    return null;
  }

  return <MapComponent />;
}


// --- MAIN CLIENT PAGE COMPONENT ---
export default function TrailSlugClientPage({ trail }: { trail: Trail }) {
  const mapRef = useRef<L.Map | null>(null);
  const [route, setRoute] = useState<GeoJsonObject | null>(null);
  const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [itinerary, setItinerary] = useState<(string | { type: string; text: string })[]>([]);
  const [isItineraryButtonDisabled, setIsItineraryButtonDisabled] = useState(false);
  const [dynamicItineraryStatus, setDynamicItineraryStatus] = useState('');
  const [icons, setIcons] = useState<{ trailIcon: L.Icon; userIcon: L.Icon } | null>(null);
  const staticItinerary = trail.itinerary;

  useEffect(() => {
    // Initialize Leaflet icons on client side
    interface IconDefaultPrototype {
      _getIconUrl?: string;
    }
    delete (L.Icon.Default.prototype as IconDefaultPrototype)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    setIcons({
      trailIcon: new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
      }),
      userIcon: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        shadowSize: [41, 41],
      }),
    });

    if (trail) {
      setItinerary(trail.itinerary);
    }
  }, [trail]);

  const findUserLocation = useCallback(() => {
    return new Promise<L.LatLng>((resolve, reject) => {
      if (mapRef.current) {
        mapRef.current.locate().on('locationfound', (e) => {
          setUserLocation(e.latlng);
          resolve(e.latlng);
        }).on('locationerror', (e) => {
          reject(e.message);
        });
      } else {
        reject('Map not initialized');
      }
    });
  }, []);

  const handleGetDirections = async () => {
    setStatusMessage('Getting your location...');
    try {
      const userLatLng = await findUserLocation();
      setStatusMessage('Calculating route...');
      const destCoords = trail.coords;
      const url = `https://router.project-osrm.org/route/v1/driving/${userLatLng.lng},${userLatLng.lat};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;

      const response = await fetch(url);
      const data = await response.json();
      if (data.routes && data.routes.length > 0) {
        setRoute(data.routes[0].geometry);
        setStatusMessage('Route shown on map!');
      } else {
        setStatusMessage('No route found.');
      }
    } catch (error) {
      setStatusMessage(typeof error === 'string' ? error : 'Could not get directions.');
      console.error(error);
    }
  };

  const isSignificantManeuver = (step: OSRMStep, index: number, steps: OSRMStep[]) => {
    if (!step.maneuver || !step.maneuver.type) return false;
    if (index === 0 || index === steps.length - 1) return true;
    const significantTypes = ['turn', 'merge', 'fork', 'roundabout', 'rotary', 'new name'];
    if (significantTypes.includes(step.maneuver.type)) return true;
    if (step.distance > 5000) return true;
    return false;
  };

  const formatManeuver = (step: OSRMStep) => {
    const { type, modifier } = step.maneuver;
    const street = step.name.replace(/,$/, '');
    const distance = step.distance > 1000 ? `${(step.distance / 1000).toFixed(1)} km` : `${Math.round(step.distance)} m`;

    if (type === 'depart') return `Start by heading towards ${street}.`;
    if (type === 'arrive') return `You will arrive at the trailhead.`;

    const simpleTurn = modifier ? modifier.replace(/_/g, ' ') : type;

    if (type === 'new name') {
      return `Continue onto ${street} for ${distance}.`;
    }

    return `Turn ${simpleTurn} onto ${street} and continue for ${distance}.`;
  };

  const getIconForStep = (item: string | { type: string; text: string }, index: number) => {
    if (typeof item !== 'string' && item.type === 'driving') {
      return 'fa-car';
    }
    if (index === itinerary.length - 1) {
      return 'fa-flag-checkered';
    }
    return 'fa-shoe-prints';
  };

  const handleDynamicItinerary = async () => {
    setDynamicItineraryStatus('Getting your location...');
    try {
      const userLatLng = await findUserLocation();
      setDynamicItineraryStatus('Fetching simplified directions...');
      const destCoords = trail.coords;
      const url = `https://router.project-osrm.org/route/v1/driving/${userLatLng.lng},${userLatLng.lat};${destCoords[1]},${destCoords[0]}?steps=true`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.routes && data.routes[0].legs[0].steps) {
        const significantSteps = data.routes[0].legs[0].steps.filter(isSignificantManeuver);
        const drivingSteps = significantSteps.map((step: OSRMStep) => ({ type: 'driving', text: formatManeuver(step) }));
        const hikingSteps = staticItinerary.slice(1);

        setItinerary([...drivingSteps, ...hikingSteps]);
        setDynamicItineraryStatus('Minimalist itinerary generated!');
        setIsItineraryButtonDisabled(true);
      } else {
        setDynamicItineraryStatus('Could not fetch driving directions.');
      }
    } catch (error) {
      setDynamicItineraryStatus(typeof error === 'string' ? error : 'Could not update itinerary.');
      console.error(error);
    }
  };

  // Don't render the map until the icons are ready
  if (!icons) {
    return (
      <div className="flex justify-center items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="w-full bg-white pt-8 pb-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative w-full h-96 shadow-lg">
            <Image
              src={trail.imageUrl}
              alt={`View from ${trail.name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{trail.name}</h1>
          <p className="mt-2 text-lg text-gray-600">{trail.masl} | {trail.difficulty} Difficulty</p>
        </div>

        <div className="mb-12">
          <div className="relative z-0 rounded-lg h-80 md:h-[400px] mb-4 border border-gray-300">
            <MapContainer center={trail.coords} zoom={14} style={{ height: '100%', width: '100%' }} ref={mapRef}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <MapController route={route} userLocation={userLocation} trailCoords={trail.coords} />
              <Marker position={trail.coords} icon={icons.trailIcon}>
                <Popup>
                  <b>{trail.name}</b>
                </Popup>
              </Marker>
              {userLocation && (
                <Marker position={userLocation} icon={icons.userIcon}>
                  <Popup>Your Location</Popup>
                </Marker>
              )}
              {route && <GeoJSON data={route as GeoJsonObject} style={{ color: '#16a34a', weight: 5 }} />}
            </MapContainer>
          </div>
          <div className="text-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={handleGetDirections}
              className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition-transform duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <i className="fas fa-map-signs"></i>
              Get Directions
            </button>
            <a
              href={`https://maps.google.com/?q=${trail.coords[0]},${trail.coords[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <i className="fab fa-google"></i>
              Open in Google Maps
            </a>
            <p className="text-sm text-gray-500 mt-2 h-4">{statusMessage}</p>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Trail Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{trail.description}</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Registered Guides</h2>
            <p className="text-gray-600 mb-4 text-sm">Contact a guide to arrange your hike. (For demonstration purposes only).</p>
            <ul className="space-y-2">
              {trail.guides.map((guide, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <i className="fas fa-user-check text-green-500"></i>
                  <span>{guide}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Itinerary</h2>
            <div className="timeline">
              {itinerary.map((item, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="timeline-dot">
                    <i className={`fas ${getIconForStep(item, index)}`}></i>
                  </div>
                  <div className="timeline-content">
                    <p>{typeof item === 'string' ? item : item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleDynamicItinerary}
              disabled={isItineraryButtonDisabled}
              className="mt-8 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Generate My Personal Itinerary
            </button>
            <p className="text-xs text-gray-500 mt-2 h-4">{dynamicItineraryStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}