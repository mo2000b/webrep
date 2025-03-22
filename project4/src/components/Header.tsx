import React from 'react';
import { Link } from 'react-router-dom';

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
          <nav className="flex space-x-12">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors text-lg">
              Accueil
            </Link>
            <Link to="/produits" className="text-gray-700 hover:text-red-600 transition-colors text-lg">
              Produits
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors text-lg">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}