// app/(main)/directory/page.tsx
import type { Metadata } from 'next';
import DirectoryClientPage from './DirectoryClientPage'; // Import the new client component

// SEO Metadata (Server-Side)
export const metadata: Metadata = {
  title: 'Tourist Spots & Business Directory in Montalban, Rizal | Rodriguez Guide',
  description: 'Find the best tourist spots, resorts, restaurants, and local businesses in Montalban (Rodriguez), Rizal. Your guide to exploring the adventure capital.',
};

// This is now a Server Component
export default function DirectoryPage() {
  return <DirectoryClientPage />;
}