import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 animate-fade-in-down">
            Discover the Beauty of <span className="text-green-600">Rodriguez, Rizal</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 animate-fade-in-up">
            Your ultimate guide to the adventure capital of the Philippines. Explore stunning trails, vibrant local businesses, and rich cultural events.
          </p>
          <div className="mt-8 animate-fade-in">
            <Link href="/directory" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-transform duration-300 transform hover:scale-105">
              Explore Businesses
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            <p className="mt-2 text-lg text-gray-600">A centralized hub for everything Rodriguez.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <i className="fas fa-store text-4xl text-green-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Business Directory</h3>
              <p className="text-gray-600">Find the best resorts, restaurants, and cafes with detailed profiles and reviews.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <i className="fas fa-hiking text-4xl text-green-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Interactive Trail Maps</h3>
              <p className="text-gray-600">Discover hiking trails with difficulty ratings, photos, and guide contacts.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <i className="fas fa-calendar-alt text-4xl text-amber-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Local Events Calendar</h3>
              <p className="text-gray-600">Stay updated on town fiestas, cultural events, and community gatherings.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <i className="fas fa-gem text-4xl text-amber-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Hidden Gems</h3>
              <p className="text-gray-600">Read articles featuring unique spots and untold stories of Rodriguez.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}