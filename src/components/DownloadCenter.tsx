import React, { useState } from 'react';
import { Download, FileText, File, Search, Filter } from 'lucide-react';

const DownloadCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documents' },
    { id: 'brochures', name: 'Product Brochures' },
    { id: 'specifications', name: 'Technical Specifications' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'installation', name: 'Installation Guides' }
  ];

  const downloads = [
    {
      id: 1,
      title: 'Rubber Expansion Joints - Complete Brochure',
      category: 'brochures',
      type: 'PDF',
      size: '2.5 MB',
      description: 'Comprehensive product catalog with specifications and applications',
      downloads: 1250,
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      title: 'PVC Waterstops Technical Specifications',
      category: 'specifications',
      type: 'PDF',
      size: '1.8 MB',
      description: 'Detailed technical specifications and installation guidelines',
      downloads: 890,
      lastUpdated: '2024-01-10'
    },
    {
      id: 3,
      title: 'ISO 9001:2015 Certificate',
      category: 'certifications',
      type: 'PDF',
      size: '0.5 MB',
      description: 'Quality management system certification',
      downloads: 2100,
      lastUpdated: '2023-12-01'
    },
    {
      id: 4,
      title: 'Geo-Membranes Product Range',
      category: 'brochures',
      type: 'PDF',
      size: '3.2 MB',
      description: 'Complete range of geo-membrane products and applications',
      downloads: 650,
      lastUpdated: '2024-01-12'
    },
    {
      id: 5,
      title: 'Mumbai Trans Harbour Link Case Study',
      category: 'case-studies',
      type: 'PDF',
      size: '1.2 MB',
      description: 'Detailed case study of expansion joint installation',
      downloads: 425,
      lastUpdated: '2024-01-08'
    },
    {
      id: 6,
      title: 'Bridge Bearing Pads Installation Guide',
      category: 'installation',
      type: 'PDF',
      size: '2.1 MB',
      description: 'Step-by-step installation procedures and best practices',
      downloads: 780,
      lastUpdated: '2024-01-05'
    },
    {
      id: 7,
      title: 'CE Marking Certificates',
      category: 'certifications',
      type: 'PDF',
      size: '0.8 MB',
      description: 'European conformity certificates for exported products',
      downloads: 320,
      lastUpdated: '2023-11-20'
    },
    {
      id: 8,
      title: 'Drainage Spouts Technical Data',
      category: 'specifications',
      type: 'PDF',
      size: '1.5 MB',
      description: 'Technical specifications and performance data',
      downloads: 540,
      lastUpdated: '2024-01-03'
    }
  ];

  const filteredDownloads = downloads.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="downloads" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">
            Download Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access technical documentation, product brochures, certifications, and case studies
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDownloads.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="p-6">
                {/* Document Icon and Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-[#004d40] p-3 rounded-lg mr-3">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="bg-[#ffc107] text-[#004d40] px-2 py-1 rounded text-xs font-semibold">
                        {item.type}
                      </span>
                      <div className="text-sm text-gray-500 mt-1">{item.size}</div>
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-bold text-[#004d40] mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.downloads} downloads</span>
                  <span>Updated: {new Date(item.lastUpdated).toLocaleDateString()}</span>
                </div>

                {/* Download Button */}
                <button className="w-full bg-[#004d40] text-white py-3 rounded-lg font-semibold hover:bg-[#00695c] transition-colors duration-200 flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDownloads.length === 0 && (
          <div className="text-center py-12">
            <File className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No documents found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Quick Access Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-[#004d40] mb-6 text-center">
            Quick Access
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-[#e0f2f1] hover:bg-[#b2dfdb] text-[#004d40] p-6 rounded-lg text-center transition-colors duration-200">
              <FileText className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">All Brochures</div>
              <div className="text-sm text-gray-600">Product Catalogs</div>
            </button>
            <button className="bg-[#e0f2f1] hover:bg-[#b2dfdb] text-[#004d40] p-6 rounded-lg text-center transition-colors duration-200">
              <File className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Specifications</div>
              <div className="text-sm text-gray-600">Technical Data</div>
            </button>
            <button className="bg-[#e0f2f1] hover:bg-[#b2dfdb] text-[#004d40] p-6 rounded-lg text-center transition-colors duration-200">
              <FileText className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Certifications</div>
              <div className="text-sm text-gray-600">Quality Certificates</div>
            </button>
            <button className="bg-[#e0f2f1] hover:bg-[#b2dfdb] text-[#004d40] p-6 rounded-lg text-center transition-colors duration-200">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Installation Guides</div>
              <div className="text-sm text-gray-600">How-to Manuals</div>
            </button>
          </div>
        </div>

        {/* Request Documents */}
        <div className="mt-12 bg-[#004d40] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You Need?</h3>
          <p className="mb-6 text-gray-200">
            Request specific technical documents or custom product information
          </p>
          <button className="bg-[#ffc107] text-[#004d40] px-8 py-3 rounded-lg font-semibold hover:bg-[#ffb300] transition-colors duration-200">
            Request Documents
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadCenter;