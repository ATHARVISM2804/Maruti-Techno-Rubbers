import React, { useState, useEffect } from 'react';
import { CheckCircle, Award, Clock, Users, Shield, Truck, Factory, Globe, Target, TrendingUp, Zap, Building } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('overview');

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

  const milestones = [
    { year: '1990', title: 'Company Founded', description: 'Started with a vision to revolutionize infrastructure solutions' },
    { year: '1995', title: 'First Export', description: 'Expanded to international markets with quality products' },
    { year: '2000', title: 'ISO Certification', description: 'Achieved ISO 9001:2000 certification for quality management' },
    { year: '2010', title: 'Global Expansion', description: 'Established presence in 25+ countries worldwide' },
    { year: '2015', title: 'Technology Upgrade', description: 'Invested in state-of-the-art manufacturing technology' },
    { year: '2020', title: 'Sustainability Focus', description: 'Launched eco-friendly product lines and green initiatives' },
    { year: '2025', title: 'Digital Transformation', description: 'Leading the industry with smart manufacturing solutions' }
  ];

  const leadership = [
    {
      name: 'Rajesh Sharma',
      position: 'Chairman & Managing Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: '30+ years of experience in manufacturing and international business'
    },
    {
      name: 'Priya Patel',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      bio: 'Leading innovation in product development and quality assurance'
    },
    {
      name: 'Amit Kumar',
      position: 'Head of Global Operations',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'Expert in supply chain management and international logistics'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to delivering products that exceed international standards',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Expanding horizons while maintaining local expertise and customer relationships',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Innovation Drive',
      description: 'Continuously investing in R&D to develop cutting-edge solutions',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting partnerships through exceptional service and support',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System', icon: Award },
    { name: 'CE Marking', description: 'European Conformity', icon: CheckCircle },
    { name: 'ASTM Standards', description: 'American Society for Testing Materials', icon: Shield },
    { name: 'IS Standards', description: 'Indian Standards', icon: Target },
    { name: 'AASHTO', description: 'American Association of State Highway', icon: Building },
    { name: 'EN Standards', description: 'European Standards', icon: Globe }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-8">
              Three Decades of{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Engineering Excellence
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings to global leadership, our journey has been defined by 
              unwavering commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', name: 'Company Overview' },
              { id: 'history', name: 'Our History' },
              { id: 'leadership', name: 'Leadership' },
              { id: 'values', name: 'Values & Mission' },
              { id: 'certifications', name: 'Certifications' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      {activeTab === 'overview' && (
        <section id="overview" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`${isVisible.overview ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Leading the Infrastructure Revolution
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Maruti Techno Rubber Pvt. Ltd. stands as a beacon of excellence in the manufacturing 
                  of high-quality rubber expansion joints, PVC waterstops, geo-membranes, bearing pads, 
                  and bridge drainage spouts for the global infrastructure and construction industry.
                </p>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Our state-of-the-art manufacturing facilities, combined with rigorous quality control 
                  processes and innovative engineering solutions, have established us as a trusted partner 
                  for major infrastructure projects across 50+ countries.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                    <Factory className="h-8 w-8 text-blue-600 mb-3" />
                    <div className="text-2xl font-bold text-slate-900">50,000+</div>
                    <div className="text-slate-600">Sq. Ft. Manufacturing</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl">
                    <Users className="h-8 w-8 text-emerald-600 mb-3" />
                    <div className="text-2xl font-bold text-slate-900">200+</div>
                    <div className="text-slate-600">Skilled Professionals</div>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${isVisible.overview ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                  alt="Manufacturing Facility"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-2xl font-bold mb-2">State-of-the-Art Facility</h4>
                  <p className="text-slate-200">Advanced manufacturing with precision engineering</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Company History */}
      {activeTab === 'history' && (
        <section id="history" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${isVisible.history ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Journey Through Time</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From a small manufacturing unit to a global leader in infrastructure solutions
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-amber-500"></div>
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } ${isVisible.history ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift">
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
      )}

      {/* Leadership */}
      {activeTab === 'leadership' && (
        <section id="leadership" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${isVisible.leadership ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Visionary Leadership</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Meet the experienced professionals driving our company's growth and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className={`text-center group ${
                    isVisible.leadership ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                  }`}
                >
                  <div className="relative mb-8">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{leader.position}</p>
                  <p className="text-slate-600">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Values & Mission */}
      {activeTab === 'values' && (
        <section id="values" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${isVisible.values ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide every decision and drive our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`group hover-lift bg-white rounded-3xl p-8 shadow-lg ${
                    isVisible.values ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className={`bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center ${
              isVisible.values ? 'animate-fade-in-up animation-delay-800' : 'opacity-0'
            }`}>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                To be the global leader in manufacturing innovative, sustainable, and high-quality 
                infrastructure solutions that enable the construction of safer, more durable, and 
                environmentally responsible projects worldwide.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Certifications */}
      {activeTab === 'certifications' && (
        <section id="certifications" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${isVisible.certifications ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Quality Certifications</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our commitment to quality is validated by international certifications and standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`group hover-lift bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center border border-slate-200 hover:border-blue-300 transition-all duration-300 ${
                    isVisible.certifications ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.name}</h3>
                  <p className="text-slate-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;