// app/(main)/directory/page.tsx
import BusinessCard from '@/app/components/BusinessCard';
import { businesses, type Business } from '@/app/data/businesses';

// Define the specific colors our BusinessCard component accepts
type CardColor = 'green' | 'red' | 'blue' | 'gray' | 'orange' | 'yellow';

/**
 * Safely maps the color string from the data file to the specific
 * color type required by the BusinessCard component.
 * @param color The color string from the business data.
 * @returns A valid CardColor or 'gray' as a default.
 */
function mapColor(color: string): CardColor {
  const validColors: CardColor[] = ['green', 'red', 'blue', 'gray', 'orange', 'yellow'];
  // Handle 'grey' from data and map it to 'gray' for the component
  if (color === 'grey') {
    return 'gray';
  }
  // Check if the color is one of the valid options
  if (validColors.includes(color as CardColor)) {
    return color as CardColor;
  }
  // Return a default color if no match is found
  return 'gray';
}

export default function DirectoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Local Business Directory</h1>
        <p className="mt-2 text-lg text-gray-600">Support local! Find the best places to eat, stay, and relax.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businesses.map((business: Business) => (
          <BusinessCard 
            key={business.slug}
            name={business.name}
            description={business.description}
            category={business.category}
            imageUrl={business.imageUrl}
            color={mapColor(business.color)}
            href={`/directory/${business.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
