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
}

const colorClasses = {
  yellow: 'bg-yellow-100 text-yellow-800',
  red: 'bg-red-100 text-red-800',
  green: 'bg-green-100 text-green-800',
};

export default function TrailCard({ name, difficulty, masl, description, imageUrl, slug, difficultyColor }: Props) {
  const shortDescription = description.split('. ')[0] + '.';

  return (
    <Link href={`/trails/${slug}`} className="block group bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500">
        <div className="relative w-full h-48">
            <Image src={imageUrl} alt={`View from ${name}`} layout="fill" objectFit="cover" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center mb-2 gap-2">
                <span className={clsx("px-2.5 py-0.5 rounded-full text-xs font-semibold", colorClasses[difficultyColor])}>
                    {difficulty}
                </span>
                <span className="text-xs text-gray-600 font-medium">{masl}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{shortDescription}</p>
            <span className="font-semibold text-green-600 group-hover:underline mt-auto pt-4 self-start">
              View Details &rarr;
            </span>
        </div>
    </Link>
  );
}