import React from 'react';
import { CheckCircle, Award, Clock, Users, Shield, Truck } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'ISO 9001:2015 Certified',
      description: 'Quality management system certification ensuring consistent product quality'
    },
    {
      icon: CheckCircle,
      title: 'In-house & External Testing',
      description: 'Comprehensive testing facilities to ensure product reliability and performance'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Committed to meeting project deadlines with efficient supply chain management'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: '98% customer satisfaction rate with dedicated support and service'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes at every stage of manufacturing'
    },
    {
      icon: Truck,
      title: 'Global Export',
      description: 'Exporting to 50+ countries with proven international quality standards'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">
            About Maruti Techno Rubber
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            30+ Years of Excellence in Manufacturing Rubber, PVC, and Geo-Earth Products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#004d40] mb-6">
              Leading the Infrastructure Revolution
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Since our establishment, Maruti Techno Rubber Pvt. Ltd. has been at the forefront of 
              manufacturing high-quality rubber expansion joints, PVC waterstops, geo-membranes, 
              bearing pads, and bridge drainage spouts for the infrastructure and construction industry.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has made us a trusted 
              partner for major infrastructure projects across India and internationally. We combine 
              traditional craftsmanship with modern technology to deliver products that meet the 
              highest international standards.
            </p>
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-[#004d40] mb-2">Our Mission</h4>
              <p className="text-gray-700">
                To provide world-class rubber and PVC products that ensure the longevity and 
                safety of infrastructure projects while maintaining environmental sustainability.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
              alt="Manufacturing Facility"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004d40] from-0% to-transparent to-70% rounded-lg"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-2xl font-bold">State-of-the-Art</h4>
              <p className="text-lg">Manufacturing Facility</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#f5f5f5] p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="bg-[#004d40] p-3 rounded-lg mr-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#004d40]">{feature.title}</h4>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#004d40] mb-8">Certifications & Standards</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white border-2 border-[#004d40] p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#004d40]">ISO</div>
              <div className="text-sm text-gray-600">9001:2015</div>
            </div>
            <div className="bg-white border-2 border-[#004d40] p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#004d40]">CE</div>
              <div className="text-sm text-gray-600">Marking</div>
            </div>
            <div className="bg-white border-2 border-[#004d40] p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#004d40]">ASTM</div>
              <div className="text-sm text-gray-600">Standards</div>
            </div>
            <div className="bg-white border-2 border-[#004d40] p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#004d40]">IS</div>
              <div className="text-sm text-gray-600">Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;