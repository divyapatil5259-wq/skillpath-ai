import React from 'react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  unreadCount: number;
  onOpenNotifications: () => void;
  onAvatarClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  unreadCount,
  onOpenNotifications,
  onAvatarClick,
}) => {
  return (
    <header className="flex justify-between items-center w-full px-5 md:px-10 py-4 sticky top-0 z-40 bg-[#f7f9fb]/90 backdrop-blur-md border-b border-[#eceef0]/60 transition-all">
      <div className="flex items-center gap-3">
        <button
          onClick={onAvatarClick}
          className="relative group focus:outline-none transition-transform active:scale-95"
          title="View Profile"
        >
          <img
            className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#0058be]/30 transition-all shadow-sm"
            src={user.avatarUrl}
            alt={user.name}
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
        </button>
        <div className="flex flex-col">
          <h1 className="text-[22px] md:text-[24px] font-bold text-[#0058be] tracking-[-0.01em] flex items-center gap-1.5">
            Good morning, {user.name}{' '}
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenNotifications}
          className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#eceef0] active:scale-90 transition-all text-[#424754]"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined text-[24px]">notifications</span>
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#6b38d4] rounded-full ring-2 ring-white animate-pulse" />
          )}
        </button>
      </div>
    </header>
  );
};
