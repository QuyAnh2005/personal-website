"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '../ui/theme-toggle';
import { FaHome, FaNewspaper, FaCode, FaBookOpen, FaUser, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/', icon: <FaHome className="mr-1" /> },
  { name: 'Blog', path: '/blog', icon: <FaNewspaper className="mr-1" /> },
  { name: 'Projects', path: '/projects', icon: <FaCode className="mr-1" /> },
  { name: 'Research', path: '/research', icon: <FaBookOpen className="mr-1" /> },
  { name: 'About', path: '/about', icon: <FaUser className="mr-1" /> },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 dark:shadow-gray-950 shadow-sm text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-300 flex items-center">
          <span>Quy-Anh Dang</span>
          <span className="text-gray-600 dark:text-gray-100 text-sm ml-2">ML Researcher</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              href={item.path}
              className={`flex items-center text-sm font-medium ${pathname === item.path ? 'text-blue-600 dark:text-blue-300' : 'text-gray-700 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-300'}`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="md:hidden text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300 p-2"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-300 flex items-center" onClick={() => setIsMenuOpen(false)}>
              <span>Quy-Anh Dang</span>
              <span className="text-gray-600 dark:text-gray-100 text-sm ml-2">ML Researcher</span>
            </Link>
            <button 
              className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300 p-2"
              aria-label="Close Menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-6 px-4 py-2">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                className={`flex items-center text-lg font-medium py-4 border-b border-gray-100 dark:border-gray-800 ${
                  pathname === item.path ? 'text-blue-600 dark:text-blue-300' : 'text-gray-700 dark:text-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
