import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, quotes, or technical support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#004d40] mb-8">
              Get In Touch
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              <div className="bg-[#f5f5f5] p-6 rounded-lg flex items-start">
                <div className="bg-[#004d40] p-3 rounded-lg mr-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#004d40] mb-2">Head Office</h4>
                  <p className="text-gray-700">
                    Plot No. 123, Industrial Area<br />
                    Hingna Road, Nagpur - 440016<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg flex items-start">
                <div className="bg-[#004d40] p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#004d40] mb-2">Phone & Fax</h4>
                  <p className="text-gray-700">
                    Phone: +91-712-2234567<br />
                    Mobile: +91-9876543210<br />
                    Fax: +91-712-2234568
                  </p>
                </div>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg flex items-start">
                <div className="bg-[#004d40] p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#004d40] mb-2">Email</h4>
                  <p className="text-gray-700">
                    General: info@marutitechno.com<br />
                    Sales: sales@marutitechno.com<br />
                    Export: export@marutitechno.com
                  </p>
                </div>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg flex items-start">
                <div className="bg-[#004d40] p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#004d40] mb-2">Business Hours</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-[#f5f5f5] p-4 rounded-lg">
              <div className="h-64 bg-[#e0f2f1] rounded-lg flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1486223/pexels-photo-1486223.jpeg"
                  alt="Office Location"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-[#004d40] bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <MapPin className="h-8 w-8 text-[#004d40] mx-auto mb-2" />
                    <div className="text-[#004d40] font-semibold">Nagpur, India</div>
                    <div className="text-sm text-gray-600">View on Google Maps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-[#004d40] mb-8">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#004d40] mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004d40] mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#004d40] mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#004d40] mb-2">
                    <Building className="h-4 w-4 inline mr-2" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#004d40] mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
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
                <label className="block text-sm font-semibold text-[#004d40] mb-2">
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent resize-none"
                  placeholder="Tell us about your requirements, project details, or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#004d40] text-white py-4 rounded-lg font-semibold hover:bg-[#00695c] transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>

            {/* Additional Contact Options */}
            <div className="mt-8 p-6 bg-[#f5f5f5] rounded-lg">
              <h4 className="text-lg font-semibold text-[#004d40] mb-4">
                Prefer Direct Contact?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-[#ffc107] text-[#004d40] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffb300] transition-colors duration-200">
                  Call Now: +91-712-2234567
                </button>
                <button className="bg-[#00796b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004d40] transition-colors duration-200">
                  WhatsApp: +91-9876543210
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Offices */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#004d40] mb-8 text-center">
            Regional Offices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f5f5f5] p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-[#004d40] mb-2">Mumbai Office</h4>
              <p className="text-gray-700 text-sm mb-3">
                Andheri East, Mumbai<br />
                Maharashtra - 400069
              </p>
              <p className="text-[#00796b] font-semibold">+91-22-26832100</p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-[#004d40] mb-2">Delhi Office</h4>
              <p className="text-gray-700 text-sm mb-3">
                Connaught Place, New Delhi<br />
                Delhi - 110001
              </p>
              <p className="text-[#00796b] font-semibold">+91-11-23412345</p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-[#004d40] mb-2">Bangalore Office</h4>
              <p className="text-gray-700 text-sm mb-3">
                Electronic City, Bangalore<br />
                Karnataka - 560100
              </p>
              <p className="text-[#00796b] font-semibold">+91-80-28524500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;