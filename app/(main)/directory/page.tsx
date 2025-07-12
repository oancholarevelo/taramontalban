// app/(main)/directory/page.tsx
"use client";

import { useState, useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import BusinessCard from '@/app/components/BusinessCard';
import { businesses, type Business } from '@/app/data/businesses';

// Lazy-load the map component
const DirectoryMap = dynamic(() => import('@/app/components/DirectoryMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>,
});

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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories for the filter dropdown
  const categories = useMemo(() => ['All', ...Array.from(new Set(businesses.map(b => b.category)))], []);

  const filteredBusinesses = useMemo(() => {
    return businesses.filter(business => {
      const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
      const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Local Business Directory</h1>
        <p className="mt-2 text-lg text-gray-600">Support local! Find the best places to eat, stay, and relax.</p>
      </div>

      <div className="relative z-0 rounded-lg h-96 md:h-[500px] mb-12 border border-gray-300">
        <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>}>
          <DirectoryMap />
        </Suspense>
      </div>
      
      {/* Unified Search and Filter Controls */}
      <div className="relative flex items-center w-full mb-8 bg-white border border-gray-300 rounded-lg shadow-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        <input
          id="search-business"
          type="text"
          placeholder="Search businesses by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border-none rounded-l-lg focus:ring-0"
        />
        <div className="border-l border-gray-300">
            <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="h-full pl-4 pr-8 py-2.5 border-none bg-transparent rounded-r-lg focus:ring-0 transition appearance-none"
            style={{ background: 'url(\'data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"%3e%3cpath stroke="%236b7280" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/%3e%3c/svg%3e\') right 0.5rem center / 1.25em 1.25em no-repeat' }}
            >
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
            </select>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map((business: Business) => (
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
        ) : (
          <p className="col-span-full text-center text-gray-500 py-16">No businesses found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}