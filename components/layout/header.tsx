"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../ui/theme-toggle';
import { FaHome, FaNewspaper, FaCode, FaBookOpen, FaUser } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/', icon: <FaHome className="mr-1" /> },
  { name: 'Blog', path: '/blog', icon: <FaNewspaper className="mr-1" /> },
  { name: 'Projects', path: '/projects', icon: <FaCode className="mr-1" /> },
  { name: 'Research', path: '/research', icon: <FaBookOpen className="mr-1" /> },
  { name: 'About', path: '/about', icon: <FaUser className="mr-1" /> },
];

export function Header() {
  const pathname = usePathname();

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
            className="md:hidden text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
