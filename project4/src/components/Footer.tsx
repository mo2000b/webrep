import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WePack</h3>
            <p className="text-gray-300">
              Solutions innovantes pour l'industrie
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/produits" className="text-gray-300 hover:text-white transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contact@wepack.fr</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Rue de l'Innovation, Paris</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} WePack. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}