// app/components/BusinessCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface BusinessCardProps {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  color?: 'green' | 'red' | 'blue' | 'gray' | 'orange' | 'yellow';
  href?: string;
}

const categoryTagStyle = "inline-block text-xs font-semibold mr-auto px-2.5 py-0.5 rounded-full mb-2 bg-green-100 text-green-800";

export default function BusinessCard({ name, description, category, imageUrl, href }: BusinessCardProps) {
  
  const CardContent = () => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={`Image of ${name}`} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className={categoryTagStyle}>
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
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
        <div className="h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
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