'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = {
  '/': {
    name: 'home',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    )
  },
  '/projects': {
    name: 'projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    )
  },
  '/about': {
    name: 'about',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    )
  },
  '/contact': {
    name: 'contact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    )
  },
};

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<header
  className={`sticky top-0 z-50 transition-all duration-300 
    ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md rounded-xl' : 'bg-transparent rounded-none'}`}>
  <div className="max-w-6xl mx-auto px-1 sm:px-1 lg:px-1">
    <div className="flex justify-between items-center h-16">
      {/* Enhanced Logo */}
<Link href="/" className="flex items-center space-x-1 group">
  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/20 group-hover:scale-105 transition-all duration-300">
    <span className="text-white font-bold text-lg">R</span>
  </div>
  <div className="flex flex-col">
    {/* Ravan Asgarov: sadece küçük ekranlarda */}
    <span className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
      Ravan Asgarov
    </span>
    {/* Full-Stack Developer: her zaman görünür ama küçük ekranlarda altında, büyük ekranda yanında */}
    <span className="text-xs text-gray-500 dark:text-gray-400 ">
      Full-Stack Developer
    </span>
  </div>
</Link>


      {/* Desktop Navigation with improved styling */}
      <nav className="hidden md:flex items-center space-x-1 bg-white/50 dark:bg-gray-800/50 rounded-xl p-1.5 backdrop-blur-sm">
        {Object.entries(navItems).map(([path, { name, icon }]) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive 
                  ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30' 
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-700/50'
              }`}
            >
              <span className={`mr-2 transition-transform ${isActive ? 'scale-110' : ''}`}>{icon}</span>
              {name}
            </Link>
          );
        })}
      </nav>

      {/* Enhanced Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2.5 rounded-xl bg-white/50 dark:bg-gray-800/50 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </div>

    {/* Enhanced Mobile Navigation Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden mt-3 py-3 bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl backdrop-blur-lg border border-gray-100/20 dark:border-gray-700/20">
        {Object.entries(navItems).map(([path, { name, icon }]) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-5 py-3.5 mx-2 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive 
                  ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md' 
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-gray-700/60'
              }`}
            >
              <span className={`mr-3 ${isActive ? 'scale-110' : ''}`}>{icon}</span>
              {name}
            </Link>
          );
        })}
      </div>
    )}
  </div>
</header>
  );
}