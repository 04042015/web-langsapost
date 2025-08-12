import React, { useState } from 'react';
import { Calendar, Eye } from 'lucide-react';
import { infographics } from '../data/mockData';
import Lightbox from '../components/Lightbox';

const Infographic = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const lightboxImages = infographics.map(infographic => ({
    src: infographic.image,
    title: infographic.title,
    description: infographic.description
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Infografik
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Kumpulan infografik berita terkini dalam bentuk visual yang menarik dan informatif
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {infographics.length} infografik tersedia
          </div>
        </div>

        {/* Infographics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infographics.map((infographic, index) => (
            <div
              key={infographic.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                <img
                  src={infographic.image}
                  alt={infographic.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-2">
                  {infographic.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                  {infographic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {infographic.description}
                </p>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(infographic.publishDate)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          images={lightboxImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      </div>
    </div>
  );
};

export default Infographic;