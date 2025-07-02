import React, { useState, useEffect } from 'react';
import { Building, Grid as Bridge, Loader as Road, TrainFrontTunnel as Tunnel, ArrowRight, MapPin, Calendar, Award } from 'lucide-react';

const Applications = () => {
  const [selectedApplication, setSelectedApplication] = useState('infrastructure');
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

    // This query selector is what finds the elements to observe for animations
    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const applications = [
    {
      id: 'infrastructure',
      name: 'Infrastructure & Bridges',
      icon: Bridge,
      color: 'from-blue-500 to-blue-700',
      image: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg',
      description: 'Maruti products are used in Infrastructure projects involving landscaping, soil retention, access roads result in significant savings, improved performance on both short term and long-term basis. Maruti products have made it possible to construct soil retention, landscaping, access roads in seemingly difficult locations.',
      products: ['Bridge Bearing Pads', 'Expansion Joints', 'Drainage Spouts', 'Seismic Isolators'],
      features: [
        'High load capacity up to 5000 kN',
        'Multi-directional movement accommodation',
        'Seismic isolation capabilities',
        'Weather and chemical resistance'
      ],
      projects: [
        { name: 'Mumbai Trans Harbour Link', location: 'Mumbai, India', year: '2023' },
        { name: 'Golden Gate Bridge Retrofit', location: 'San Francisco, USA', year: '2022' },
        { name: 'Thames Estuary Bridge', location: 'London, UK', year: '2024' }
      ]
    },
    {
      id: 'buildings',
      name: 'Buildings & Structures',
      icon: Building,
      color: 'from-emerald-500 to-emerald-700',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      description: 'Essential sealing and expansion solutions for commercial and residential buildings',
      products: ['Expansion Joints', 'Bearing Pads', 'PVC Waterstops', 'Sealing Systems'],
      features: [
        'Thermal movement accommodation',
        'Waterproofing excellence',
        'Fire resistance ratings',
        'Architectural compatibility'
      ],
      projects: [
        { name: 'Burj Khalifa Maintenance', location: 'Dubai, UAE', year: '2023' },
        { name: 'One World Trade Center', location: 'New York, USA', year: '2022' },
        { name: 'Shanghai Tower', location: 'Shanghai, China', year: '2024' }
      ]
    },
    {
      id: 'transportation',
      name: 'Roadways & Highways',
      icon: Road,
      color: 'from-amber-500 to-orange-600',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
      description: 'From major highways to haul roads, our geogrid technology is a proven solution to ground stabilization Problems, increasing pavement life, repair, and rehabilitation with highway improvements, helping you to control construction costs and build-in a better performance life to your roads.',
      products: ['Geo-Membranes', 'Expansion Joints', 'Drainage Systems', 'Track Pads'],
      features: [
        'Heavy traffic load resistance',
        'Vibration dampening',
        'Moisture barrier protection',
        'Long-term durability'
      ],
      projects: [
        { name: 'Delhi Metro Phase 4', location: 'New Delhi, India', year: '2023' },
        { name: 'California High-Speed Rail', location: 'California, USA', year: '2022' },
        { name: 'HS2 Railway Project', location: 'London, UK', year: '2024' }
      ]
    },
    {
      id: 'underground',
      name: 'Tunnels & Underground',
      icon: Tunnel,
      color: 'from-purple-500 to-purple-700',
      image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg',
      description: 'Waterproofing and structural integrity for underground and tunnel projects',
      products: ['PVC Waterstops', 'Geo-Membranes', 'Sealing Solutions', 'Injection Systems'],
      features: [
        'Hydrostatic pressure resistance',
        'Chemical and root resistance',
        'Flexible installation methods',
        'Long-term reliability'
      ],
      projects: [
        { name: 'Gotthard Base Tunnel', location: 'Switzerland', year: '2023' },
        { name: 'Crossrail Elizabeth Line', location: 'London, UK', year: '2022' },
        { name: 'Sydney Metro Tunnels', location: 'Sydney, Australia', year: '2024' }
      ]
    },
    {
      id: 'water',
      name: 'Water Resource & Irrigations',
      icon: Bridge,
      color: 'from-blue-500 to-sky-700',
      image: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg',
      description: 'Our products are used in water resource and flood control projects involving dams, rivers, streams, coastal protection results in significant savings, improved performance on both short term and long-term basis. Our products have made it possible to construct dams, flood protection works in seemingly difficult locations.',
      products: ['Dam Liners', 'Flood Barriers', 'Irrigation Pipes', 'Channel Liners'],
      features: [
        'Puncture and tear resistance',
        'UV and chemical stability',
        'Flexible and easy to install',
        'Long-lasting durability'
      ],
      projects: [
        { name: 'Three Gorges Dam', location: 'Hubei, China', year: '2023' },
        { name: 'Hoover Dam Rehabilitation', location: 'Nevada, USA', year: '2022' },
        { name: 'Aswan High Dam', location: 'Aswan, Egypt', year: '2024' }
      ]
    },
    {
      id: 'ports',
      name: 'Ports & Marine',
      icon: Tunnel,
      color: 'from-indigo-500 to-blue-700',
      image: 'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg',
      description: 'Maruti products are used in ports and marine structures projects involving land reclamation, sea walls, jetties, container yard results in significant savings, improved performance on both short term and long-term basis. Maruti products have made it possible to construct jetties, breakwaters, land reclamation, sea walls in seemingly difficult locations.',
      products: ['Marine Fenders', 'Dredging Equipment', 'Buoys and Beacons', 'Piling and Foundation'],
      features: [
        'Corrosion and biofouling resistance',
        'High energy absorption capacity',
        'Modular and customizable designs',
        'Easy maintenance and repair'
      ],
      projects: [
        { name: 'Port of Rotterdam Expansion', location: 'Rotterdam, Netherlands', year: '2023' },
        { name: 'Hong Kong-Zhuhai-Macao Bridge', location: 'China', year: '2022' },
        { name: 'Sydney Harbour Tunnel', location: 'Sydney, Australia', year: '2024' }
      ]
    },
    {
      id: 'mining',
      name: 'Mining',
      icon: Award,
      color: 'from-red-500 to-rose-700',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
      description: 'Haul roads and trucks are the lifelines of mining. When a haul truck stops moving, a mine stops making money. TerrainCell geocells the payload rolling with soil stabilization and reinforced haul road bases. Systems and products must be safe, practical and in compliance with stringent requirements.',
      products: ['Geocells', 'Geogrids', 'Erosion Control Blankets', 'Drainage Solutions'],
      features: [
        'Enhanced load distribution',
        'Prevention of soil erosion',
        'Improved drainage and filtration',
        'Durable and weather-resistant'
      ],
      projects: [
        { name: 'Super Pit Gold Mine', location: 'Kalgoorlie, Australia', year: '2023' },
        { name: 'Grasberg Mine', location: 'Papua, Indonesia', year: '2022' },
        { name: 'Carajás Mine', location: 'Pará, Brazil', year: '2024' }
      ]
    },
    {
      id: 'waste',
      name: 'Landfill & Waste Management',
      icon: MapPin,
      color: 'from-green-500 to-lime-700',
      image: 'https://images.pexels.com/photos/1372676/pexels-photo-1372676.jpeg',
      description: 'Maruti products are used in Waste management and landfills projects involving landfills, wastewater lagoons, and ponds, dewatering of sludges results in significant savings, improved performance on both short term and long-term basis. Maruti products have made it possible to construct landfills, wastewater lagoons, dewatering of sludges in seemingly difficult locations.',
      products: ['Liners and Covers', 'Leachate Management', 'Gas Collection Systems', 'Dewatering Bags'],
      features: [
        'High puncture and tear strength',
        'Excellent chemical resistance',
        'Flexible and easy to install',
        'Long-term performance reliability'
      ],
      projects: [
        { name: 'Fresh Kills Landfill Closure', location: 'New York, USA', year: '2023' },
        { name: 'Laogang Landfill Gas Recovery', location: 'Shanghai, China', year: '2022' },
        { name: 'Santiago Wastewater Treatment Plant', location: 'Santiago, Chile', year: '2024' }
      ]
    },
    {
      id: 'railway',
      name: 'Railway Sector',
      icon: Tunnel,
      color: 'from-amber-500 to-orange-600',
      image: 'https://images.pexels.com/photos/163526/tracks-railroad-railway-transport-163526.jpeg',
      description: 'Railway construction can involve many challenges - from track support over weak subgrade conditions to bridge abutments and sediment control. As experts in mechanically stabilized earth (MSE) solutions. Geogrids, in combination with aggregate, are used to stabilize sub-ballast and ballast layers, decreasing required roadbed thickness while improving track performance',
      products: ['Geogrids', 'Track Bed Stabilization', 'Ballast Water Management', 'Sediment Control'],
      features: [
        'Improved track stability and alignment',
        'Reduced maintenance costs',
        'Enhanced drainage and erosion control',
        'Durable and resistant to deformation'
      ],
      projects: [
        { name: 'California High-Speed Rail', location: 'California, USA', year: '2023' },
        { name: 'Crossrail Project', location: 'London, UK', year: '2022' },
        { name: 'Shinkansen (Bullet Train)', location: 'Japan', year: '2024' }
      ]
    },
    {
      id: 'power',
      name: 'Power Sector',
      icon: Calendar,
      color: 'from-purple-500 to-purple-700',
      image: 'https://images.pexels.com/photos/243138/pexels-photo-243138.jpeg',
      description: 'Maruti products are used in power projects involving Haul roads, heavily loaded floors, water storage ponds result in significant savings, improved performance on both short term and long-term basis. Maruti products have made it possible to construct access roads and working platform, heavily loaded floors, ash ponds in seemingly difficult locations.',
      products: ['Heavy Duty Geogrids', 'Access Road Solutions', 'Working Platform Systems', 'Ash Pond Liners'],
      features: [
        'High tensile strength and durability',
        'Excellent resistance to deformation',
        'Effective in load distribution',
        'Long-term performance in harsh conditions'
      ],
      projects: [
        { name: 'Kashiwazaki-Kariwa Nuclear Power Plant', location: 'Niigata, Japan', year: '2023' },
        { name: 'Tianwan Nuclear Power Plant', location: 'Jiangsu, China', year: '2022' },
        { name: 'Palo Verde Nuclear Generating Station', location: 'Arizona, USA', year: '2024' }
      ]
    }
  ];

  const activeApp = applications.find(app => app.id === selectedApplication);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section id="hero" className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/236973/pexels-photo-236973.jpeg"
            alt="Applications Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible.hero ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-6xl font-bold mb-8">
              Diverse{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Application Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive product solutions tailored for diverse infrastructure applications
              across the globe's most challenging and prestigious projects
            </p>
          </div>
        </div>
      </section>

      {/* Application Categories (Filter Section) */}
      {/* FIX: Added id="applications" to this section for the animation to work */}
      <section id="applications" className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-center gap-3 mb-8"> {/* Changed to flex wrap for better button layout */}
      {applications.map((app, index) => (
        <button
          key={app.id}
          onClick={() => setSelectedApplication(app.id)}
          className={`
            group flex items-center px-4 py-2 rounded-full transition-all duration-300
            ${selectedApplication === app.id
              ? `bg-gradient-to-br ${app.color} text-white shadow-md`
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}
            ${isVisible.applications ? `animate-fade-in-up animation-delay-${index * 100}` : 'opacity-0'}
          `}
        >
          <div className={`
            inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 transition-all duration-300
            ${selectedApplication === app.id
              ? 'bg-white/20 backdrop-blur-sm'
              : `bg-gradient-to-r ${app.color}`}
          `}>
            <app.icon className={`h-4 w-4 ${
              selectedApplication === app.id ? 'text-white' : 'text-white'
            }`} />
          </div>
          <span className="text-sm font-medium">{app.name}</span>
        </button>
      ))}
    </div>
    {/* You would typically display the filtered content here based on `selectedApplication` */}
    <div className="mt-8 p-6 bg-slate-50 rounded-lg text-center">
      <p className="text-slate-600">Content filtered by the selected application will appear here.</p>
      {/* This is a placeholder. You'll replace this with your actual filtered content */}
    </div>
  </div>
</section>

      {/* Active Application Details */}
      {activeApp && (
        <section id="application-details" className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Content */}
              <div className={`${isVisible['application-details'] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${activeApp.color} p-4 rounded-2xl mr-4`}>
                    <activeApp.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">{activeApp.name}</h2>
                </div>
                
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {activeApp.description}
                </p>

                {/* Key Products */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Products:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {activeApp.products.map((product, index) => (
                      <div
                        key={index}
                        className={`bg-gradient-to-r ${activeApp.color} text-white px-4 py-3 rounded-xl text-sm font-semibold`}
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features:</h3>
                  <ul className="space-y-3">
                    {activeApp.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-700">
                        <Award className={`h-5 w-5 mr-3 flex-shrink-0 bg-gradient-to-r ${activeApp.color} text-transparent bg-clip-text`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`bg-gradient-to-r ${activeApp.color} text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center`}>
                  View Products
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>

              {/* Image */}
              <div className={`relative ${isVisible['application-details'] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <img
                  src={activeApp.image}
                  alt={activeApp.name}
                  className="rounded-3xl shadow-2xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activeApp.color} opacity-20 rounded-3xl`}></div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className={`${isVisible['application-details'] ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Featured Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {activeApp.projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-slate-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-4">{project.name}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-slate-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                    </div>
                    <button className={`mt-6 bg-gradient-to-r ${activeApp.color} text-white px-6 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300`}>
                      View Case Study
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications */}
      {/* FIX: Added id="tech-specs" for the animation to work */}
      <section id="tech-specs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible['tech-specs'] ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technical Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our products are engineered to meet the most demanding technical specifications and performance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center group ${isVisible['tech-specs'] ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">±100mm</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Movement Capacity</h3>
              <p className="text-slate-600">Maximum expansion joint movement range</p>
            </div>
            <div className={`text-center group ${isVisible['tech-specs'] ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">5000kN</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Load Capacity</h3>
              <p className="text-slate-600">Maximum bearing load capacity</p>
            </div>
            <div className={`text-center group ${isVisible['tech-specs'] ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Service Life</h3>
              <p className="text-slate-600">Years of reliable performance</p>
            </div>
            <div className={`text-center group ${isVisible['tech-specs'] ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">-40°C</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Temperature Range</h3>
              <p className="text-slate-600">Extreme weather performance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications;