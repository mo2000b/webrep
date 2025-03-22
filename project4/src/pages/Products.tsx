import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Package, Truck, Clock, Shield, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  quantity: number;
  image_url: string;
  description: string;
  price: number;
  // Future field: details?
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*');
    
    if (error) {
      console.error('Error fetching products:', error);
      return;
    }
    setProducts(data || []);
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Nos Produits
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative">
                <img 
                  src={product.image_url} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-sm text-white ${product.quantity > 0 ? 'bg-green-500' : 'bg-red-500'}`}>
                  {product.quantity > 0 ? 'En Stock' : 'Out of Stock'}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex flex-col items-center space-y-2">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(product.id.toString())}&size=100x100`}
                    alt="QR Code"
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedProduct.name}
                </h2>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={selectedProduct.image_url} 
                      alt={selectedProduct.name}
                      className="w-full rounded-lg shadow-lg"
                    />
                    <div className="mt-6 flex justify-center">
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(selectedProduct.id.toString())}&size=150x150`}
                        alt="QR Code"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Détails du Produit</h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {selectedProduct.description}
                      </p>
                      {/* Add more detailed information here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}