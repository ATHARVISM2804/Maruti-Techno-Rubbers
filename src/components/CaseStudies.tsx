import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Award, ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'Mumbai Trans Harbour Link',
      location: 'Mumbai, Maharashtra, India',
      year: '2023',
      category: 'Bridge Infrastructure',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      description: 'Supplied high-performance expansion joints and bearing pads for this 22km sea link project.',
      challenge: 'Marine environment requirements with high salt exposure and extreme weather conditions.',
      solution: 'Custom-designed EPDM expansion joints with enhanced UV and saltwater resistance.',
      products: ['Modular Expansion Joints', 'Laminated Rubber Bearings', 'Drainage Spouts'],
      clientLogo: 'MMRDA',
      results: [
        '22km of expansion joint installation',
        '500+ bearing pads supplied',
        'Zero maintenance issues in first year'
      ]
    },
    {
      id: 2,
      title: 'Delhi Airport Metro Extension',
      location: 'New Delhi, India',
      year: '2022',
      category: 'Metro Infrastructure',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
      description: 'Comprehensive waterproofing and sealing solutions for underground metro construction.',
      challenge: 'Underground construction with high water table and stringent safety requirements.',
      solution: 'Advanced PVC waterstops and geo-membranes for complete waterproofing.',
      products: ['PVC Waterstops', 'HDPE Geomembranes', 'Injection Grouting Packers'],
      clientLogo: 'DMRC',
      results: [
        '15km of waterstop installation',
        '100% waterproofing effectiveness',
        'Delivered 2 weeks ahead of schedule'
      ]
    },
    {
      id: 3,
      title: 'Pune-Mumbai Expressway',
      location: 'Maharashtra, India',
      year: '2021',
      category: 'Highway Infrastructure',
      image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
      description: 'Bridge expansion joints and drainage systems for 95km expressway project.',
      challenge: 'High-speed traffic loads and monsoon drainage requirements.',
      solution: 'Strip seal expansion joints with integrated drainage systems.',
      products: ['Strip Seal Joints', 'Bridge Drainage Spouts', 'Approach Slabs'],
      clientLogo: 'MSRDC',
      results: [
        '45 bridges equipped',
        '200+ expansion joints installed',
        'Enhanced traffic safety and comfort'
      ]
    },
    {
      id: 4,
      title: 'Singapore MRT Extension',
      location: 'Singapore',
      year: '2023',
      category: 'International Project',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      description: 'Precision-engineered bearing pads and expansion joints for MRT tunnel construction.',
      challenge: 'Strict international standards and precision engineering requirements.',
      solution: 'Custom-manufactured products meeting Singapore Building Authority standards.',
      products: ['Precision Bearing Pads', 'Tunnel Expansion Joints', 'Waterproof Membranes'],
      clientLogo: 'LTA Singapore',
      results: [
        'International standards compliance',
        '10km tunnel section completed',
        'Zero quality issues reported'
      ]
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
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Successful project implementations showcasing our expertise and reliability
          </p>
        </div>

        <div className="bg-[#f5f5f5] rounded-xl overflow-hidden">
          {/* Main Case Study Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-96 lg:h-auto">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-0% to-transparent to-60%"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{currentCase.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{currentCase.year}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#ffc107] text-[#004d40] px-3 py-1 rounded-full text-sm font-semibold">
                  {currentCase.category}
                </span>
                <div className="text-[#004d40] font-bold text-lg">
                  {currentCase.clientLogo}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#004d40] mb-4">
                {currentCase.title}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {currentCase.description}
              </p>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-[#00796b] mb-2">Challenge:</h4>
                  <p className="text-gray-700 text-sm">{currentCase.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#00796b] mb-2">Our Solution:</h4>
                  <p className="text-gray-700 text-sm">{currentCase.solution}</p>
                </div>
              </div>

              {/* Products Used */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#00796b] mb-3">Products Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentCase.products.map((product, index) => (
                    <span
                      key={index}
                      className="bg-[#e0f2f1] text-[#004d40] px-3 py-1 rounded-full text-sm"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#00796b] mb-3">Key Results:</h4>
                <ul className="space-y-2">
                  {currentCase.results.map((result, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <Award className="h-4 w-4 text-[#ffc107] mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-[#004d40] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00695c] transition-colors duration-200 flex items-center">
                View Full Case Study
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-white p-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="flex items-center text-[#004d40] hover:text-[#00796b] transition-colors duration-200"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-[#ffc107]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex items-center text-[#004d40] hover:text-[#00796b] transition-colors duration-200"
              >
                Next
                <ChevronRight className="h-5 w-5 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mt-16 bg-[#004d40] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <p className="mb-4 italic">"Exceptional quality and timely delivery. Maruti Techno Rubber has been our trusted partner for multiple projects."</p>
              <div className="text-[#ffc107] font-semibold">- MMRDA Project Director</div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <p className="mb-4 italic">"Their technical expertise and customer service are unmatched in the industry."</p>
              <div className="text-[#ffc107] font-semibold">- DMRC Chief Engineer</div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <p className="mb-4 italic">"Reliable products that meet international standards. Highly recommended for infrastructure projects."</p>
              <div className="text-[#ffc107] font-semibold">- LTA Singapore</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;