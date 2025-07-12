// app/components/Header.tsx
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
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900">
            <i className="fas fa-mountain-sun text-green-600"></i>
            <span>Rodriguez Guide</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                  {
                    "bg-green-600 text-white": pathname === link.href,
                    "text-gray-600 hover:bg-gray-100 hover:text-gray-900": pathname !== link.href
                  }
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <i className={clsx("h-6 w-6 fas", isMenuOpen ? "fa-times" : "fa-bars")}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={clsx("md:hidden px-2 pt-2 pb-4 space-y-1 sm:px-3", { "hidden": !isMenuOpen })}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "block px-3 py-2 rounded-md text-base font-medium",
               {
                "bg-green-600 text-white": pathname === link.href,
                "text-gray-600 hover:bg-gray-100 hover:text-gray-900": pathname !== link.href
               }
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}