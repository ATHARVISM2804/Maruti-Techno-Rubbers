import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

 const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    dropdown: [
      { name: 'Company Overview', href: '/about' },
      { name: 'Global Presence', href: '/global-presence' },
      { name: 'Leadership', href: '/about#leadership' }
    ]
  },
  { 
    name: 'Products', 
    href: '/products',
    dropdown: [
      { name: 'Water Proofing', href: '/products#water-proofing' },
      { name: 'Agriculture GEOsystem', href: '/products#agriculture-geosystem' },
      { name: 'Infrastructure & Construction', href: '/products#infrastructure-construction' }
    ]
  },
  { name: 'Applications', href: '/applications' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Contact', href: '/contact' },
];


  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span>📧  support@marutitechnorubber.com</span>
              <span>📞 +07 554 332 322  </span>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-transparent border border-slate-600 rounded px-2 py-1 text-xs">
                <option value="en">EN</option>
                <option value="hi">हिं</option>
                <option value="es">ES</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-slate-200' 
          : 'bg-white/95 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="https://www.marutirubber.com/assets/img/white-logo.png"
                alt="Maruti Techno Rubber Logo"
                className=" mr-4"
                style={{  borderRadius: '0.75rem', padding: '0.5rem' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                    setActiveDropdown(item.dropdown ? item.name : null);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
                  }}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50"
                      onMouseEnter={() => {
                        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                        setActiveDropdown(item.name);
                      }}
                      onMouseLeave={() => {
                        dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
                      }}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Get Quote Button - Desktop */}
              <div className="pl-8 border-l border-slate-300 flex-shrink-0 flex items-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  Get Quote
                </Link>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200 bg-white">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-200">
                  <Link
                    to="/contact"
                    className="block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;