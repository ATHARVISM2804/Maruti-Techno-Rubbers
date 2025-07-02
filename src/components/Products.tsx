import React, { useState } from 'react';
import { Download, FileText, Shield, Award } from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('expansion-joints');

  const productCategories = [
    {
      id: 'expansion-joints',
      name: 'Rubber Expansion Joints',
      description: 'High-quality rubber expansion joints for bridges, buildings, and infrastructure',
      image: 'https://images.pexels.com/photos/162539/architecture-building-bridges-landmark-162539.jpeg',
      products: [
        {
          name: 'Modular Expansion Joint',
          specs: 'Movement capacity: ±100mm',
          applications: 'Long span bridges, highways',
          certifications: ['CE', 'ASTM D4014']
        },
        {
          name: 'Strip Seal Expansion Joint',
          specs: 'Movement capacity: ±50mm',
          applications: 'Medium span bridges',
          certifications: ['IS 12843', 'AASHTO M 251']
        },
        {
          name: 'Compression Seal Joint',
          specs: 'Movement capacity: ±25mm',
          applications: 'Small to medium bridges',
          certifications: ['ASTM D2000', 'IS 15778']
        }
      ]
    },
    {
      id: 'pvc-waterstops',
      name: 'PVC Waterstops',
      description: 'Durable PVC waterstops for concrete joints and construction waterproofing',
      image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg',
      products: [
        {
          name: 'Dumbbell PVC Waterstop',
          specs: 'Width: 150mm-300mm',
          applications: 'Construction joints, retaining walls',
          certifications: ['ASTM D4068', 'IS 2508']
        },
        {
          name: 'Centerbulb Waterstop',
          specs: 'Width: 200mm-250mm',
          applications: 'Water treatment plants, tunnels',
          certifications: ['EN 681-1', 'ASTM D4068']
        },
        {
          name: 'Ribbed Waterstop',
          specs: 'Width: 230mm-320mm',
          applications: 'Dams, reservoirs, basements',
          certifications: ['IS 2508', 'ASTM D4068']
        }
      ]
    },
    {
      id: 'geo-membranes',
      name: 'Geo-Membranes',
      description: 'Advanced geo-membrane solutions for environmental and civil engineering',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
      products: [
        {
          name: 'HDPE Geomembrane',
          specs: 'Thickness: 0.5mm-3.0mm',
          applications: 'Landfills, ponds, canals',
          certifications: ['ASTM D6693', 'IS 15351']
        },
        {
          name: 'LDPE Geomembrane',
          specs: 'Thickness: 0.2mm-1.0mm',
          applications: 'Agriculture, aquaculture',
          certifications: ['ASTM D5199', 'IS 15351']
        },
        {
          name: 'Textured Geomembrane',
          specs: 'Thickness: 1.0mm-2.5mm',
          applications: 'Steep slopes, mining',
          certifications: ['ASTM D6693', 'GRI GM13']
        }
      ]
    },
    {
      id: 'bearing-pads',
      name: 'Bearing Pads',
      description: 'High-performance bearing pads for structural support and load distribution',
      image: 'https://images.pexels.com/photos/207252/pexels-photo-207252.jpeg',
      products: [
        {
          name: 'Laminated Rubber Bearing',
          specs: 'Load capacity: 500-5000 kN',
          applications: 'Bridge bearings, seismic isolation',
          certifications: ['IS 15129', 'AASHTO M251']
        },
        {
          name: 'Plain Rubber Pad',
          specs: 'Thickness: 5mm-50mm',
          applications: 'Precast structures, machines',
          certifications: ['IS 3400', 'ASTM D2000']
        },
        {
          name: 'PTFE Sliding Bearing',
          specs: 'Coefficient of friction: 0.03-0.08',
          applications: 'Long span bridges, buildings',
          certifications: ['EN 1337-2', 'AASHTO M251']
        }
      ]
    },
    {
      id: 'drainage-spouts',
      name: 'Bridge Drainage Spouts',
      description: 'Efficient drainage solutions for bridges and elevated structures',
      image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg',
      products: [
        {
          name: 'Cast Iron Drainage Spout',
          specs: 'Diameter: 100mm-300mm',
          applications: 'Highway bridges, flyovers',
          certifications: ['IS 210', 'ASTM A48']
        },
        {
          name: 'PVC Drainage Spout',
          specs: 'Diameter: 75mm-200mm',
          applications: 'Pedestrian bridges, underpasses',
          certifications: ['IS 4985', 'ASTM D1785']
        },
        {
          name: 'Stainless Steel Spout',
          specs: 'Diameter: 100mm-250mm',
          applications: 'Marine structures, coastal bridges',
          certifications: ['ASTM A276', 'IS 4401']
        }
      ]
    }
  ];

  const activeCategory = productCategories.find(cat => cat.id === activeTab);

  return (
    <section id="products" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of high-quality rubber, PVC, and geo-earth products for infrastructure needs
          </p>
        </div>

        {/* Product Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === category.id
                    ? 'bg-[#004d40] text-white'
                    : 'bg-white text-[#004d40] hover:bg-[#e0f2f1]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Content */}
        {activeCategory && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Category Image and Description */}
              <div>
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-[#004d40] mb-4">
                  {activeCategory.name}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {activeCategory.description}
                </p>
                <button className="bg-[#ffc107] text-[#004d40] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffb300] transition-colors duration-200 flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </button>
              </div>

              {/* Products List */}
              <div className="space-y-6">
                {activeCategory.products.map((product, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-xl font-semibold text-[#004d40] mb-3">
                      {product.name}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm font-semibold text-[#00796b]">Specifications:</span>
                        <p className="text-gray-700">{product.specs}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#00796b]">Applications:</span>
                        <p className="text-gray-700">{product.applications}</p>
                      </div>
                    </div>
                    
                    {/* Certifications */}
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-[#00796b]">Certifications:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {product.certifications.map((cert, certIndex) => (
                          <span
                            key={certIndex}
                            className="bg-[#e0f2f1] text-[#004d40] px-3 py-1 rounded-full text-sm flex items-center"
                          >
                            <Shield className="mr-1 h-3 w-3" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="bg-[#004d40] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#00695c] transition-colors duration-200 flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Spec Sheet
                      </button>
                      <button className="border border-[#004d40] text-[#004d40] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#004d40] hover:text-white transition-colors duration-200">
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quality Assurance */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-[#004d40] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[#004d40] mb-2">Quality Certified</h4>
              <p className="text-gray-600">ISO 9001:2015 certified manufacturing processes</p>
            </div>
            <div>
              <div className="bg-[#004d40] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[#004d40] mb-2">Tested & Proven</h4>
              <p className="text-gray-600">Rigorous testing to international standards</p>
            </div>
            <div>
              <div className="bg-[#004d40] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[#004d40] mb-2">Documented</h4>
              <p className="text-gray-600">Complete documentation and certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;