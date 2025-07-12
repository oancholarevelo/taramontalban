// app/(main)/trails/[slug]/page.tsx
import type { Metadata } from 'next';
import { allTrails } from '@/app/data/trails';
import { notFound } from 'next/navigation';
import TrailSlugClientPage from './TrailSlugClientPage';

// --- SERVER-SIDE FUNCTIONS ---

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // Await params to get slug
  const trail = allTrails[slug];

  if (!trail) {
    return {
      title: "Trail Not Found",
      description: "This trail could not be found in our guide to Montalban, Rizal.",
    };
  }

  return {
    title: `${trail.name} | Hiking Trail in Montalban, Rizal`,
    description: `Explore ${trail.name}, a popular hiking spot and tourist attraction in Montalban. Get details on the trail, difficulty (${trail.difficulty}), MASL (${trail.masl}), and how to get there.`,
    alternates: {
      canonical: `/trails/${slug}`,
    },
  };
}

// Generate static paths at build time for performance
export async function generateStaticParams() {
  return Object.keys(allTrails).map(slug => ({
    slug,
  }));
}

// --- MAIN PAGE COMPONENT (SERVER) ---
export default async function TrailDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params to get slug
  const trail = allTrails[slug];

  if (!trail) {
    notFound();
  }

  // --- SEO: STRUCTURED DATA (JSON-LD) ---
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: trail.name,
    description: trail.description,
    image: trail.imageUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rodriguez',
      addressRegion: 'Rizal',
      addressCountry: 'PH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: trail.coords[0],
      longitude: trail.coords[1],
    },
  };

  return (
    <>
      {/* Add JSON-LD Script to the page head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Render the client component, passing the trail data as a prop */}
      <TrailSlugClientPage trail={trail} />
    </>
  );
}