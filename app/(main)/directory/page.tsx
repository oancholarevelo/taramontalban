// app/(main)/directory/page.tsx
"use client";

import { useEffect, useState } from 'react';
import BusinessCard from '@/app/components/BusinessCard';
import SkeletonCard from '@/app/components/SkeletonCard';
import { businesses, type Business } from '@/app/data/businesses';

type CardColor = 'green' | 'red' | 'blue' | 'gray' | 'orange' | 'yellow';

function mapColor(color: string): CardColor {
  const validColors: CardColor[] = ['green', 'red', 'blue', 'gray', 'orange', 'yellow'];
  if (color === 'grey') return 'gray';
  if (validColors.includes(color as CardColor)) {
    return color as CardColor;
  }
  return 'gray';
}

export default function DirectoryPage() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Local Business Directory</h1>
        <p className="mt-2 text-lg text-gray-600">Support local! Find the best places to eat, stay, and relax.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
        ) : (
          businesses.map((business: Business) => (
            <BusinessCard 
              key={business.slug}
              name={business.name}
              description={business.description}
              category={business.category}
              imageUrl={business.imageUrl}
              color={mapColor(business.color)}
              href={`/directory/${business.slug}`}
            />
          ))
        )}
      </div>
    </div>
  );
}