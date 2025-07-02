import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building, User, MessageSquare, Globe, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      name: 'Head Office',
      location: 'Nagpur, India',
      address: 'Plot No. 123, Industrial Area, Hingna Road, Nagpur - 440016, Maharashtra, India',
      phone: '+91-712-2234567',
      email: 'info@marutitechno.com',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      isHeadquarters: true
    },
    {
      name: 'Mumbai Office',
      location: 'Mumbai, India',
      address: 'Andheri East, Mumbai, Maharashtra - 400069',
      phone: '+91-22-26832100',
      email: 'mumbai@marutitechno.com',
      image: 'https://images.pexels.com/photos/1486223/pexels-photo-1486223.jpeg',
      isHeadquarters: false
    },
    {
      name: 'Delhi Office',
      location: 'New Delhi, India',
      address: 'Connaught Place, New Delhi, Delhi - 110001',
      phone: '+91-11-23412345',
      email: 'delhi@marutitechno.com',
      image: 'https://images.pexels.com/photos/1486223/pexels-photo-1486223.jpeg',
      isHeadquarters: false
    },
    {
      name: 'Bangalore Office',
      location: 'Bangalore, India',
      address: 'Electronic City, Bangalore, Karnataka - 560100',
      phone: '+91-80-28524500',
      email: 'bangalore@marutitechno.com',
      image: 'https://images.pexels.com/photos/1486223/pexels-photo-1486223.jpeg',
      isHeadquarters: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1486223/pexels-photo-1486223.jpeg"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-8">
              Get In{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Connect with our team of experts for inquiries, technical support, 
              project consultation, or partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className={`${isVisible['contact-form'] ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-slate-700 mb-12 leading-relaxed">
                Whether you need technical consultation, product information, or project support, 
                our experienced team is ready to help you find the perfect solution.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl hover-lift">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl mr-6">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Head Office</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Plot No. 123, Industrial Area<br />
                        Hingna Road, Nagpur - 440016<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-3xl hover-lift">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-4 rounded-2xl mr-6">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Phone & Mobile</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Phone: +91-712-2234567<br />
                        Mobile: +91-9876543210<br />
                        Fax: +91-712-2234568
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-3xl hover-lift">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 rounded-2xl mr-6">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Email Addresses</h3>
                      <p className="text-slate-700 leading-relaxed">
                        General: info@marutitechno.com<br />
                        Sales: sales@marutitechno.com<br />
                        Export: export@marutitechno.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl hover-lift">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 rounded-2xl mr-6">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Business Hours</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-amber-500/25">
                  Call Now: +91-712-2234567
                </button>
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 shadow-xl hover:shadow-emerald-500/25">
                  WhatsApp: +91-9876543210
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible['contact-form'] ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="bg-slate-50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-3">
                        <User className="h-4 w-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-3">
                        <Mail className="h-4 w-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-3">
                        <Phone className="h-4 w-4 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-3">
                        <Building className="h-4 w-4 inline mr-2" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="quotation">Request Quotation</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3">
                      <MessageSquare className="h-4 w-4 inline mr-2" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                      placeholder="Tell us about your requirements, project details, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-5 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center justify-center text-lg"
                  >
                    <Send className="mr-3 h-6 w-6" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="offices" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.offices ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visit us at our strategically located offices across India for personalized service and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`group hover-lift bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden ${
                  office.isHeadquarters ? 'ring-2 ring-amber-500' : ''
                } ${isVisible.offices ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'}`}
              >
                {/* Office Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {office.isHeadquarters && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Award className="h-3 w-3 mr-1" />
                        HEADQUARTERS
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{office.name}</h3>
                    <p className="text-sm opacity-90">{office.location}</p>
                  </div>
                </div>

                {/* Office Details */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-slate-400 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-slate-600">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-slate-400 mr-3" />
                      <p className="text-sm text-slate-600">{office.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-slate-400 mr-3" />
                      <p className="text-sm text-slate-600">{office.email}</p>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    View on Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              Global Presence, Local Support
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              While our headquarters are in India, we serve clients worldwide with 
              local support and international quality standards
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">15+</div>
                <div className="text-blue-100">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
                <div className="text-blue-100">Customer Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center">
                <Globe className="mr-3 h-6 w-6" />
                Find Local Representative
              </button>
              <button className="glass-effect text-white px-10 py-5 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50">
                Schedule Video Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;