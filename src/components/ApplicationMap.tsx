import React, { useState } from 'react';
import { Building, Grid as Bridge, Loader as Road, TrainFrontTunnel as Tunnel, ArrowRight } from 'lucide-react';

const ApplicationMap = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);

  const applications = [
    {
      id: 'buildings',
      name: 'Buildings & Structures',
      icon: Building,
      position: { top: '30%', left: '25%' },
      products: ['Expansion Joints', 'Bearing Pads', 'PVC Waterstops'],
      description: 'Essential sealing and expansion solutions for commercial and residential buildings',
      color: '#ffc107'
    },
    {
      id: 'bridges',
      name: 'Bridges & Flyovers',
      icon: Bridge,
      position: { top: '45%', left: '60%' },
      products: ['Bridge Bearing Pads', 'Expansion Joints', 'Drainage Spouts'],
      description: 'Critical components ensuring bridge safety and longevity',
      color: '#00796b'
    },
    {
      id: 'roads',
      name: 'Roads & Highways',
      icon: Road,
      position: { top: '70%', left: '40%' },
      products: ['Geo-Membranes', 'Expansion Joints', 'Drainage Systems'],
      description: 'Infrastructure solutions for durable road construction',
      color: '#004d40'
    },
    {
      id: 'tunnels',
      name: 'Tunnels & Underground',
      icon: Tunnel,
      position: { top: '55%', left: '75%' },
      products: ['PVC Waterstops', 'Geo-Membranes', 'Sealing Solutions'],
      description: 'Waterproofing and structural integrity for underground projects',
      color: '#00695c'
    }
  ];

  return (
    <section id="applications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">
            Application Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive product solutions for diverse infrastructure applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 3D Application Map */}
          <div className="relative">
            <div className="bg-[#f5f5f5] rounded-xl p-8 h-96 relative overflow-hidden">
              {/* Infrastructure Illustration */}
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/236973/pexels-photo-236973.jpeg"
                  alt="Infrastructure"
                  className="w-full h-full object-cover rounded-lg opacity-30"
                />
              </div>

              {/* Application Hotspots */}
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  style={{ top: app.position.top, left: app.position.left }}
                  onMouseEnter={() => setSelectedApplication(app)}
                  onMouseLeave={() => setSelectedApplication(null)}
                  onClick={() => setSelectedApplication(selectedApplication?.id === app.id ? null : app)}
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 ${
                      selectedApplication?.id === app.id ? 'ring-4 ring-white' : ''
                    }`}
                    style={{ backgroundColor: app.color }}
                  >
                    <app.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-white px-2 py-1 rounded text-xs font-semibold text-[#004d40] shadow-md whitespace-nowrap">
                      {app.name}
                    </div>
                  </div>
                </div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                   refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#004d40" />
                  </marker>
                </defs>
                <path d="M 25% 30% Q 50% 20% 60% 45%" stroke="#004d40" strokeWidth="2" 
                      fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                <path d="M 60% 45% Q 70% 60% 40% 70%" stroke="#004d40" strokeWidth="2" 
                      fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                <path d="M 40% 70% Q 50% 80% 75% 55%" stroke="#004d40" strokeWidth="2" 
                      fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              </svg>
            </div>
          </div>

          {/* Application Details */}
          <div className="space-y-6">
            {applications.map((app) => (
              <div
                key={app.id}
                className={`p-6 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                  selectedApplication?.id === app.id
                    ? 'border-[#ffc107] bg-[#ffc107] bg-opacity-10'
                    : 'border-gray-200 hover:border-[#00796b]'
                }`}
                onClick={() => setSelectedApplication(selectedApplication?.id === app.id ? null : app)}
              >
                <div className="flex items-start">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: app.color }}
                  >
                    <app.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#004d40] mb-2">
                      {app.name}
                    </h3>
                    <p className="text-gray-700 mb-3">{app.description}</p>
                    
                    {/* Products List */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#00796b] mb-2">Key Products:</h4>
                      <div className="flex flex-wrap gap-2">
                        {app.products.map((product, index) => (
                          <span
                            key={index}
                            className="bg-[#e0f2f1] text-[#004d40] px-3 py-1 rounded-full text-sm"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="flex items-center text-[#00796b] hover:text-[#004d40] font-semibold transition-colors duration-200">
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationMap;