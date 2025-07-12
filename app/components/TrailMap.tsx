// app/components/TrailMap.tsx
"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { GeoJsonObject } from 'geojson';
import { allTrails as trailsData } from '@/app/data/trails';

// Dynamic imports for react-leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });
const GeoJSON = dynamic(() => import('react-leaflet').then((mod) => mod.GeoJSON), { ssr: false });

type Trail = {
  name: string;
  slug: string;
  coords: [number, number];
};
const allTrails: Trail[] = Object.values(trailsData);

export default function TrailMap() {
  const [route, setRoute] = useState<GeoJsonObject | null>(null);

  // Initialize Leaflet icons on client side
  useEffect(() => {
    // Use proper type for L.Icon.Default.prototype
    interface IconDefaultPrototype {
      _getIconUrl?: string;
    }
    delete (L.Icon.Default.prototype as IconDefaultPrototype)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  const handleGetDirections = (destCoords: [number, number]) => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const userCoords: [number, number] = [position.coords.latitude, position.coords.longitude];
        const url = `https://router.project-osrm.org/route/v1/driving/${userCoords[1]},${userCoords[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.routes && data.routes.length > 0) {
            setRoute(data.routes[0].geometry);
          } else {
            alert('No route found.');
          }
        } catch (error) {
          console.error('Failed to fetch route:', error);
          alert('Error getting directions.');
        }
      },
      () => {
        alert('Could not get your location.');
      }
    );
  };

  return (
    <MapContainer center={[14.76, 121.19]} zoom={12} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {allTrails.map((trail) => (
        <Marker key={trail.slug} position={trail.coords}>
          <Popup>
            <b>{trail.name}</b>
            <br />
            <Link href={`/trails/${trail.slug}`} className="text-green-600 font-bold" style={{ textDecoration: 'underline' }}>
              View Details
            </Link>
            <br />
            <button
              onClick={() => handleGetDirections(trail.coords)}
              className="mt-2 p-1 bg-green-600 text-white rounded cursor-pointer"
            >
              Get Directions
            </button>
          </Popup>
        </Marker>
      ))}
      {route && <GeoJSON data={route as GeoJsonObject} style={{ color: '#16a34a', weight: 5 }} />}
    </MapContainer>
  );
}