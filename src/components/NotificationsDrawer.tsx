import React from 'react';
import { NotificationItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onNotificationClick: (item: NotificationItem) => void;
}

export const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead,
  onNotificationClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#eceef0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#0058be] text-[24px]">
                notifications
              </span>
              <h2 className="text-lg font-bold text-[#191c1e]">Career Alerts</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onMarkAllAsRead}
                className="text-xs text-[#0058be] hover:underline font-semibold"
              >
                Mark all read
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#424754] flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {notifications.length === 0 ? (
              <div className="text-center py-12 text-[#727785] text-sm">
                No notifications right now. Keep leveling up!
              </div>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onNotificationClick(item)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    !item.read
                      ? 'bg-[#f7f9fb] border-[#0058be]/30 shadow-xs'
                      : 'bg-white border-[#eceef0] opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        item.type === 'achievement'
                          ? 'bg-emerald-100 text-emerald-700'
                          : item.type === 'recommendation'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-[#191c1e]">
                          {item.title}
                        </h4>
                        <span className="text-[11px] text-[#727785]">
                          {item.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-[#424754] leading-relaxed">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
