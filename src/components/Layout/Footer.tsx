import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-red-500 mb-4">LangsaPost</h3>
            <p className="text-gray-300 mb-4">
              Portal berita terdepan yang menyajikan informasi terkini, akurat, dan terpercaya 
              untuk masyarakat Indonesia, khususnya wilayah Aceh dan Langsa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><Link to="/tentang" className="text-gray-300 hover:text-red-500 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/kontak" className="text-gray-300 hover:text-red-500 transition-colors">Kontak</Link></li>
              <li><Link to="/karir" className="text-gray-300 hover:text-red-500 transition-colors">Karir</Link></li>
              <li><Link to="/kebijakan-privasi" className="text-gray-300 hover:text-red-500 transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2">
              <li><Link to="/kategori/politik" className="text-gray-300 hover:text-red-500 transition-colors">Politik</Link></li>
              <li><Link to="/kategori/ekonomi" className="text-gray-300 hover:text-red-500 transition-colors">Ekonomi</Link></li>
              <li><Link to="/kategori/olahraga" className="text-gray-300 hover:text-red-500 transition-colors">Olahraga</Link></li>
              <li><Link to="/kategori/teknologi" className="text-gray-300 hover:text-red-500 transition-colors">Teknologi</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 LangsaPost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;