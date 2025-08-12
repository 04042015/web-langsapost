import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { categories } from '../../data/mockData';
import DarkModeToggle from '../DarkModeToggle';
import AdBanner from '../AdBanner';

const NewsTickerComponent = () => {
  const tickerItems = [
    'BREAKING: Tim Nasional Indonesia lolos ke final Piala Asia 2025',
    'Ekonomi Indonesia tumbuh 5,8% di kuartal terakhir 2024',
    'Program Smart City Langsa 2025 resmi diluncurkan',
    'Teknologi AI mulai diterapkan di rumah sakit Indonesia'
  ];

  return (
    <div className="bg-red-500 text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {tickerItems.map((item, index) => (
          <span key={index} className="mx-8 font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* News Ticker */}
      <NewsTickerComponent />
      
      {/* Header Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <AdBanner position="header" />
      </div>
      
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-bold text-red-500">LangsaPost</h1>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari berita..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <Link
              to="/admin"
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide py-4">
            <Link
              to="/infografik"
              className="whitespace-nowrap text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors"
            >
              Infografik
            </Link>
            <Link
              to="/video"
              className="whitespace-nowrap text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors"
            >
              Video
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/kategori/${category.slug}`}
                className="whitespace-nowrap text-gray-700 dark:text-gray-300 hover:text-red-500 font-medium transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;