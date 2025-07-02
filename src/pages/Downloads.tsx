import React, { useState, useEffect } from 'react';
import { Download, FileText, File, Search, Filter, Calendar, Eye } from 'lucide-react';

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const categories = [
    { id: 'all', name: 'All Documents', color: 'from-slate-500 to-slate-700' },
    { id: 'brochures', name: 'Product Brochures', color: 'from-blue-500 to-blue-700' },
    { id: 'specifications', name: 'Technical Specifications', color: 'from-emerald-500 to-emerald-700' },
    { id: 'certifications', name: 'Certifications', color: 'from-amber-500 to-orange-600' },
    { id: 'case-studies', name: 'Case Studies', color: 'from-purple-500 to-purple-700' },
    { id: 'installation', name: 'Installation Guides', color: 'from-red-500 to-red-700' }
  ];

  const downloads = [
    {
      id: 1,
      title: 'Rubber Expansion Joints - Complete Product Catalog',
      category: 'brochures',
      type: 'PDF',
      size: '2.5 MB',
      pages: 24,
      description: 'Comprehensive product catalog featuring all rubber expansion joint types with detailed specifications, applications, and installation guidelines',
      downloads: 1250,
      lastUpdated: '2024-01-15',
      featured: true,
      thumbnail: 'https://images.pexels.com/photos/162539/architecture-building-bridges-landmark-162539.jpeg'
    },
    {
      id: 2,
      title: 'PVC Waterstops Technical Specifications',
      category: 'specifications',
      type: 'PDF',
      size: '1.8 MB',
      pages: 16,
      description: 'Detailed technical specifications, performance data, and installation guidelines for all PVC waterstop products',
      downloads: 890,
      lastUpdated: '2024-01-10',
      featured: false,
      thumbnail: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg'
    },
    {
      id: 3,
      title: 'ISO 9001:2015 Quality Management Certificate',
      category: 'certifications',
      type: 'PDF',
      size: '0.5 MB',
      pages: 2,
      description: 'Official ISO 9001:2015 quality management system certification document',
      downloads: 2100,
      lastUpdated: '2023-12-01',
      featured: true,
      thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    },
    {
      id: 4,
      title: 'Geo-Membranes Product Range & Applications',
      category: 'brochures',
      type: 'PDF',
      size: '3.2 MB',
      pages: 32,
      description: 'Complete range of geo-membrane products with environmental applications and technical performance data',
      downloads: 650,
      lastUpdated: '2024-01-12',
      featured: false,
      thumbnail: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
    },
    {
      id: 5,
      title: 'Mumbai Trans Harbour Link - Project Case Study',
      category: 'case-studies',
      type: 'PDF',
      size: '1.2 MB',
      pages: 8,
      description: 'Detailed case study of expansion joint installation for India\'s longest sea bridge project',
      downloads: 425,
      lastUpdated: '2024-01-08',
      featured: true,
      thumbnail: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg'
    },
    {
      id: 6,
      title: 'Bridge Bearing Pads Installation Manual',
      category: 'installation',
      type: 'PDF',
      size: '2.1 MB',
      pages: 20,
      description: 'Step-by-step installation procedures, best practices, and maintenance guidelines for bridge bearing pads',
      downloads: 780,
      lastUpdated: '2024-01-05',
      featured: false,
      thumbnail: 'https://images.pexels.com/photos/207252/pexels-photo-207252.jpeg'
    },
    {
      id: 7,
      title: 'CE Marking Certificates Portfolio',
      category: 'certifications',
      type: 'PDF',
      size: '0.8 MB',
      pages: 6,
      description: 'European conformity certificates for all exported products meeting EU standards',
      downloads: 320,
      lastUpdated: '2023-11-20',
      featured: false,
      thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    },
    {
      id: 8,
      title: 'Drainage Spouts Technical Data Sheet',
      category: 'specifications',
      type: 'PDF',
      size: '1.5 MB',
      pages: 12,
      description: 'Technical specifications, performance data, and material properties for all drainage spout products',
      downloads: 540,
      lastUpdated: '2024-01-03',
      featured: false,
      thumbnail: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg'
    },
    {
      id: 9,
      title: 'Seismic Isolation Bearings Design Guide',
      category: 'specifications',
      type: 'PDF',
      size: '2.8 MB',
      pages: 28,
      description: 'Comprehensive design guide for seismic isolation bearings with calculation examples and design procedures',
      downloads: 395,
      lastUpdated: '2024-01-01',
      featured: true,
      thumbnail: 'https://images.pexels.com/photos/207252/pexels-photo-207252.jpeg'
    },
    {
      id: 10,
      title: 'Quality Control Procedures Manual',
      category: 'installation',
      type: 'PDF',
      size: '1.9 MB',
      pages: 18,
      description: 'Detailed quality control procedures and testing protocols for all product categories',
      downloads: 275,
      lastUpdated: '2023-12-28',
      featured: false,
      thumbnail: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg'
    }
  ];

  const filteredDownloads = downloads.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredDownloads = downloads.filter(item => item.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg"
            alt="Downloads Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-8">
              Resource{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Library
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Access comprehensive technical documentation, product brochures, certifications, 
              and case studies to support your infrastructure projects
            </p>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section id="featured" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.featured ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most popular and recently updated technical documents and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredDownloads.slice(0, 3).map((item, index) => (
              <div
                key={item.id}
                className={`group hover-lift bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden ${
                  isVisible.featured ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-slate-900">{item.size}</div>
                      <div className="text-xs text-slate-500">Size</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">{item.pages}</div>
                      <div className="text-xs text-slate-500">Pages</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">{item.downloads}</div>
                      <div className="text-xs text-slate-500">Downloads</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </button>
                    <button className="px-4 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-slate-400 transition-all duration-300">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search documents, specifications, case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-slate-400" />
                <span className="text-slate-600 font-medium">
                  {filteredDownloads.length} documents found
                </span>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Downloads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDownloads.map((item, index) => (
              <div
                key={item.id}
                className={`group hover-lift bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden ${
                  isVisible.downloads ? `animate-fade-in-up animation-delay-${(index % 8) * 100}` : 'opacity-0'
                }`}
              >
                {/* Document Icon and Type */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-xl">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {item.type}
                      </span>
                      <div className="text-xs text-slate-500 mt-1">{item.size}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Stats and Actions */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(item.lastUpdated).toLocaleDateString()}</span>
                    </div>
                    <span>{item.downloads} downloads</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center text-sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </button>
                    <button className="px-3 py-3 border border-slate-300 text-slate-700 rounded-xl hover:border-slate-400 transition-all duration-300">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredDownloads.length === 0 && (
            <div className="text-center py-16">
              <File className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No documents found</h3>
              <p className="text-slate-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Quick Access
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fast access to our most requested document categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1).map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group hover-lift bg-gradient-to-br ${category.color} text-white p-8 rounded-3xl text-center transition-all duration-300 hover:scale-105`}
              >
                <FileText className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-bold text-lg mb-2">{category.name}</div>
                <div className="text-sm opacity-90">
                  {downloads.filter(d => d.category === category.id).length} documents
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Request Documents */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-8">
              Can't Find What You Need?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Request specific technical documents, custom product information, or project-specific documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25">
                Request Documents
              </button>
              <button className="glass-effect text-white px-10 py-5 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50">
                Contact Technical Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;