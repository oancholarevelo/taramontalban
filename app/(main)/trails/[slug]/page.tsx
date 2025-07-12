// app/(main)/trails/[slug]/page.tsx
"use client";

import { allTrails } from '@/app/data/trails';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useEffect } from 'react';

// Fix for default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function TrailDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const trail = allTrails[slug];

  const [route, setRoute] = useState<any>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [itinerary, setItinerary] = useState<string[]>([]);
  const [dynamicItineraryStatus, setDynamicItineraryStatus] = useState('');
  const [isItineraryButtonDisabled, setIsItineraryButtonDisabled] = useState(false);

  useEffect(() => {
    if (trail) {
      setItinerary(trail.itinerary);
    }
  }, [trail]);

  if (!trail) {
    notFound();
  }

  const handleGetDirections = () => {
    if (!navigator.geolocation) {
      setStatusMessage('Geolocation is not supported by your browser.');
      return;
    }
    setStatusMessage('Getting your location...');
    navigator.geolocation.getCurrentPosition(async (position) => {
      setStatusMessage('Calculating route...');
      const userCoords: [number, number] = [position.coords.latitude, position.coords.longitude];
      const destCoords = trail.coords;
      const url = `https://router.project-osrm.org/route/v1/driving/${userCoords[1]},${userCoords[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          setRoute(data.routes[0].geometry);
          setStatusMessage('Route shown!');
        } else {
          setStatusMessage('No route found.');
        }
      } catch (error) {
        setStatusMessage('Error getting route.');
      }
    }, () => {
      setStatusMessage('Location denied.');
    });
  };

  const handleDynamicItinerary = () => {
     if (!navigator.geolocation) {
      setDynamicItineraryStatus('Geolocation is not supported by your browser.');
      return;
    }
    setDynamicItineraryStatus('Getting your location...');
    navigator.geolocation.getCurrentPosition(async (position) => {
      setDynamicItineraryStatus('Calculating travel time...');
      const userCoords: [number, number] = [position.coords.latitude, position.coords.longitude];
      const destCoords = trail.coords;
      const url = `https://router.project-osrm.org/route/v1/driving/${userCoords[1]},${userCoords[0]};${destCoords[1]},${destCoords[0]}?overview=false`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          const duration = data.routes[0].duration; // seconds
          const distance = data.routes[0].distance; // meters

          let mins = Math.round(duration / 60);
          let hours = Math.floor(mins / 60);
          mins = mins % 60;
          let durationStr = hours > 0 ? `${hours} hr${hours > 1 ? 's' : ''} ` : '';
          durationStr += `${mins} min`;
          let distanceStr = distance > 1000 ? `${(distance/1000).toFixed(1)} km` : `${Math.round(distance)} m`;

          const dynamicStep = `Depart from your location → trailhead (Approx. ${distanceStr}, ${durationStr} by car)`;
          
          setItinerary(prev => [dynamicStep, ...prev.slice(1)]);
          setDynamicItineraryStatus('Personalized itinerary shown!');
          setIsItineraryButtonDisabled(true);
        } else {
          setDynamicItineraryStatus('Could not calculate travel time.');
        }
      } catch (error) {
        setDynamicItineraryStatus('Error calculating travel time.');
      }
    }, () => {
      setDynamicItineraryStatus('Location denied.');
    });
  };

  return (
    <>
      <div className="bg-white">
        <Image src={trail.imageUrl} alt={`View from ${trail.name}`} width={1200} height={400} className="w-full h-64 md:h-96 object-cover" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{trail.name}</h1>
          <p className="mt-2 text-lg text-gray-600">{trail.masl} | {trail.difficulty} Difficulty</p>
        </div>

        <div className="mb-12">
          <div className="rounded-lg h-80 md:h-[400px] mb-4 border border-gray-300 z-10">
            <MapContainer center={trail.coords} zoom={14} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' />
              <Marker position={trail.coords}>
                <Popup><b>{trail.name}</b></Popup>
              </Marker>
              {route && <GeoJSON data={route} style={{ color: '#16a34a', weight: 5 }} />}
            </MapContainer>
          </div>
          <div className="text-center">
            <button onClick={handleGetDirections} className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-transform duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              <i className="fas fa-map-signs"></i>
              Get Directions
            </button>
            <p className="text-sm text-gray-500 mt-2">{statusMessage}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div className="bg-gray-50 p-6 rounded-lg border md:col-span-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sample Itinerary</h2>
            <ul className="space-y-3">
              {itinerary.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <i className="fas fa-clock text-gray-400 mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={handleDynamicItinerary} disabled={isItineraryButtonDisabled} className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400">Show travel time from my location</button>
            <p className="text-xs text-gray-500 mt-2">{dynamicItineraryStatus}</p>
          </div>
        </div>
      </div>
    </>
  );
}
