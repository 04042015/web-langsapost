import React, { useState } from 'react';
import { MessageCircle, User, Calendar } from 'lucide-react';
import { comments as mockComments } from '../data/mockData';
import { Comment } from '../types';

interface CommentSectionProps {
  articleId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ articleId }) => {
  const [comments, setComments] = useState<Comment[]>(
    mockComments.filter(comment => comment.articleId === articleId)
  );
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.name || !newComment.email || !newComment.content) return;

    const comment: Comment = {
      id: Date.now().toString(),
      articleId,
      name: newComment.name,
      email: newComment.email,
      content: newComment.content,
      publishDate: new Date().toISOString()
    };

    setComments([comment, ...comments]);
    setNewComment({ name: '', email: '', content: '' });
  };

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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8">
      <div className="flex items-center mb-6">
        <MessageCircle className="h-6 w-6 text-red-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Komentar ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Tinggalkan Komentar
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Nama Anda"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <input
            type="email"
            placeholder="Email Anda"
            value={newComment.email}
            onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
        <textarea
          placeholder="Tulis komentar Anda..."
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white mb-4"
          required
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Kirim Komentar
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 dark:border-gray-600 pb-6 last:border-b-0">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    {comment.name}
                  </h5>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(comment.publishDate)}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {comments.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Belum ada komentar. Jadilah yang pertama berkomentar!
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;