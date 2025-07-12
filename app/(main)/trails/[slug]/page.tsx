"use client";

import { allTrails } from '@/app/data/trails';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression, Map as LeafletMap } from 'leaflet';
import { useState, useEffect, useCallback, useRef } from 'react';
import { GeoJsonObject } from 'geojson';

// Define the structure for OSRM step-by-step directions
interface OSRMStep {
    maneuver: {
        type: string;
        modifier?: string;
        location: [number, number];
    };
    name: string;
    distance: number;
    duration: number;
}

// Fix for default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Trail Icon
const trailIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
});

// Custom User Location Icon
const userIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41],
});

// Map Controller Component
function MapController({ route, userLocation, trailCoords }: { route: GeoJsonObject | null, userLocation: LatLngExpression | null, trailCoords: LatLngExpression }) {
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

export default function TrailDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const trail = allTrails[slug];

  const mapRef = useRef<L.Map | null>(null);
  const [route, setRoute] = useState<GeoJsonObject | null>(null);
  const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [itinerary, setItinerary] = useState<string[]>([]);
  const [isItineraryButtonDisabled, setIsItineraryButtonDisabled] = useState(false);
  const [dynamicItineraryStatus, setDynamicItineraryStatus] = useState('');

  const staticItinerary = trail ? trail.itinerary : [];

  useEffect(() => {
    if (trail) {
      setItinerary(trail.itinerary);
    }
  }, [trail]);

  if (!trail) {
    notFound();
  }

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
            reject("Map not initialized");
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
            const drivingSteps = significantSteps.map(formatManeuver);

            const combinedItinerary = [...drivingSteps, ...staticItinerary.slice(1)];
            setItinerary(combinedItinerary);
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

  return (
    <div className="bg-white">
      <div className="w-full bg-white pt-8 pb-4">
        <div className="max-w-5xl mx-auto px-4">
            <div className="relative w-full h-96 shadow-lg">
                <Image 
                    src={trail.imageUrl} 
                    alt={`View from ${trail.name}`} 
                    layout="fill" 
                    objectFit="cover" 
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
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' />
              <MapController route={route} userLocation={userLocation} trailCoords={trail.coords}/>
              <Marker position={trail.coords} icon={trailIcon}>
                <Popup><b>{trail.name}</b></Popup>
              </Marker>
              {userLocation && (
                <Marker position={userLocation} icon={userIcon}>
                    <Popup>Your Location</Popup>
                </Marker>
              )}
              {route && <GeoJSON data={route} style={{ color: '#16a34a', weight: 5 }} />}
            </MapContainer>
          </div>
          <div className="text-center space-y-4 md:space-y-0 md:space-x-4">
            <button onClick={handleGetDirections} className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition-transform duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              <i className="fas fa-map-signs"></i>
              Get Directions
            </button>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${trail.coords[0]},${trail.coords[1]}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                <i className="fab fa-google"></i>
                Open in Google Maps
            </a>
            <p className="text-sm text-gray-500 mt-2 h-4">{statusMessage}</p>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="md:col-span-3">
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

          <div className="bg-white p-6 rounded-lg border md:col-span-3 mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Itinerary</h2>
            <div className="timeline">
              {itinerary.map((item, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="timeline-dot">
                     <i className="fas fa-route"></i>
                  </div>
                  <div className="timeline-content">
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleDynamicItinerary} disabled={isItineraryButtonDisabled} className="mt-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
              Generate My Personal Itinerary
            </button>
            <p className="text-xs text-gray-500 mt-2 h-4">{dynamicItineraryStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}