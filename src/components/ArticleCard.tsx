import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye, User } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'horizontal' | 'small';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'default' }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  if (variant === 'horizontal') {
    return (
      <Link to={`/artikel/${article.id}`} className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
        <div className="w-48 flex-shrink-0">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex-1 p-4">
          <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-2">
            {article.category}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center text-xs text-gray-500 space-x-4">
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {formatDate(article.publishDate)}
            </div>
            <div className="flex items-center">
              <Eye className="h-3 w-3 mr-1" />
              {article.views}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'small') {
    return (
      <Link to={`/artikel/${article.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-3">
          <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-2">
            {article.category}
          </span>
          <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDate(article.publishDate)}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/artikel/${article.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-2">
          {article.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(article.publishDate)}
            </div>
          </div>
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            {article.views}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;