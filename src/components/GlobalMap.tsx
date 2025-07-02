import React, { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const GlobalMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      id: 'india',
      name: 'India',
      position: { top: '45%', left: '70%' },
      projects: 250,
      description: 'Headquarters and primary manufacturing facility in Nagpur',
      color: '#ffc107'
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      position: { top: '35%', left: '55%' },
      projects: 85,
      description: 'Major infrastructure projects in UAE, Saudi Arabia, Qatar',
      color: '#00796b'
    },
    {
      id: 'southeast-asia',
      name: 'Southeast Asia',
      position: { top: '55%', left: '80%' },
      projects: 120,
      description: 'Growing presence in Malaysia, Thailand, Vietnam',
      color: '#00796b'
    },
    {
      id: 'africa',
      name: 'Africa',
      position: { top: '50%', left: '50%' },
      projects: 45,
      description: 'Infrastructure development in Kenya, Nigeria, Ghana',
      color: '#00796b'
    },
    {
      id: 'europe',
      name: 'Europe',
      position: { top: '25%', left: '48%' },
      projects: 32,
      description: 'Specialized products for European construction standards',
      color: '#00796b'
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving infrastructure projects across 50+ countries with proven quality and reliability
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="relative mx-auto max-w-4xl">
            {/* World Map Background */}
            <div className="relative bg-[#e0f2f1] rounded-lg p-8" style={{ height: '500px' }}>
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
              >
                {/* Simplified world map paths */}
                <path
                  d="M150,200 L200,180 L250,200 L300,220 L350,200 L400,180 L450,200 L500,180 L550,200 L600,220 L650,200 L700,180 L750,200 L800,220 L850,200 L900,180"
                  stroke="#004d40"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M200,250 Q300,230 400,250 Q500,270 600,250 Q700,230 800,250"
                  stroke="#004d40"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M150,300 L200,280 L250,300 L300,320 L350,300 L400,280 L450,300 L500,280 L550,300 L600,320 L650,300 L700,280 L750,300 L800,320"
                  stroke="#004d40"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Regional Markers */}
              {regions.map((region) => (
                <div
                  key={region.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ top: region.position.top, left: region.position.left }}
                  onMouseEnter={() => setSelectedRegion(region)}
                  onMouseLeave={() => setSelectedRegion(null)}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-3 border-white shadow-lg animate-pulse`}
                    style={{ backgroundColor: region.color }}
                  ></div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-white px-3 py-1 rounded-lg shadow-md border text-sm font-semibold text-[#004d40]">
                      {region.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Region Info Panel */}
            {selectedRegion && (
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-xl p-6 border-l-4 border-[#ffc107]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[#004d40] mb-2">
                      {selectedRegion.name}
                    </h4>
                    <p className="text-gray-700 mb-3">{selectedRegion.description}</p>
                    <div className="flex items-center text-[#00796b]">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{selectedRegion.projects} Projects Completed</span>
                    </div>
                  </div>
                  <button className="bg-[#ffc107] text-[#004d40] px-4 py-2 rounded-lg font-semibold hover:bg-[#ffb300] transition-colors duration-200 flex items-center">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004d40]">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004d40]">532</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004d40]">1M+</div>
              <div className="text-gray-600">Products Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004d40]">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;