import React, { useState, useEffect } from 'react';
import { MapPin, ExternalLink, Building, Users, Award, TrendingUp } from 'lucide-react';

const GlobalPresence = () => {
  const [selectedRegion, setSelectedRegion] = useState('asia');
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

  const regions = [
    {
      id: 'asia',
      name: 'Asia Pacific',
      countries: 15,
      projects: 250,
      color: 'from-blue-500 to-blue-700',
      description: 'Our home region with extensive manufacturing and distribution network',
      keyMarkets: ['India', 'Singapore', 'Malaysia', 'Thailand', 'Vietnam', 'Philippines'],
      majorProjects: [
        { name: 'Mumbai Trans Harbour Link', location: 'India', value: '$2.5B' },
        { name: 'Singapore MRT Extension', location: 'Singapore', value: '$4.1B' },
        { name: 'Kuala Lumpur Metro', location: 'Malaysia', value: '$1.8B' }
      ]
    },
    {
      id: 'middle-east',
      name: 'Middle East & Africa',
      countries: 12,
      projects: 85,
      color: 'from-amber-500 to-orange-600',
      description: 'Growing presence in infrastructure development across the region',
      keyMarkets: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'South Africa', 'Nigeria'],
      majorProjects: [
        { name: 'Dubai Metro Expansion', location: 'UAE', value: '$3.2B' },
        { name: 'Riyadh Metro Project', location: 'Saudi Arabia', value: '$5.1B' },
        { name: 'Doha Metro Network', location: 'Qatar', value: '$2.8B' }
      ]
    },
    {
      id: 'europe',
      name: 'Europe',
      countries: 8,
      projects: 32,
      color: 'from-emerald-500 to-emerald-700',
      description: 'Specialized products meeting stringent European standards',
      keyMarkets: ['UK', 'Germany', 'France', 'Netherlands', 'Switzerland', 'Norway'],
      majorProjects: [
        { name: 'Crossrail Elizabeth Line', location: 'UK', value: '$4.5B' },
        { name: 'Berlin Brandenburg Airport', location: 'Germany', value: '$1.9B' },
        { name: 'Grand Paris Express', location: 'France', value: '$6.2B' }
      ]
    },
    {
      id: 'americas',
      name: 'Americas',
      countries: 6,
      projects: 18,
      color: 'from-purple-500 to-purple-700',
      description: 'Emerging market with focus on high-value infrastructure projects',
      keyMarkets: ['USA', 'Canada', 'Brazil', 'Mexico', 'Chile', 'Colombia'],
      majorProjects: [
        { name: 'California High-Speed Rail', location: 'USA', value: '$3.8B' },
        { name: 'Toronto Transit Expansion', location: 'Canada', value: '$2.1B' },
        { name: 'São Paulo Metro Line', location: 'Brazil', value: '$1.6B' }
      ]
    }
  ];

  const activeRegion = regions.find(r => r.id === selectedRegion);

  const globalStats = [
    { icon: MapPin, value: '50+', label: 'Countries', color: 'from-blue-500 to-blue-700' },
    { icon: Building, value: '385', label: 'Active Projects', color: 'from-emerald-500 to-emerald-700' },
    { icon: Users, value: '1000+', label: 'Global Clients', color: 'from-amber-500 to-orange-600' },
    { icon: Award, value: '98%', label: 'Satisfaction Rate', color: 'from-purple-500 to-purple-700' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/236973/pexels-photo-236973.jpeg"
            alt="Global Presence Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-8">
              Global{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Infrastructure
              </span>{' '}
              Partner
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              From our headquarters in India to projects across six continents, 
              we deliver world-class infrastructure solutions with local expertise and global standards
            </p>
          </div>
        </div>
      </section>

      {/* Global Statistics */}
      <section id="stats" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.stats ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Global Impact by Numbers
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three decades of international growth and successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group hover-lift ${
                  isVisible.stats ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section id="regions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.regions ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Regional Presence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic presence across key global markets with local expertise and support
            </p>
          </div>

          {/* Region Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {regions.map((region, index) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedRegion === region.id
                    ? `bg-gradient-to-r ${region.color} text-white shadow-xl scale-105`
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                } ${isVisible.regions ? `animate-fade-in-up animation-delay-${index * 100}` : 'opacity-0'}`}
              >
                {region.name}
              </button>
            ))}
          </div>

          {/* Active Region Details */}
          {activeRegion && (
            <div className={`${isVisible.regions ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Region Info */}
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${activeRegion.color} p-4 rounded-2xl mr-4`}>
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900">{activeRegion.name}</h3>
                    </div>
                    
                    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                      {activeRegion.description}
                    </p>

                    {/* Region Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className={`bg-gradient-to-br ${activeRegion.color} p-6 rounded-2xl text-white`}>
                        <div className="text-3xl font-bold mb-2">{activeRegion.countries}</div>
                        <div className="text-sm opacity-90">Countries</div>
                      </div>
                      <div className={`bg-gradient-to-br ${activeRegion.color} p-6 rounded-2xl text-white`}>
                        <div className="text-3xl font-bold mb-2">{activeRegion.projects}</div>
                        <div className="text-sm opacity-90">Projects</div>
                      </div>
                    </div>

                    {/* Key Markets */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-slate-900 mb-4">Key Markets:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {activeRegion.keyMarkets.map((market, index) => (
                          <div
                            key={index}
                            className={`bg-gradient-to-r ${activeRegion.color} text-white px-4 py-2 rounded-xl text-sm font-semibold text-center`}
                          >
                            {market}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className={`bg-gradient-to-r ${activeRegion.color} text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center`}>
                      View Regional Office
                      <ExternalLink className="ml-3 h-5 w-5" />
                    </button>
                  </div>

                  {/* Major Projects */}
                  <div className="bg-slate-50 p-12">
                    <h4 className="text-2xl font-bold text-slate-900 mb-8">Major Projects</h4>
                    <div className="space-y-6">
                      {activeRegion.majorProjects.map((project, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-slate-200"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h5 className="text-lg font-bold text-slate-900 line-clamp-2">
                              {project.name}
                            </h5>
                            <span className={`bg-gradient-to-r ${activeRegion.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                              {project.value}
                            </span>
                          </div>
                          <div className="flex items-center text-slate-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{project.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Growth Timeline */}
      <section id="timeline" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.timeline ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Global Expansion Timeline
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our journey from local manufacturer to global infrastructure partner
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-amber-500"></div>
            
            {[
              { year: '1990', title: 'Company Founded', description: 'Started operations in Nagpur, India', side: 'left' },
              { year: '1995', title: 'First International Export', description: 'Expanded to Southeast Asian markets', side: 'right' },
              { year: '2000', title: 'Middle East Entry', description: 'Established presence in UAE and Saudi Arabia', side: 'left' },
              { year: '2005', title: 'European Certification', description: 'Achieved CE marking for European markets', side: 'right' },
              { year: '2010', title: 'Americas Expansion', description: 'First projects in North and South America', side: 'left' },
              { year: '2015', title: 'Global Network', description: 'Established offices in 4 continents', side: 'right' },
              { year: '2020', title: 'Digital Transformation', description: 'Launched global digital platform', side: 'left' },
              { year: '2025', title: 'Sustainability Leadership', description: 'Leading green infrastructure solutions', side: 'right' }
            ].map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  milestone.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                } ${isVisible.timeline ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'}`}
              >
                <div className={`w-1/2 ${milestone.side === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift border border-slate-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-8">
              Partner with Us Globally
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Join our global network of partners and distributors to bring world-class 
              infrastructure solutions to your local market
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25">
                Become a Partner
              </button>
              <button className="glass-effect text-white px-10 py-5 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50">
                Find Local Representative
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPresence;