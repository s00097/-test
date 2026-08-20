import React from 'react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  currentTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
  cartCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onNavigate, cartCount }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-4 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-lg">
      {/* Home */}
      <button
        id="btn-nav-home"
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center justify-center relative active:scale-95 transition-all duration-150 py-1 px-3 ${
          currentTab === 'home'
            ? 'text-blue-600 font-semibold'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <span
          className={`material-symbols-outlined mb-0.5 text-[22px] ${
            currentTab === 'home' ? 'fill text-blue-600' : ''
          }`}
        >
          home
        </span>
        <span className="font-inter text-[11px]">Home</span>
        {currentTab === 'home' && (
          <span className="absolute bottom-0 w-1 h-1 bg-blue-600 rounded-full"></span>
        )}
      </button>

      {/* Shop */}
      <button
        id="btn-nav-shop"
        onClick={() => onNavigate('shop')}
        className={`flex flex-col items-center justify-center relative active:scale-95 transition-all duration-150 py-1 px-3 ${
          currentTab === 'shop'
            ? 'text-blue-600 font-semibold'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <span
          className={`material-symbols-outlined mb-0.5 text-[22px] ${
            currentTab === 'shop' ? 'fill text-blue-600' : ''
          }`}
        >
          potted_plant
        </span>
        <span className="font-inter text-[11px]">Shop</span>
        {currentTab === 'shop' && (
          <span className="absolute bottom-0 w-1 h-1 bg-blue-600 rounded-full"></span>
        )}
      </button>

      {/* Cart */}
      <button
        id="btn-nav-cart"
        onClick={() => onNavigate('cart')}
        className={`flex flex-col items-center justify-center relative active:scale-95 transition-all duration-150 py-1 px-3 ${
          currentTab === 'cart'
            ? 'text-blue-600 font-semibold'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <div className="relative">
          <span
            className={`material-symbols-outlined mb-0.5 text-[22px] ${
              currentTab === 'cart' ? 'fill text-blue-600' : ''
            }`}
          >
            shopping_bag
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
              {cartCount}
            </span>
          )}
        </div>
        <span className="font-inter text-[11px]">Cart</span>
        {currentTab === 'cart' && (
          <span className="absolute bottom-0 w-1 h-1 bg-blue-600 rounded-full"></span>
        )}
      </button>

      {/* Profile */}
      <button
        id="btn-nav-profile"
        onClick={() => onNavigate('profile')}
        className={`flex flex-col items-center justify-center relative active:scale-95 transition-all duration-150 py-1 px-3 ${
          currentTab === 'profile'
            ? 'text-blue-600 font-semibold'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <span
          className={`material-symbols-outlined mb-0.5 text-[22px] ${
            currentTab === 'profile' ? 'fill text-blue-600' : ''
          }`}
        >
          person
        </span>
        <span className="font-inter text-[11px]">Profile</span>
        {currentTab === 'profile' && (
          <span className="absolute bottom-0 w-1 h-1 bg-blue-600 rounded-full"></span>
        )}
      </button>
    </nav>
  );
};
