import React, { useState } from 'react';
import { ActiveTab } from '../types';

interface HeaderProps {
  currentTab: ActiveTab | 'detail';
  onNavigate: (tab: ActiveTab) => void;
  cartCount: number;
  onOpenSearch?: () => void;
  onBack?: () => void;
  isDetailPage?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  cartCount,
  onOpenSearch,
  onBack,
  isDetailPage = false,
  isFavorite = false,
  onToggleFavorite
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: '🌿 澆水提醒',
      desc: '您的「龜背芋」已有一週未澆水，今天適合檢查土壤濕度。',
      time: '10分鐘前',
      unread: true
    },
    {
      id: 2,
      title: '✨ 季節養護提示',
      desc: '換季時節，多肉植物可減少澆水頻率並增加光照。',
      time: '2小時前',
      unread: false
    },
    {
      id: 3,
      title: '📦 訂單狀態更新',
      desc: '您的植物包裹已交由專車配送，附保溫保護包裝。',
      time: '昨天',
      unread: false
    }
  ];

  return (
    <header className="flex justify-between items-center px-4 md:px-16 h-16 w-full z-40 sticky top-0 bg-white/95 backdrop-blur-md transition-all border-b border-slate-200/80 shadow-xs">
      {/* Left Action: Back Arrow on detail page, Search Icon on regular pages */}
      {isDetailPage ? (
        <button
          id="btn-header-back"
          onClick={onBack}
          aria-label="返回上一頁"
          className="text-slate-600 hover:text-slate-900 hover:opacity-100 transition-colors active:scale-95 duration-200 flex items-center justify-center p-2 -ml-2 rounded-lg hover:bg-slate-100"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_back</span>
        </button>
      ) : (
        <button
          id="btn-header-search"
          onClick={onOpenSearch}
          aria-label="搜尋植物"
          className="text-slate-600 hover:text-slate-900 hover:opacity-100 transition-colors active:scale-95 duration-200 flex items-center justify-center p-2 -ml-2 rounded-lg hover:bg-slate-100"
        >
          <span className="material-symbols-outlined text-[22px]">search</span>
        </button>
      )}

      {/* Brand Center Title */}
      <h1
        onClick={() => onNavigate('home')}
        className="font-hanken font-bold text-[22px] tracking-tight text-slate-900 cursor-pointer absolute left-1/2 -translate-x-1/2 hover:text-blue-600 transition-colors select-none flex items-center gap-1.5"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
        Verdant
      </h1>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-xl border border-slate-200 shadow-sm">
        <button
          onClick={() => onNavigate('home')}
          className={`font-inter text-[13px] px-4 py-1.5 rounded-lg font-medium transition-all ${
            currentTab === 'home'
              ? 'bg-blue-600 text-white font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => onNavigate('shop')}
          className={`font-inter text-[13px] px-4 py-1.5 rounded-lg font-medium transition-all ${
            currentTab === 'shop'
              ? 'bg-blue-600 text-white font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          Shop
        </button>
        <button
          onClick={() => onNavigate('cart')}
          className={`font-inter text-[13px] px-4 py-1.5 rounded-lg font-medium transition-all relative flex items-center gap-1.5 ${
            currentTab === 'cart'
              ? 'bg-blue-600 text-white font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          Cart
          {cartCount > 0 && (
            <span className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full ${
              currentTab === 'cart' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
            }`}>
              {cartCount}
            </span>
          )}
        </button>
        <button
          onClick={() => onNavigate('profile')}
          className={`font-inter text-[13px] px-4 py-1.5 rounded-lg font-medium transition-all ${
            currentTab === 'profile'
              ? 'bg-blue-600 text-white font-semibold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          Profile
        </button>
      </nav>

      {/* Right Action: Favorite toggle on detail, Notifications / Cart on regular */}
      <div className="flex items-center gap-1 relative">
        {isDetailPage ? (
          <button
            id="btn-detail-favorite-header"
            onClick={onToggleFavorite}
            aria-label="收藏商品"
            className="text-slate-600 hover:text-slate-900 transition-colors active:scale-95 duration-200 flex items-center justify-center p-2 rounded-lg hover:bg-slate-100"
          >
            <span
              className={`material-symbols-outlined text-[22px] transition-colors ${
                isFavorite ? 'text-rose-600 fill' : 'text-slate-600'
              }`}
            >
              {isFavorite ? 'favorite' : 'favorite_border'}
            </span>
          </button>
        ) : (
          <>
            {/* Desktop Cart quick trigger */}
            <button
              id="btn-header-desktop-cart"
              onClick={() => onNavigate('cart')}
              aria-label="查看購物車"
              className="hidden md:flex relative text-slate-600 hover:text-slate-900 transition-colors active:scale-95 duration-200 items-center justify-center p-2 rounded-lg hover:bg-slate-100"
            >
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Notifications Button */}
            <button
              id="btn-header-notifications"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="通知中心"
              className="relative text-slate-600 hover:text-slate-900 transition-colors active:scale-95 duration-200 flex items-center justify-center p-2 rounded-lg hover:bg-slate-100"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-600"></span>
            </button>
          </>
        )}

        {/* Notifications Popover */}
        {showNotifications && (
          <div className="absolute top-12 right-0 w-80 sm:w-96 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-3">
              <h3 className="font-inter font-semibold text-[15px] text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 text-[18px]">notifications</span>
                綠植通知
              </h3>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-slate-400 hover:text-slate-700 text-[12px] font-medium"
              >
                關閉
              </button>
            </div>
            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-3 rounded-lg border transition-colors ${
                    n.unread
                      ? 'bg-blue-50/50 border-blue-100'
                      : 'bg-white border-slate-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-inter font-medium text-[13px] text-slate-900">
                      {n.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">{n.time}</span>
                  </div>
                  <p className="font-inter text-[12px] text-slate-600 leading-relaxed">
                    {n.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
