import { useState, useEffect } from 'react';
import { articles } from '../data/mockData';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Simulate new article notifications every 30 seconds
    const interval = setInterval(() => {
      const randomArticle = articles[Math.floor(Math.random() * articles.length)];
      const newNotification: Notification = {
        id: Date.now().toString(),
        title: 'Berita Terbaru',
        message: randomArticle.title,
        timestamp: new Date(),
        read: false
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
      setShowNotification(true);

      // Auto hide after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const dismissNotification = () => {
    setShowNotification(false);
  };

  return {
    notifications,
    showNotification,
    markAsRead,
    dismissNotification
  };
};