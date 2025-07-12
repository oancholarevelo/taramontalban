// app/components/TrailCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

interface Props {
  name: string;
  difficulty: string;
  masl: string;
  description: string;
  imageUrl: string;
  slug: string;
  difficultyColor: 'yellow' | 'red' | 'green';
  layout: 'left' | 'right';
}

const colorClasses = {
  yellow: 'bg-yellow-100 text-yellow-800',
  red: 'bg-red-100 text-red-800',
  green: 'bg-green-100 text-green-800',
};

export default function TrailCard({ name, difficulty, masl, description, imageUrl, slug, difficultyColor, layout }: Props) {
  const shortDescription = description.split('. ')[0] + '.';

  return (
    <div className="bg-white rounded-lg border border-gray-200 flex flex-col md:flex-row overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:glow">
      <div className={clsx("w-full md:w-1/2 flex-shrink-0", layout === 'right' && 'md:order-last')}>
         <Image src={imageUrl} alt={`View from ${name}`} width={600} height={400} className="w-full h-64 md:h-auto object-cover"/>
      </div>
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <div className="flex items-center my-2 gap-4">
          <span className={clsx("px-3 py-1 rounded-full text-xs font-semibold", colorClasses[difficultyColor])}>
            {difficulty}
          </span>
          <span className="text-sm text-gray-600 font-medium">{masl}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">{shortDescription}</p>
        <Link href={`/trails/${slug}`} className="font-semibold text-green-600 hover:underline mt-auto pt-4">
          View Full Details &rarr;
        </Link>
      </div>
    </div>
  );
}