import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | Rodriguez Guide',
  description: 'Discover the story and mission behind the Rodriguez Guide. Learn how we\'re dedicated to showcasing the adventure and beauty of Rodriguez, Rizal, through community-driven content.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          <div className="text-center lg:text-left">
            <span className="font-semibold text-green-600 uppercase tracking-wide">Our Story</span>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Sharing the Soul of <span className="text-green-600">Rodriguez, Rizal.</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We believe that the best adventures are the ones shared. The Rodriguez Guide is a community-driven portal dedicated to showcasing the authentic beauty, culture, and spirit of our town.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
              <div className="rounded-md shadow">
                <Link
                  href="/trails"
                  className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-3 md:text-base md:px-8"
                >
                  Explore Trails
                </Link>
              </div>
              <div className="mt-3 sm:mt-0">
                <Link
                  href="/directory"
                  className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-3 md:text-base md:px-8"
                >
                  Discover Spots
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <Image
              className="h-56 w-full object-cover rounded-xl shadow-lg sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://placehold.co/1000x800/3498db/ffffff?text=Wawa+River"
              alt="A scenic view of the Wawa River in Rodriguez"
              width={1000}
              height={800}
              priority
            />
          </div>
        </div>
      </div>


      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Guiding Principles</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything we do is guided by a commitment to our community and to the adventurers we serve.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-600 text-white mx-auto">
                <i className="fas fa-check-circle text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">Authenticity</h3>
              <p className="mt-2 text-base text-gray-600">Providing genuine, first-hand accounts and verified information you can trust.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-600 text-white mx-auto">
                <i className="fas fa-users text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">Community</h3>
              <p className="mt-2 text-base text-gray-600">Championing local businesses and empowering community storytellers.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-600 text-white mx-auto">
                <i className="fas fa-mountain text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">Adventure</h3>
              <p className="mt-2 text-base text-gray-600">Inspiring responsible exploration of Rodriguez&apos;s breathtaking natural wonders.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <figure className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl font-medium text-gray-800">
              <p>&ldquo;The Rodriguez Guide is an indispensable tool for anyone looking to explore the area. It led me to hidden gems I never would have found on my own. It feels like getting advice from a trusted local friend.&rdquo;</p>
            </blockquote>
            <figcaption className="mt-8">
              <div className="text-base text-gray-900 font-semibold">Alex Reyes</div>
              <div className="text-sm text-gray-600">Avid Hiker & Visitor</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}