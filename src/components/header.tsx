'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { MobileMenu } from './MobileMenu';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#works', label: 'My Work' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

interface HeaderProps {
  className?: string;
  businessName?: string;
  tagline?: string;
}

export default function Header({
  className = '',
  businessName = 'Makeup by Nadia',
  tagline = 'Professional Makeup Artist'
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <header className={`relative w-full ${className}`}>
      <nav
        className="flex flex-wrap items-center justify-between sm:py-4  sm:px-0 transition-all duration-300"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-brand-pink-400 text-3xl"
              onClick={toggleSidebar}
              aria-label="Toggle Mobile Menu"
              aria-expanded={isOpen}
            >
              <FaBars />
            </button>
            
            <div className="flex items-center gap-4">
              <img 
                src="/logo.jpeg" 
                alt="Makeup by Nadia Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-2xl font-bold text-brand-neutral-900 font-nadi">
                  {businessName}
                </h1>
                <p className="uppercase text-xs sm:text-sm text-brand-pink-600 font-normal tracking-wider">
                  {tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-brand-neutral-700 hover:text-brand-pink-600 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={closeSidebar} />
    </header>
  );
}
