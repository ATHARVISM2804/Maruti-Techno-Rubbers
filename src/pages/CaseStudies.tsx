import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Award, ExternalLink, Building, Users, Target } from 'lucide-react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const caseStudies = [
    {
      id: 1,
      title: 'Mumbai Trans Harbour Link',
      subtitle: 'India\'s Longest Sea Bridge',
      location: 'Mumbai, Maharashtra, India',
      year: '2023',
      category: 'Bridge Infrastructure',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      description: 'Supplied high-performance expansion joints and bearing pads for this 22km sea link project connecting Mumbai to Navi Mumbai.',
      challenge: 'Marine environment requirements with high salt exposure, extreme weather conditions, and heavy traffic loads requiring specialized corrosion-resistant solutions.',
      solution: 'Custom-designed EPDM expansion joints with enhanced UV and saltwater resistance, along with laminated rubber bearings specifically engineered for marine applications.',
      products: ['Modular Expansion Joints', 'Laminated Rubber Bearings', 'Drainage Spouts', 'Seismic Isolators'],
      clientLogo: 'MMRDA',
      projectValue: '$2.5 Billion',
      duration: '36 Months',
      results: [
        '22km of expansion joint installation completed',
        '500+ bearing pads supplied and installed',
        'Zero maintenance issues reported in first year',
        '98% client satisfaction rating achieved'
      ],
      testimonial: {
        text: "Maruti Techno Rubber's products exceeded our expectations. Their technical expertise and quality assurance were crucial for this challenging marine environment project.",
        author: "Chief Engineer, MMRDA",
        position: "Mumbai Metropolitan Region Development Authority"
      }
    },
    {
      id: 2,
      title: 'Delhi Airport Metro Extension',
      subtitle: 'Underground Metro Infrastructure',
      location: 'New Delhi, India',
      year: '2022',
      category: 'Metro Infrastructure',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
      description: 'Comprehensive waterproofing and sealing solutions for underground metro construction connecting IGI Airport to the city center.',
      challenge: 'Underground construction with high water table, stringent safety requirements, and need for long-term waterproofing in challenging soil conditions.',
      solution: 'Advanced PVC waterstops and HDPE geo-membranes providing complete waterproofing system with injection grouting backup for critical joints.',
      products: ['PVC Waterstops', 'HDPE Geomembranes', 'Injection Grouting Packers', 'Sealing Compounds'],
      clientLogo: 'DMRC',
      projectValue: '$1.8 Billion',
      duration: '24 Months',
      results: [
        '15km of waterstop installation completed',
        '100% waterproofing effectiveness achieved',
        'Delivered 2 weeks ahead of schedule',
        'Zero water ingress incidents reported'
      ],
      testimonial: {
        text: "The waterproofing solutions provided by Maruti Techno Rubber have proven to be exceptionally reliable. Their technical support throughout the project was outstanding.",
        author: "Project Director, DMRC",
        position: "Delhi Metro Rail Corporation"
      }
    },
    {
      id: 3,
      title: 'Pune-Mumbai Expressway',
      subtitle: 'High-Speed Highway Infrastructure',
      location: 'Maharashtra, India',
      year: '2021',
      category: 'Highway Infrastructure',
      image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
      description: 'Bridge expansion joints and drainage systems for 95km expressway project designed for high-speed traffic up to 120 km/h.',
      challenge: 'High-speed traffic loads, monsoon drainage requirements, and need for minimal maintenance solutions across multiple bridge structures.',
      solution: 'Strip seal expansion joints with integrated drainage systems and approach slab solutions designed for high-speed traffic and heavy monsoon conditions.',
      products: ['Strip Seal Joints', 'Bridge Drainage Spouts', 'Approach Slabs', 'Bearing Pads'],
      clientLogo: 'MSRDC',
      projectValue: '$3.2 Billion',
      duration: '48 Months',
      results: [
        '45 bridges equipped with expansion systems',
        '200+ expansion joints installed successfully',
        'Enhanced traffic safety and comfort achieved',
        '25% reduction in maintenance requirements'
      ],
      testimonial: {
        text: "The expansion joint systems have performed flawlessly under high-speed traffic conditions. Maruti Techno Rubber's engineering support was invaluable.",
        author: "Chief Engineer, MSRDC",
        position: "Maharashtra State Road Development Corporation"
      }
    },
    {
      id: 4,
      title: 'Singapore MRT Extension',
      subtitle: 'International Metro Project',
      location: 'Singapore',
      year: '2023',
      category: 'International Project',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      description: 'Precision-engineered bearing pads and expansion joints for MRT tunnel construction meeting Singapore\'s stringent building standards.',
      challenge: 'Strict international standards, precision engineering requirements, and compliance with Singapore Building Authority regulations in urban environment.',
      solution: 'Custom-manufactured products meeting Singapore Building Authority standards with enhanced quality control and precision manufacturing processes.',
      products: ['Precision Bearing Pads', 'Tunnel Expansion Joints', 'Waterproof Membranes', 'Seismic Dampers'],
      clientLogo: 'LTA Singapore',
      projectValue: '$4.1 Billion',
      duration: '30 Months',
      results: [
        'International standards compliance achieved',
        '10km tunnel section completed successfully',
        'Zero quality issues reported during inspection',
        'Awarded preferred supplier status'
      ],
      testimonial: {
        text: "Maruti Techno Rubber demonstrated exceptional capability in meeting our stringent quality requirements. Their products perform to international standards.",
        author: "Senior Engineer, LTA",
        position: "Land Transport Authority Singapore"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg"
            alt="Case Studies Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-8">
              Success{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Discover how our innovative solutions have contributed to some of the world's 
              most challenging and prestigious infrastructure projects
            </p>
          </div>
        </div>
      </section>

      {/* Main Case Study Display */}
      <section id="case-study" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-slate-50 rounded-3xl overflow-hidden shadow-2xl ${isVisible['case-study'] ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={currentCase.image}
                  alt={currentCase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">{currentCase.location}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">{currentCase.year}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">{currentCase.projectValue}</span>
                  </div>
                </div>
                <div className="absolute top-8 right-8">
                  <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {currentCase.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-12 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-blue-600 font-bold text-2xl">
                    {currentCase.clientLogo}
                  </div>
                  <div className="text-slate-500 text-sm">
                    Project #{currentCase.id.toString().padStart(2, '0')}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {currentCase.title}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-6">
                  {currentCase.subtitle}
                </p>

                <p className="text-slate-700 mb-8 leading-relaxed">
                  {currentCase.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Target className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-semibold text-slate-600">Project Value</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900">{currentCase.projectValue}</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-semibold text-slate-600">Duration</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900">{currentCase.duration}</div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">Challenge:</h4>
                    <p className="text-slate-700 leading-relaxed">{currentCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">Our Solution:</h4>
                    <p className="text-slate-700 leading-relaxed">{currentCase.solution}</p>
                  </div>
                </div>

                {/* Products Used */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Products Used:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentCase.products.map((product, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center">
                  View Full Case Study
                  <ExternalLink className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={prevSlide}
              className="flex items-center bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg border border-slate-200"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg border border-slate-200"
            >
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Results */}
            <div className={`${isVisible.results ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Project Results</h3>
              <ul className="space-y-4">
                {currentCase.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-6 w-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-lg text-slate-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <div className={`${isVisible.results ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <div className="text-6xl text-blue-600 mb-4">"</div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                  {currentCase.testimonial.text}
                </p>
                <div className="border-t border-slate-200 pt-6">
                  <div className="font-bold text-slate-900">{currentCase.testimonial.author}</div>
                  <div className="text-slate-600">{currentCase.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              All Case Studies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our complete portfolio of successful project implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                onClick={() => setCurrentSlide(index)}
                className={`group cursor-pointer hover-lift ${
                  isVisible.grid ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">{study.year}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">{study.location}</p>
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {study.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;