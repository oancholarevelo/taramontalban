import type { Metadata } from 'next';
import DirectoryClientPage from './DirectoryClientPage';

export const metadata: Metadata = {
  title: 'Tourist Spots & Business Directory in Montalban, Rizal | Rodriguez Guide',
  description: 'Find the best tourist spots, resorts, restaurants, and local businesses in Montalban (Rodriguez), Rizal. Your guide to exploring the adventure capital.',
};

export default function DirectoryPage() {
  return <DirectoryClientPage />;
}