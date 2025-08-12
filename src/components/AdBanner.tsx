import React from 'react';
import { advertisements } from '../data/mockData';

interface AdBannerProps {
  position: 'header' | 'sidebar' | 'article';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ position, className = '' }) => {
  const ad = advertisements.find(ad => ad.position === position);

  if (!ad) return null;

  const getAdSize = () => {
    switch (position) {
      case 'header':
        return 'w-full h-24 md:h-32';
      case 'sidebar':
        return 'w-full h-64';
      case 'article':
        return 'w-full h-32 md:h-40';
      default:
        return 'w-full h-32';
    }
  };

  return (
    <div className={`${className} bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden`}>
      <a
        href={ad.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full relative group"
      >
        <img
          src={ad.image}
          alt={ad.title}
          className={`${getAdSize()} object-cover group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 px-2 py-1 rounded">
            Iklan
          </span>
        </div>
      </a>
    </div>
  );
};

export default AdBanner;