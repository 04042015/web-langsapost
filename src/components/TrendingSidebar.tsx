import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Eye, Calendar } from 'lucide-react';
import { articles } from '../data/mockData';

const TrendingSidebar = () => {
  const trendingArticles = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Trending
        </h2>
      </div>
      
      <div className="space-y-4">
        {trendingArticles.map((article, index) => (
          <Link
            key={article.id}
            to={`/artikel/${article.id}`}
            className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
          >
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full font-bold text-sm">
                {index + 1}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors line-clamp-2 mb-2">
                {article.title}
              </h3>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-3">
                <div className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  {article.views.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(article.publishDate)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingSidebar;