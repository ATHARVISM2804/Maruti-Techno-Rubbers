import React, { useState, useEffect } from 'react';
import { Download, FileText, Shield, Award, ChevronRight, Search, Filter } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('expansion-joints');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const productCategories = [
    {
      id: 'expansion-joints',
      name: 'Rubber Expansion Joints',
      description: 'High-performance expansion joints for bridges, buildings, and infrastructure projects',
      image: 'https://images.pexels.com/photos/162539/architecture-building-bridges-landmark-162539.jpeg',
      color: 'from-blue-500 to-blue-700',
      products: [
        {
          name: 'Modular Expansion Joint',
          code: 'MEJ-2000',
          specs: 'Movement capacity: ±100mm, Temperature range: -40°C to +60°C',
          applications: 'Long span bridges, highways, airport runways',
          certifications: ['CE', 'ASTM D4014', 'AASHTO M251'],
          features: ['Multi-directional movement', 'High durability', 'Weather resistant'],
          image: 'https://images.pexels.com/photos/162539/architecture-building-bridges-landmark-162539.jpeg'
        },
        {
          name: 'Strip Seal Expansion Joint',
          code: 'SSEJ-1500',
          specs: 'Movement capacity: ±50mm, Load capacity: 40 tons/m²',
          applications: 'Medium span bridges, overpasses',
          certifications: ['IS 12843', 'AASHTO M251', 'EN 1337-3'],
          features: ['Easy installation', 'Low maintenance', 'Cost effective'],
          image: 'https://images.pexels.com/photos/162539/architecture-building-bridges-landmark-162539.jpeg'
        },
        {
          name: 'Compression Seal Joint',
          code: 'CSJ-1000',
          specs: 'Movement capacity: ±25mm, Compression: 25-50%',
          applications: 'Small to medium bridges, parking structures',
          certifications: ['ASTM D2000', 'IS 15778', 'BS 2751'],
          features: ['Self-sealing', 'Flexible design', 'Chemical resistant'],
          image: 'https://images.pexels.com/photos/162539/architecture-building-bridges-landmark-162539.jpeg'
        }
      ]
    },
    {
      id: 'pvc-waterstops',
      name: 'PVC Waterstops',
      description: 'Premium PVC waterstops for concrete joints and construction waterproofing',
      image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg',
      color: 'from-emerald-500 to-emerald-700',
      products: [
        {
          name: 'Dumbbell PVC Waterstop',
          code: 'DWS-300',
          specs: 'Width: 150mm-300mm, Thickness: 5mm-8mm',
          applications: 'Construction joints, retaining walls, basements',
          certifications: ['ASTM D4068', 'IS 2508', 'EN 681-1'],
          features: ['High tensile strength', 'Chemical resistance', 'UV stable'],
          image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg'
        },
        {
          name: 'Centerbulb Waterstop',
          code: 'CWS-250',
          specs: 'Width: 200mm-250mm, Bulb diameter: 20mm-25mm',
          applications: 'Water treatment plants, tunnels, dams',
          certifications: ['EN 681-1', 'ASTM D4068', 'IS 2508'],
          features: ['Superior sealing', 'Flexible installation', 'Long service life'],
          image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg'
        },
        {
          name: 'Ribbed Waterstop',
          code: 'RWS-320',
          specs: 'Width: 230mm-320mm, Rib height: 15mm-20mm',
          applications: 'Dams, reservoirs, swimming pools',
          certifications: ['IS 2508', 'ASTM D4068', 'BS 2751'],
          features: ['Enhanced grip', 'Crack bridging', 'Hydrostatic pressure resistance'],
          image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg'
        }
      ]
    },
    {
      id: 'geo-membranes',
      name: 'Geo-Membranes',
      description: 'Advanced geo-membrane solutions for environmental and civil engineering applications',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
      color: 'from-amber-500 to-orange-600',
      products: [
        {
          name: 'HDPE Geomembrane',
          code: 'HDPE-2000',
          specs: 'Thickness: 0.5mm-3.0mm, Density: 0.94 g/cm³',
          applications: 'Landfills, ponds, canals, mining',
          certifications: ['ASTM D6693', 'IS 15351', 'GRI GM13'],
          features: ['Chemical resistance', 'UV protection', 'Stress crack resistance'],
          image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
        },
        {
          name: 'LDPE Geomembrane',
          code: 'LDPE-1000',
          specs: 'Thickness: 0.2mm-1.0mm, Flexibility: High',
          applications: 'Agriculture, aquaculture, decorative ponds',
          certifications: ['ASTM D5199', 'IS 15351', 'EN 13361'],
          features: ['High flexibility', 'Easy installation', 'Cost effective'],
          image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
        },
        {
          name: 'Textured Geomembrane',
          code: 'TGM-2500',
          specs: 'Thickness: 1.0mm-2.5mm, Texture: Single/Double sided',
          applications: 'Steep slopes, mining applications, waste containment',
          certifications: ['ASTM D6693', 'GRI GM13', 'IS 15351'],
          features: ['Enhanced friction', 'Slope stability', 'Superior performance'],
          image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
        }
      ]
    },
    {
      id: 'bearing-pads',
      name: 'Bearing Pads',
      description: 'High-performance bearing pads for structural support and load distribution',
      image: 'https://images.pexels.com/photos/207252/pexels-photo-207252.jpeg',
      color: 'from-purple-500 to-purple-700',
      products: [
        {
          name: 'Laminated Rubber Bearing',
          code: 'LRB-5000',
          specs: 'Load capacity: 500-5000 kN, Shear modulus: 0.8-1.2 MPa',
          applications: 'Bridge bearings, seismic isolation, buildings',
          certifications: ['IS 15129', 'AASHTO M251', 'EN 1337-3'],
          features: ['Seismic isolation', 'Multi-directional flexibility', 'High load capacity'],
          image: 'https://images.pexels.com/photos/207252/pexels-photo-207252.jpeg'
        },
        {
          name: 'Plain Rubber Pad',
          code: 'PRP-50',
          specs: 'Thickness: 5mm-50mm, Hardness: 50-70 Shore A',
          applications: 'Precast structures, machinery mounting, vibration isolation',
          certifications: ['IS 3400', 'ASTM D2000', 'BS 903'],
          features: ['Vibration damping', 'Easy installation', 'Cost effective'],
          image: 'https://images.pexels.com/photos/207252/pexels-photo-207252.jpeg'
        },
        {
          name: 'PTFE Sliding Bearing',
          code: 'PSB-08',
          specs: 'Coefficient of friction: 0.03-0.08, Load: 50-100 MPa',
          applications: 'Long span bridges, high-rise buildings, stadiums',
          certifications: ['EN 1337-2', 'AASHTO M251', 'IS 15129'],
          features: ['Low friction', 'High load capacity', 'Maintenance free'],
          image: 'https://images.pexels.com/photos/207252/pexels-photo-207252.jpeg'
        }
      ]
    },
    {
      id: 'drainage-spouts',
      name: 'Bridge Drainage Spouts',
      description: 'Efficient drainage solutions for bridges and elevated structures',
      image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg',
      color: 'from-slate-500 to-slate-700',
      products: [
        {
          name: 'Cast Iron Drainage Spout',
          code: 'CIDS-300',
          specs: 'Diameter: 100mm-300mm, Material: Grade 250 Cast Iron',
          applications: 'Highway bridges, flyovers, viaducts',
          certifications: ['IS 210', 'ASTM A48', 'BS 1452'],
          features: ['Corrosion resistant', 'High strength', 'Long service life'],
          image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg'
        },
        {
          name: 'PVC Drainage Spout',
          code: 'PVCS-200',
          specs: 'Diameter: 75mm-200mm, Pressure rating: PN 10',
          applications: 'Pedestrian bridges, underpasses, light structures',
          certifications: ['IS 4985', 'ASTM D1785', 'EN 1452'],
          features: ['Lightweight', 'Chemical resistant', 'Easy installation'],
          image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg'
        },
        {
          name: 'Stainless Steel Spout',
          code: 'SSS-250',
          specs: 'Diameter: 100mm-250mm, Grade: 316L Stainless Steel',
          applications: 'Marine structures, coastal bridges, chemical plants',
          certifications: ['ASTM A276', 'IS 4401', 'EN 10088'],
          features: ['Marine grade', 'Corrosion proof', 'Aesthetic appeal'],
          image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg'
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
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg"
            alt="Products Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-8">
              Premium{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Infrastructure Products
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive range of high-quality rubber, PVC, and geo-earth products 
              engineered for the world's most demanding infrastructure projects
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Navigation */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-600">
                {filteredProducts.length} products found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Active Category Content */}
      {activeProducts && (
        <section id="products" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className={`mb-16 ${isVisible.products ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">
                    {activeProducts.name}
                  </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                    {activeProducts.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className={`bg-gradient-to-r ${activeProducts.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center`}>
                      <Download className="mr-2 h-5 w-5" />
                      Download Catalog
                    </button>
                    <button className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-slate-400 transition-all duration-300">
                      Request Quote
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={activeProducts.image}
                    alt={activeProducts.name}
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeProducts.color} opacity-20 rounded-3xl`}></div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className={`group hover-lift bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden ${
                    isVisible.products ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                  }`}
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${activeProducts.color} opacity-60`}></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.code}
                      </span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {product.name}
                    </h3>
                    
                    {/* Specifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-600 mb-2">Specifications:</h4>
                      <p className="text-slate-700 text-sm">{product.specs}</p>
                    </div>

                    {/* Applications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-600 mb-2">Applications:</h4>
                      <p className="text-slate-700 text-sm">{product.applications}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-600 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-600 mb-2">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.certifications.map((cert, certIndex) => (
                          <span
                            key={certIndex}
                            className={`bg-gradient-to-r ${activeProducts.color} text-white px-3 py-1 rounded-full text-xs flex items-center`}
                          >
                            <Shield className="mr-1 h-3 w-3" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className={`flex-1 bg-gradient-to-r ${activeProducts.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center`}>
                        <FileText className="mr-2 h-4 w-4" />
                        Spec Sheet
                      </button>
                      <button className="px-4 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-slate-400 transition-all duration-300">
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-600">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Quality Assurance */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Quality Assurance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every product undergoes rigorous testing to ensure it meets the highest international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ISO Certified</h3>
              <p className="text-slate-600">ISO 9001:2015 certified manufacturing processes ensuring consistent quality</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tested & Proven</h3>
              <p className="text-slate-600">Comprehensive testing to international standards including ASTM, EN, and IS</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Documented</h3>
              <p className="text-slate-600">Complete documentation and certifications for every product and batch</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;