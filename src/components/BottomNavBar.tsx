import React from 'react';
import { TabType } from '../types';

interface BottomNavBarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const navItems: { id: TabType; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'roadmap', label: 'Roadmap', icon: 'route' },
    { id: 'skills', label: 'Skills', icon: 'school' },
    { id: 'coach', label: 'Coach', icon: 'psychology' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2.5 pb-[max(12px,env(safe-area-inset-bottom))] bg-white/90 backdrop-blur-xl rounded-t-3xl border-t border-[#eceef0]/80 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] md:hidden">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelectTab(item.id)}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl px-3 py-1.5 transition-all duration-200 active:scale-90 ${
              isActive
                ? 'text-[#0058be] bg-[#0058be]/10 font-semibold'
                : 'text-[#424754] hover:text-[#191c1e] hover:bg-[#f2f4f6]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="text-[12px] leading-tight">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
