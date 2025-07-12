// app/(main)/directory/[slug]/page.tsx
import { businesses } from '@/app/data/businesses';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Generate static paths for all businesses
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
  };
  
  const backgroundColor = colorMap[business.color] || '#16a34a';

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Image src={business.imageUrl} alt={business.name} width={900} height={400} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{business.name}</h1>
      <span 
        className="inline-block px-3 py-1 rounded-full text-white mb-4" 
        style={{ backgroundColor }}
      >
        {business.category}
      </span>
      <p className="text-lg text-gray-700 mb-6">{business.description}</p>
      {business.details && (
        <div className="prose max-w-none">
          <p>{business.details}</p>
        </div>
      )}
    </div>
  );
}
