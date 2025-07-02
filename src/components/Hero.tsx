import React from 'react';
import { ArrowRight, Play, Award, Users, Globe2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg"
          alt="Industrial Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#004d40] bg-opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            India's Trusted Manufacturer of{' '}
            <span className="text-[#ffc107]">Rubber & Geo-Earth Products</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            30+ Years of Quality, Innovation & Global Impact in Infrastructure & Construction Solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#products"
              className="bg-[#ffc107] text-[#004d40] px-8 py-4 rounded-lg font-semibold hover:bg-[#ffb300] transition-all duration-200 flex items-center justify-center"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#004d40] transition-all duration-200 flex items-center justify-center"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-[#ffc107] mr-2" />
              </div>
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Globe2 className="h-8 w-8 text-[#ffc107] mr-2" />
              </div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-[#ffc107] mr-2" />
              </div>
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;