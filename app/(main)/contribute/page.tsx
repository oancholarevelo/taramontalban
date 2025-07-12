import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contribute | Rodriguez Guide',
  description: 'Help grow the Rodriguez Guide! Learn how you can contribute by submitting local businesses, writing articles, or sharing feedback to support our community.',
};

export default function ContributePage() {
  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Help Build The Guide
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our community portal thrives on contributions from people like you. Help us keep the guide accurate, fresh, and comprehensive.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
              <i className="fas fa-store text-3xl text-green-600"></i>
            </div>
            <h2 className="mt-6 text-xl font-bold text-gray-900">Submit a Business</h2>
            <p className="mt-2 text-base text-gray-600">
              Know a great local resort, restaurant, or hidden gem? Your submission helps everyone discover the best of Rodriguez.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
              <i className="fas fa-pen-alt text-3xl text-green-600"></i>
            </div>
            <h2 className="mt-6 text-xl font-bold text-gray-900">Write for Us</h2>
            <p className="mt-2 text-base text-gray-600">
              Share your stories, hiking experiences, or guides. We&apos;re always looking for fresh perspectives on Montalban&apos;s adventures.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
              <i className="fas fa-bullhorn text-3xl text-green-600"></i>
            </div>
            <h2 className="mt-6 text-xl font-bold text-gray-900">Provide Feedback</h2>
            <p className="mt-2 text-base text-gray-600">
              Found an error or have a suggestion? Your feedback is invaluable in helping us improve the guide for everyone.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to Get Started?</h2>
            <p className="mt-3 text-lg text-gray-600">
              Send us an email with your contribution idea, and we&apos;ll get back to you shortly.
            </p>
            <div className="mt-8">
                <a 
                    href="mailto:contact@rodriguezguide.com?subject=Contribution Inquiry"
                    className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-transform duration-300 transform hover:scale-105"
                >
                    Email Us
                </a>
            </div>
        </div>

      </div>
    </div>
  );
}