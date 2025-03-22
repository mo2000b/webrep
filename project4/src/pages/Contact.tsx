import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Contactez-nous
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Nos Coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-red-600" />
                  <span className="text-lg">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-red-600" />
                  <span className="text-lg">contact@wepack.fr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="text-lg">123 Rue de l'Innovation, Paris</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Horaires d'Ouverture</h2>
              <div className="space-y-2">
                <p>Lundi - Vendredi: 9h00 - 18h00</p>
                <p>Samedi: 9h00 - 12h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.292292615674431!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1645543245665!5m2!1sfr!2sfr"
              className="w-full h-[400px] rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}