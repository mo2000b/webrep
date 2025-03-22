import React from 'react';
import Slideshow from '../components/Slideshow';
import { ArrowRight, Shield, Clock, Wrench, Trophy, Users, Factory, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Qualité Garantie",
      description: "Tous nos produits sont rigoureusement testés et certifiés pour répondre aux normes industrielles les plus strictes."
    },
    {
      icon: Clock,
      title: "Livraison Rapide",
      description: "Service de livraison express disponible pour minimiser les temps d'arrêt de votre production."
    },
    {
      icon: Wrench,
      title: "Support Technique",
      description: "Une équipe d'experts techniques à votre disposition pour vous accompagner dans vos projets."
    }
  ];

  const industries = [
    {
      icon: Factory,
      name: "Industrie Manufacturière",
      description: "Solutions adaptées pour optimiser vos lignes de production."
    },
    {
      icon: Truck,
      name: "Logistique",
      description: "Systèmes de convoyage pour entrepôts et centres de distribution."
    },
    {
      icon: Users,
      name: "Agroalimentaire",
      description: "Équipements conformes aux normes d'hygiène les plus strictes."
    }
  ];

  return (
    <div className="min-h-screen">
      <Slideshow />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
            Notre Mission
          </h1>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p className="text-center italic text-xl">
              "Chez WePack, nous avons bâti notre entreprise sur une base d'innovation et de dévouement."
            </p>
            
            <p className="text-center">
              Notre mission est simple : fournir des systèmes de convoyage exceptionnels et des pièces 
              de rechange qui améliorent l'efficacité et rationalisent les opérations. Avec un engagement 
              sans faille envers la qualité et la satisfaction du client, nous visons à révolutionner la 
              manière dont les industries progressent.
            </p>
            
            <p className="text-center font-semibold text-xl text-blue-900">
              Rejoignez-nous dans ce parcours d'excellence chez WePack, où fiabilité rime avec innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Pourquoi Nous Choisir ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            Nos Secteurs d'Activité
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nous accompagnons les entreprises de différents secteurs avec des solutions sur mesure adaptées à leurs besoins spécifiques.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors">
                <industry.icon className="h-12 w-12 text-blue-900 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Trophy className="w-96 h-96 transform rotate-12 absolute -right-20 -bottom-20" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à Optimiser Votre Production ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Découvrez notre gamme complète de solutions industrielles
          </p>
          <Link 
            to="/produits" 
            className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors text-lg"
          >
            <span>Voir Nos Produits</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}