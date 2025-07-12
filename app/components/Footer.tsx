// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* CTA Banner Section */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Want to Contribute?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-100">
            Join our community and help showcase the beauty of Rodriguez, Rizal.
          </p>
          <Link
            href="/contribute"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Standard Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/" className="text-gray-500 hover:text-gray-600">Home</Link>
            <Link href="/articles" className="text-gray-500 hover:text-gray-600">Articles</Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-600">About</Link>
            <Link href="/contribute" className="text-gray-500 hover:text-gray-600">Contribute</Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500">&copy; {new Date().getFullYear()} Rodriguez Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}