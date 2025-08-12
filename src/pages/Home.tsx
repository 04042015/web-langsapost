import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/mockData';
import { TrendingUp, Clock } from 'lucide-react';

const Home = () => {
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 6);
  
  const popularArticles = articles.filter(article => article.popular).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Slider */}
        <section className="mb-12">
          <HeroSlider articles={articles} />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Latest News */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-red-500 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Berita Terbaru</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular News */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Berita Populer</h2>
              </div>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={article.id} className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <ArticleCard article={article} variant="small" />
                  </div>
                ))}
              </div>
            </section>

            {/* Advertisement Space */}
            <section className="bg-gray-200 rounded-lg p-8 text-center mt-8">
              <p className="text-gray-600">Ruang Iklan</p>
              <p className="text-sm text-gray-500 mt-2">300 x 250</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;