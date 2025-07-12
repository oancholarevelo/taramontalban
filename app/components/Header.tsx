"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  { href: "/trails", label: "Hiking Trails" },
  { href: "/events", label: "Events" },
  { href: "/articles", label: "Articles" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-green-700 transition-colors">
            <i className="fas fa-mountain-sun text-green-600"></i>
            <span>Rodriguez Guide</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  {
                    "text-green-600 font-semibold": pathname === link.href,
                    "text-gray-600 hover:text-gray-900": pathname !== link.href
                  }
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/contribute" className="ml-4 bg-green-600 text-white font-bold py-2 px-5 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Contribute
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded={isMenuOpen}
            >
              <i className={clsx("h-6 w-6 fas", isMenuOpen ? "fa-times" : "fa-bars")}></i>
            </button>
          </div>

        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                {navLinks.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    {
                        "bg-green-100 text-green-700": pathname === link.href,
                        "text-gray-600 hover:bg-gray-100 hover:text-gray-900": pathname !== link.href
                    }
                    )}
                >
                    {link.label}
                </Link>
                ))}
                <div className="pt-2">
                    <Link href="/contribute" className="block w-full text-center bg-green-600 text-white font-bold py-2 px-5 rounded-lg text-base hover:bg-green-700 transition-colors">
                        Contribute
                    </Link>
                </div>
            </div>
        </div>
      )}
    </header>
  );
}