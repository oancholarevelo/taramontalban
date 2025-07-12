// app/(main)/contribute/page.tsx
import type { Metadata } from 'next';

// SEO Metadata for the new page
export const metadata: Metadata = {
  title: 'Contribute | Rodriguez Guide',
  description: 'Help grow the Rodriguez Guide! Learn how you can contribute by submitting local businesses, writing articles, or sharing feedback to support our community.',
};

export default function ContributePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Contribute to the Guide
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Our community portal thrives on contributions from people like you. Help us keep the guide accurate, fresh, and comprehensive.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {/* Contribution Option 1: Submit a Place */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <i className="fas fa-store text-3xl text-green-600"></i>
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Submit a Business or Tourist Spot</h2>
              <p className="mt-2 text-lg text-gray-600">
                Know a great local resort, restaurant, or hidden gem that&apos;s not on our list? We&apos;d love to hear about it. Your submission helps tourists and locals alike discover the best of Rodriguez.
              </p>
            </div>
          </div>

          {/* Contribution Option 2: Write an Article */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <i className="fas fa-pen-alt text-3xl text-green-600"></i>
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Write for Us</h2>
              <p className="mt-2 text-lg text-gray-600">
                Are you a writer, photographer, or local expert? Share your stories, hiking experiences, or guides with our audience. We&apos;re always looking for fresh perspectives on the adventures Montalban has to offer.
              </p>
            </div>
          </div>
          
          {/* Contribution Option 3: Provide Feedback */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <i className="fas fa-bullhorn text-3xl text-green-600"></i>
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Provide Feedback</h2>
              <p className="mt-2 text-lg text-gray-600">
                Found an error, an outdated listing, or have a suggestion for improving the site? Your feedback is invaluable in helping us maintain a high-quality resource for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
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