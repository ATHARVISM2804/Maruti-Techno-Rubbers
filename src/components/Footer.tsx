import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Send, Award, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Stay Connected</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Subscribe to our newsletter for the latest product updates, industry insights, 
                technical resources, and project news delivered directly to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg"
              />
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-amber-500/25 flex items-center justify-center">
                <Send className="mr-3 h-5 w-5" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl mr-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Maruti Techno Rubber</h3>
                  <p className="text-sm text-slate-400">Global Infrastructure Solutions</p>
                </div>
              </Link>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                Three decades of excellence in manufacturing premium rubber, PVC, and geo-earth 
                products for global infrastructure and construction industry.
              </p>
              
              {/* Certifications */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Certifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800 p-3 rounded-lg text-center">
                    <Award className="h-6 w-6 text-amber-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">ISO 9001:2015</div>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg text-center">
                    <Shield className="h-6 w-6 text-amber-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">CE Marking</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-400 transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-red-600 transition-colors duration-300">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xl font-semibold mb-8">Products</h4>
              <ul className="space-y-4">
                <li><Link to="/products#expansion-joints" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Rubber Expansion Joints
                </Link></li>
                <li><Link to="/products#waterstops" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  PVC Waterstops
                </Link></li>
                <li><Link to="/products#geo-membranes" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Geo-Membranes
                </Link></li>
                <li><Link to="/products#bearing-pads" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Bearing Pads
                </Link></li>
                <li><Link to="/products#drainage-spouts" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Bridge Drainage Spouts
                </Link></li>
                <li><Link to="/products" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Custom Solutions
                </Link></li>
              </ul>
            </div>

            {/* Services & Resources */}
            <div>
              <h4 className="text-xl font-semibold mb-8">Services & Resources</h4>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Technical Consultation</Link></li>
                <li><Link to="/products" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Custom Manufacturing</Link></li>
                <li><Link to="/downloads" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Installation Support</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Quality Testing</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">After-Sales Service</Link></li>
                <li><Link to="/global-presence" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Export Documentation</Link></li>
              </ul>

              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-3">
                  <li><Link to="/case-studies" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm">Case Studies</Link></li>
                  <li><Link to="/downloads" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm">Technical Downloads</Link></li>
                  <li><Link to="/applications" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm">Applications</Link></li>
                  <li><Link to="/about" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm">Certifications</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-8">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold mb-2">Head Office</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Plot No. 123, Industrial Area<br />
                      Hingna Road, Nagpur - 440016<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-500 mr-4 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Phone & Mobile</h5>
                    <p className="text-slate-300 text-sm">+91-712-2234567</p>
                    <p className="text-slate-300 text-sm">+91-9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-500 mr-4 mt-1" />
                  <div>
                    <h5 className="font-semibold mb-2">Email</h5>
                    <p className="text-slate-300 text-sm">info@marutitechno.com</p>
                    <p className="text-slate-300 text-sm">sales@marutitechno.com</p>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4">Regional Offices</h5>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <div className="font-semibold text-sm">Mumbai</div>
                    <div className="text-slate-400 text-xs">+91-22-26832100</div>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <div className="font-semibold text-sm">Delhi</div>
                    <div className="text-slate-400 text-xs">+91-11-23412345</div>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <div className="font-semibold text-sm">Bangalore</div>
                    <div className="text-slate-400 text-xs">+91-80-28524500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-300">
                © 2025 Maruti Techno Rubber Pvt. Ltd. All rights reserved.
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Three Decades of Excellence in Global Infrastructure Solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/about" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm">
                Terms of Use
              </Link>
              <Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm">
                Sitemap
              </Link>
              <Link to="/downloads" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm">
                Quality Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;