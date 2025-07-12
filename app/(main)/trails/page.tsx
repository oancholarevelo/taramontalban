// app/(main)/trails/page.tsx
"use client";

import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import TrailCard from '@/app/components/TrailCard';
import SkeletonCard from '@/app/components/SkeletonCard';
import { allTrails } from '@/app/data/trails';

const TrailMap = dynamic(() => import('@/app/components/TrailMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse"></div>,
});

const trails = Object.values(allTrails);

export default function TrailsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Hiking Trails & Adventure</h1>
        <p className="mt-2 text-lg text-gray-600">Explore the majestic mountains of Rodriguez. Click on a trail to see more details and get directions.</p>
      </div>

      <div className="rounded-lg h-96 md:h-[500px] mb-12 z-10 border border-gray-300">
        <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse"></div>}>
          <TrailMap />
        </Suspense>
      </div>

      <div className="space-y-8">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
        ) : (
          trails.map((trail, index) => {
              const difficulty = trail.difficulty;
              let difficultyColor: 'yellow' | 'red' | 'green' = 'green';
              if (difficulty.includes('3/9') || difficulty.includes('4/9')) {
                  difficultyColor = 'yellow';
              } else if (difficulty.includes('5/9') || difficulty.includes('6/9')) {
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
                      imageUrl={`https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} // Replace with real images
                      difficultyColor={difficultyColor}
                      layout={index % 2 === 0 ? 'left' : 'right'}
                  />
              );
          })
        )}
      </div>
    </div>
  );
}