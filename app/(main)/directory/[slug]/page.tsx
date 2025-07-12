// app/(main)/directory/[slug]/page.tsx
import { businesses } from '@/app/data/businesses';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// This function generates the static pages at build time
export async function generateStaticParams() {
  return businesses.map(business => ({
    slug: business.slug,
  }));
}

export default function BusinessDetailPage({ params }: { params: { slug: string } }) {
  const business = businesses.find(b => b.slug === params.slug);

  if (!business) {
    notFound();
  }

  const colorMap: { [key: string]: string } = {
    green: '#10B981',
    red: '#EF4444',
    blue: '#3B82F6',
    gray: '#6B7280',
    orange: '#F97316',
    yellow: '#F59E0B',
    grey: '#6B7280' // Handle 'grey' alias
  };
  
  const backgroundColor = colorMap[business.color] || '#6B7280';

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image 
            src={business.imageUrl} 
            alt={business.name} 
            layout="fill"
            objectFit="cover"
            priority 
          />
        </div>
        
        <div className="text-center">
            <span 
                className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4" 
                style={{ backgroundColor }}
            >
                {business.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{business.name}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{business.description}</p>
        </div>

        {business.details && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Details</h2>
            <div className="prose max-w-none text-gray-700">
              <p>{business.details}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}