// app/components/DirectoryMap.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { businesses } from '@/app/data/businesses';
import Link from 'next/link';

// Fix for default marker icon issue
interface IconOptions {
  _getIconUrl?: string;
  iconRetinaUrl: string;
  iconUrl: string;
  shadowUrl: string;
}

delete ((L.Icon.Default.prototype as unknown) as IconOptions)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const businessesWithCoords = businesses.filter(b => b.coords);

export default function DirectoryMap() {
    const center: L.LatLngExpression = [14.73, 121.19];

    return (
        <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {businessesWithCoords.map(business => (
                <Marker key={business.slug} position={business.coords as L.LatLngExpression}>
                    <Popup>
                        <b>{business.name}</b><br />
                        <Link href={`/directory/${business.slug}`} className="text-green-600 font-bold" style={{ textDecoration: 'underline' }}>
                            View Details
                        </Link>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}