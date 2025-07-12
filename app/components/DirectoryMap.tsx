// app/components/DirectoryMap.tsx
"use client";

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { businesses } from '@/app/data/businesses';

// Dynamic imports for react-leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

const businessesWithCoords = businesses.filter((b) => b.coords);

export default function DirectoryMap() {
  const center: L.LatLngExpression = [14.73, 121.19];

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

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {businessesWithCoords.map((business) => (
          <Marker key={business.slug} position={business.coords as L.LatLngExpression}>
            <Popup>
              <b>{business.name}</b>
              <br />
              <Link href={`/directory/${business.slug}`} className="text-green-600 font-bold" style={{ textDecoration: 'underline' }}>
                View Details
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}