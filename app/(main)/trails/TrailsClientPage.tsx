// app/(main)/trails/TrailsClientPage.tsx
"use client";

import { useState, useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import TrailCard from '@/app/components/TrailCard';
import { allTrails } from '@/app/data/trails';

const TrailMap = dynamic(() => import('@/app/components/TrailMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>,
});

const trails = Object.values(allTrails);

const getDifficultyValue = (difficulty: string): number => {
    const match = difficulty.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 99;
};

export default function TrailsClientPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('default');

    const filteredAndSortedTrails = useMemo(() => {
        const filtered = trails.filter(trail =>
            trail.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (sortBy === 'easy-to-hard') {
            return filtered.sort((a, b) => getDifficultyValue(a.difficulty) - getDifficultyValue(b.difficulty));
        }
        if (sortBy === 'hard-to-easy') {
            return filtered.sort((a, b) => getDifficultyValue(b.difficulty) - getDifficultyValue(a.difficulty));
        }

        return filtered;
    }, [searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Hiking Trails in Montalban, Rizal</h1>
        <p className="mt-2 text-lg text-gray-600">Explore the majestic mountains of Rodriguez.</p>
      </div>

      <div className="relative z-0 rounded-lg h-96 md:h-[500px] mb-12 border border-gray-300">
        <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>}>
          <TrailMap />
        </Suspense>
      </div>

       <div className="relative flex items-center w-full mb-8 bg-white border border-gray-300 rounded-lg shadow-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        <input
          id="search-trail"
          type="text"
          placeholder="Search trails by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border-none rounded-l-lg focus:ring-0"
        />
        <div className="border-l border-gray-300">
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-full pl-4 pr-8 py-2.5 border-none bg-transparent rounded-r-lg focus:ring-0 transition appearance-none"
              style={{ background: 'url(\'data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"%3e%3cpath stroke="%236b7280" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/%3e%3c/svg%3e\') right 0.5rem center / 1.25em 1.25em no-repeat' }}
            >
              <option value="default">Sort by Default</option>
              <option value="easy-to-hard">Difficulty: Easy to Hard</option>
              <option value="hard-to-easy">Difficulty: Hard to Easy</option>
            </select>
        </div>
      </div>

      <div className="space-y-8">
        {filteredAndSortedTrails.length > 0 ? (
            filteredAndSortedTrails.map((trail, index) => {
                const difficulty = trail.difficulty;
                let difficultyColor: 'yellow' | 'red' | 'green' = 'green';
                const difficultyValue = getDifficultyValue(difficulty);

                if (difficultyValue >= 3 && difficultyValue < 5) {
                    difficultyColor = 'yellow';
                } else if (difficultyValue >= 5) {
                    difficultyColor = 'red';
                }

                return (
                    <TrailCard
                        key={trail.slug}
                        name={trail.name}
                        slug={trail.slug}
                        difficulty={trail.difficulty}
                        masl={trail.masl}
                        description={trail.description}
                        imageUrl={trail.imageUrl}
                        difficultyColor={difficultyColor}
                        layout={index % 2 === 0 ? 'left' : 'right'}
                    />
                );
            })
        ) : (
            <p className="text-center text-gray-500 py-16">No trails found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}