import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Award, Users, Globe2, CheckCircle, TrendingUp, Shield, Zap, Target, Building2, Factory, Truck, MapPin } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const backgroundImages = [
    'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg',
    'https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg',
    'https://images.pexels.com/photos/236973/pexels-photo-236973.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 1700);
    return () => clearInterval(interval);
  }, []);

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

  const stats = [
    { icon: Award, value: '30+', label: 'Years Excellence', color: 'from-orange-500 to-orange-600' },
    { icon: Globe2, value: '50+', label: 'Countries Served', color: 'from-blue-500 to-blue-600' },
    { icon: Users, value: '1000+', label: 'Happy Clients', color: 'from-emerald-500 to-emerald-600' },
    { icon: Factory, value: '500K+', label: 'Products Delivered', color: 'from-purple-500 to-purple-600' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'ISO 9001:2015 Certified',
      description: 'Quality management system ensuring consistent excellence',
      color: 'from-slate-600 to-slate-700'
    },
    {
      icon: Zap,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art facilities with cutting-edge technology',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Custom solutions meeting exact specifications',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Global Standards',
      description: 'Products meeting international quality benchmarks',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const applications = [
    {
      title: 'Infrastructure',
      description: 'Bridges, highways, and major construction projects',
      image: 'https://images.pexels.com/photos/342008/pexels-photo-342008.jpeg',
      icon: Building2
    },
    {
      title: 'Industrial',
      description: 'Manufacturing facilities and industrial complexes',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      icon: Factory
    },
    {
      title: 'Transportation',
      description: 'Railways, metros, and transportation infrastructure',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
      icon: Truck
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Dynamic Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Engineering Excellence in{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Infrastructure Solutions
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Three decades of innovation in manufacturing premium rubber, PVC, and geo-earth products 
                for global infrastructure and construction projects
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-400">
              <Link
                to="/products"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl hover-lift flex items-center justify-center"
              >
                Explore Solutions
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="group glass-effect text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200 border border-white/30 hover:border-white/50 flex items-center justify-center"
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-600">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-105 transition-transform duration-200`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.features ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Maruti Techno Rubber
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering uncompromising quality and innovation in every product we manufacture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group hover-lift bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-200 ${
                  isVisible.features ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-105 transition-transform duration-200`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Preview */}
      <section id="applications" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.applications ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Powering Global Infrastructure
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our solutions are trusted in diverse applications across the world's most challenging projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl hover-lift ${
                  isVisible.applications ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                }`}
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4">
                      <app.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{app.title}</h3>
                  </div>
                  <p className="text-slate-200 leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/applications"
              className="inline-flex items-center bg-gradient-to-r from-slate-700 to-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-slate-800 hover:to-slate-900 transition-all duration-200 shadow-lg hover:shadow-xl hover-lift"
            >
              View All Applications
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence Teaser */}
      <section id="global" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/236973/pexels-photo-236973.jpeg"
            alt="Global"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.global ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Global Reach, Local Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Serving infrastructure projects across 50+ countries with proven reliability and quality
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${isVisible.global ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 group-hover:scale-105 transition-transform duration-200">50+</div>
              <div className="text-slate-300">Countries</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 group-hover:scale-105 transition-transform duration-200">500+</div>
              <div className="text-slate-300">Projects</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 group-hover:scale-105 transition-transform duration-200">1M+</div>
              <div className="text-slate-300">Products</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 group-hover:scale-105 transition-transform duration-200">98%</div>
              <div className="text-slate-300">Satisfaction</div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/global-presence"
              className="inline-flex items-center glass-effect text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200 border border-white/30 hover:border-white/50"
            >
              <MapPin className="mr-3 h-5 w-5" />
              Explore Global Presence
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
              Partner with us for your next infrastructure project and experience the difference 
              that three decades of excellence makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl hover-lift"
              >
                Start Your Project
              </Link>
              <Link
                to="/downloads"
                className="glass-effect text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200 border border-white/30 hover:border-white/50"
              >
                Download Brochures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;