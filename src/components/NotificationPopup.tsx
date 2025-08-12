import React from 'react';
import { X, Bell } from 'lucide-react';
import { useNotifications } from '../hooks/useNotifications';

const NotificationPopup = () => {
  const { notifications, showNotification, dismissNotification } = useNotifications();

  if (!showNotification || notifications.length === 0) return null;

  const latestNotification = notifications[0];

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 animate-slide-in">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-red-100 dark:bg-red-900 rounded-full">
              <Bell className="h-4 w-4 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                {latestNotification.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                {latestNotification.message}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {latestNotification.timestamp.toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
          <button
            onClick={dismissNotification}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;