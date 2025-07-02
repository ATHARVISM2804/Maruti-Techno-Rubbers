// ✅ FINAL PRODUCTS PAGE WITH THREE CATEGORIES (Water Proofing, Agriculture GEOsystem, Infrastructure & Construction)

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, FileText } from 'lucide-react';

const Products = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('water-proofing');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if ([
        'water-proofing',
        'agriculture-geosystem',
        'infrastructure-construction'
      ].includes(hash)) {
        setActiveCategory(hash);
      }
    }
  }, [location.hash]);

  const productCategories = [
    {
      id: 'water-proofing',
      name: 'Water Proofing',
      description: 'Products for waterproofing concrete and infrastructure.',
      color: 'from-blue-500 to-blue-700',
      image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg',
      products: [
        {
          name: 'FlexiSeal Membrane',
          code: 'WPF-101',
          specs: 'Elastic waterproof membrane, 1.5mm thick',
          applications: 'Basements, Roof Slabs, Tunnels',
          features: ['Flexible', 'Durable', 'UV Resistant'],
          certifications: ['IS 2508', 'ASTM D4068'],
          image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg'
        },
        {
          name: 'AquaBlock Sheet',
          code: 'WPF-102',
          specs: 'Self-adhesive, 2mm thick',
          applications: 'Retaining Walls, Foundations',
          features: ['Easy to apply', 'Strong adhesion'],
          certifications: ['EN 681-1'],
          image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg'
        }
      ]
    },
    {
      id: 'agriculture-geosystem',
      name: 'Agriculture GEOsystem',
      description: 'Geo-membranes and solutions for agriculture and water retention.',
      color: 'from-green-500 to-green-700',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
      products: [
        {
          name: 'AgriLiner HDPE',
          code: 'AG-201',
          specs: 'HDPE 1mm, UV Resistant',
          applications: 'Ponds, Canals, Farm Tanks',
          features: ['Weatherproof', 'Long life'],
          certifications: ['IS 15351'],
          image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
        },
        {
          name: 'GeoNet Drain',
          code: 'AG-202',
          specs: '3D structure, lightweight',
          applications: 'Irrigation fields, Drainage beds',
          features: ['Flexible install', 'High flow capacity'],
          certifications: ['GRI GM13'],
          image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
        }
      ]
    },
    {
      id: 'infrastructure-construction',
      name: 'Infrastructure & Construction',
      description: 'Products for bridge, road, and civil structure durability.',
      color: 'from-amber-500 to-orange-600',
      image: 'https://images.pexels.com/photos/162539/pexels-photo-162539.jpeg',
      products: [
        {
          name: 'Bridge Seal Expansion Joint',
          code: 'IC-301',
          specs: '±50mm movement, Load 40 tons/m²',
          applications: 'Bridges, Flyovers',
          features: ['High durability', 'Easy installation'],
          certifications: ['AASHTO M251'],
          image: 'https://images.pexels.com/photos/162539/pexels-photo-162539.jpeg'
        },
        {
          name: 'Heavy Duty Bearing Pad',
          code: 'IC-302',
          specs: 'Load: 5000 kN',
          applications: 'Bridge supports, Industrial slabs',
          features: ['Seismic isolation', 'Multi-directional flexibility'],
          certifications: ['IS 15129'],
          image: 'https://images.pexels.com/photos/162539/pexels-photo-162539.jpeg'
        }
      ]
    }
  ];

  const activeProducts = productCategories.find(cat => cat.id === activeCategory);
  const filteredProducts = activeProducts?.products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.applications.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={activeProducts?.image || ''}
            alt="Products Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explore <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">{activeProducts?.name}</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {activeProducts?.description}
          </p>
        </div>
      </section>

      <section className="bg-white py-6 sticky top-20 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex gap-4 px-4">
          {productCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-slate-300 rounded-lg"
          />

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="relative h-52 bg-gradient-to-tr from-blue-300 to-blue-500">
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  <div className="absolute top-4 right-4 bg-white text-sm font-semibold text-slate-700 px-3 py-1 rounded-full">
                    {product.code}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>

                  <p className="text-sm text-slate-600 font-semibold mb-1">Specifications:</p>
                  <p className="text-sm text-slate-700 mb-3">{product.specs}</p>

                  <p className="text-sm text-slate-600 font-semibold mb-1">Applications:</p>
                  <p className="text-sm text-slate-700 mb-3">{product.applications}</p>

                  <p className="text-sm text-slate-600 font-semibold mb-1">Key Features:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((f, i) => (
                      <span key={i} className="bg-slate-100 px-2 py-1 rounded-full text-xs text-slate-700">{f}</span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-600 font-semibold mb-1">Certifications:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.certifications.map((c, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center">
                        <Shield className="h-3 w-3 mr-1" /> {c}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-1">
                      <FileText className="h-4 w-4" /> Spec Sheet
                    </button>
                    <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-xl font-medium">Quote</button>
                  </div>
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <p className="col-span-full text-center text-slate-500">No products found</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
