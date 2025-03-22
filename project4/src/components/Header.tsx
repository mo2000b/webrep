import React from 'react';
import { Link } from 'react-router-dom';
// Removed the previous WhatsAppIcon import

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/wepacklogo.png"
              alt="WePack Logo"
              className="h-32 w-auto"
            />
          </Link>
          <nav className="flex space-x-12 items-center">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors text-lg">
              Accueil
            </Link>
            <Link to="/produits" className="text-gray-700 hover:text-red-600 transition-colors text-lg">
              Produits
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors text-lg">
              Contact
            </Link>
            {/* Updated WhatsApp contact link using wtsp.jpg image */}
            <a 
              href="https://wa.me/212668088058" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-green-600 text-lg"
            >
              <img 
                src="/wtsp.jpg" 
                alt="WhatsApp" 
                className="h-6 w-6" 
              />
              <span className="ml-1 hidden sm:inline">WhatsApp</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}