"use client";

import React from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        bg-white bg-opacity-95 lg:hidden`}
      aria-hidden={!isOpen}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-pink-600">Menu</h2>
          <button 
            onClick={onClose}
            aria-label="Close menu"
            className="text-3xl text-pink-400 hover:text-pink-600 transition-colors"
          >
            <FaTimes />
          </button>
        </div>
        
        <nav className="flex-grow p-4">
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 text-xl text-black hover:text-pink-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Makeup by Nadia
          </p>
        </div>
      </div>
    </div>
  );
};
