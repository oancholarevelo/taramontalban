import type { Metadata } from 'next';
import TrailsClientPage from './TrailsClientPage';

export const metadata: Metadata = {
  title: 'Hiking Trails & Spots in Montalban (Rodriguez), Rizal | Rodriguez Guide',
  description: 'Discover the best hiking trails and tourist spots in Montalban, Rizal. Your complete guide to mountains like Binicayan, Pamitinan, and more. Find trail details, difficulty, and maps.',
};

export default function TrailsPage() {
    return <TrailsClientPage />;
}