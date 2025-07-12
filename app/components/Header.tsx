// app/components/Header.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

// Navigation links data
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  { href: "/trails", label: "Hiking Trails" },
  { href: "/events", label: "Events" },
  { href: "/articles", label: "Articles" },
];

export default function Header() {
  // State to manage the mobile menu's open/closed status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // **THE FIX IS HERE**
  // This effect now ONLY depends on `pathname`.
  // It will close the menu when the user navigates to a new page.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo and Site Title */}
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-green-700 transition-colors">
            <i className="fas fa-mountain-sun text-green-600"></i>
            <span>Rodriguez Guide</span>
          </Link>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  {
                    "bg-green-600 text-white shadow-sm": pathname === link.href,
                    "text-gray-600 hover:bg-gray-100 hover:text-gray-900": pathname !== link.href
                  }
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger Icon - visible only on mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles the menu state
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* This is the hamburger/close icon logic */}
              <i className={clsx("h-6 w-6 fas", isMenuOpen ? "fa-times" : "fa-bars")}></i>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Panel (conditionally rendered) */}
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
            </div>
        </div>
      )}
    </header>
  );
}