import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Eye, Share2, Facebook, MessageCircle } from 'lucide-react';
import { FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { articles } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import CommentSection from '../components/CommentSection';
import AdBanner from '../components/AdBanner';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artikel tidak ditemukan</h1>
          <Link to="/" className="text-red-500 hover:text-red-600">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(article.title);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Article Header */}
          <div className="p-8">
            <nav className="mb-6">
              <Link to="/" className="text-red-500 hover:text-red-600">
                Beranda
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to={`/kategori/${article.category.toLowerCase()}`} className="text-red-500 hover:text-red-600">
                {article.category}
              </Link>
            </nav>

            <span className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded mb-4">
              {article.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center text-gray-600 mb-6 space-x-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(article.publishDate)}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                <span>{article.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 pb-6 border-b border-gray-200 mb-8">
              <span className="text-gray-700 font-medium">Bagikan:</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4 mr-1" />
                Facebook
              </a>
              <a
                href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="h-4 w-4 mr-1" />
                WhatsApp
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaTwitter className="h-4 w-4 mr-1" />
                Twitter/X
              </a>
            </div>
          </div>

          {/* Featured Image */}
          <div className="px-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="px-8 pb-8">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Article Ad Banner */}
            <div className="my-8">
              <AdBanner position="article" />
            </div>
          </div>
        </article>

        {/* Comment Section */}
        <CommentSection articleId={article.id} />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;