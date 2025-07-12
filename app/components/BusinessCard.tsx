// app/components/BusinessCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

interface BusinessCardProps {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  color?: 'green' | 'red' | 'blue' | 'gray' | 'orange' | 'yellow';
  href?: string;
}

const colorClasses = {
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  blue: 'bg-blue-100 text-blue-800',
  gray: 'bg-gray-100 text-gray-800',
  orange: 'bg-orange-100 text-orange-800',
  yellow: 'bg-yellow-100 text-yellow-800',
};

export default function BusinessCard({ name, description, category, imageUrl, color = 'gray', href }: BusinessCardProps) {
  
  // The card's inner content, designed to have a consistent height
  const CardContent = () => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={`Image of ${name}`} layout="fill" objectFit="cover" />
      </div>
      {/* Added flex-grow and flex container to this div */}
      <div className="p-6 flex flex-col flex-grow">
        <span className={clsx("inline-block text-xs font-semibold mr-auto px-2.5 py-0.5 rounded-full mb-2", colorClasses[color])}>
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
        {/* Added flex-grow to the description to push the link down */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{description}</p>
        {href && (
          <span className="font-semibold text-green-600 group-hover:underline mt-auto pt-4 self-start">
            View Profile &rarr;
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block group focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg h-full">
        <div className="h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          <CardContent />
        </div>
      </Link>
    );
  }

  return (
    <div className="h-full">
      <CardContent />
    </div>
  );
}