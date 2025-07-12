// app/(main)/trails/page.tsx
import TrailCard from '@/app/components/TrailCard';
import TrailMap from '@/app/components/TrailMap';
import { allTrails } from '@/app/data/trails';

const trails = Object.values(allTrails);

export default function TrailsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Hiking Trails & Adventure</h1>
        <p className="mt-2 text-lg text-gray-600">Explore the majestic mountains of Rodriguez. Click on a trail to see more details and get directions.</p>
      </div>

      <div className="rounded-lg h-96 md:h-[500px] mb-12 z-10 border border-gray-300">
        <TrailMap />
      </div>

      <div className="space-y-8">
        {trails.map((trail, index) => {
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
                    imageUrl={`https://placehold.co/600x400/7f8c8d/ffffff?text=${trail.name.replace(/\s/g, '+')}`}
                    difficultyColor={difficultyColor}
                    layout={index % 2 === 0 ? 'left' : 'right'}
                />
            );
        })}
      </div>
    </div>
  );
}