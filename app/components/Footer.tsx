// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Navigate</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-base text-gray-600 hover:text-green-600">Home</Link></li>
              <li><Link href="/directory" className="text-base text-gray-600 hover:text-green-600">Directory</Link></li>
              <li><Link href="/trails" className="text-base text-gray-600 hover:text-green-600">Trails</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Community</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/events" className="text-base text-gray-600 hover:text-green-600">Events</Link></li>
              <li><Link href="/articles" className="text-base text-gray-600 hover:text-green-600">Articles</Link></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-green-600">Submit a Business</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">About</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 hover:text-green-600">Our Mission</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-green-600">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Connect</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-green-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-500 hover:text-green-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500 hover:text-green-600"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rodriguez Tourism Portal. A portfolio project.</p>
        </div>
      </div>
    </footer>
  );
}