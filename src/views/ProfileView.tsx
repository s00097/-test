import React, { useState } from 'react';
import { PRODUCTS } from '../data/plants';
import { Product } from '../types';

interface ProfileViewProps {
  favorites: string[];
  onSelectProduct: (product: Product) => void;
  onNavigateToShop: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  favorites,
  onSelectProduct,
  onNavigateToShop
}) => {
  const [activeSection, setActiveSection] = useState<'garden' | 'orders' | 'reminders'>('garden');

  const favoriteProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

  const orders = [
    {
      id: 'VD-20260819-01',
      date: '2026/08/19',
      items: '龜背芋 (中型/陶盆), 極簡長嘴澆水壺',
      total: 2130,
      status: '配送中 (專車冷鏈)',
      statusColor: 'text-[#3a6a00]'
    },
    {
      id: 'VD-20260715-08',
      date: '2026/07/15',
      items: '黃金葛 (吊盆), 有機植物營養液',
      total: 870,
      status: '已送達',
      statusColor: 'text-[#42493a]'
    }
  ];

  const wateringSchedules = [
    { name: '客廳・龜背芋', nextDate: '今天下午', frequency: '每 7 天一次', status: '待澆水' },
    { name: '陽台・石蓮花組合', nextDate: '後天 (8/22)', frequency: '每 14 天一次', status: '土壤微乾' },
    { name: '書桌・波斯頓蕨', nextDate: '明天上午', frequency: '每 3 天噴霧', status: '濕度充足' }
  ];

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-16 py-6 md:py-10 pb-32 md:pb-24 animate-in fade-in duration-200">
      {/* Profile Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
            <span className="material-symbols-outlined text-[32px]">psychiatry</span>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
              <h2 className="font-hanken font-bold text-[22px] text-slate-900">綠意生活家</h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-inter font-semibold bg-blue-50 border border-blue-200 text-blue-700 self-center sm:self-auto">
                翠綠大使 VIP
              </span>
            </div>
            <p className="font-inter text-[13px] text-slate-500 mb-4">s00097@gm.tut.edu.tw</p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 pt-3 border-t border-slate-100 text-[13px] font-inter">
              <div>
                <span className="text-slate-500">綠植積分：</span>
                <strong className="text-blue-600 font-semibold ml-1">380 點</strong>
              </div>
              <div>
                <span className="text-slate-500">收藏植物：</span>
                <strong className="text-slate-900 font-semibold ml-1">{favorites.length} 種</strong>
              </div>
              <div>
                <span className="text-slate-500">歷史訂單：</span>
                <strong className="text-slate-900 font-semibold ml-1">{orders.length} 筆</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 mb-8 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveSection('garden')}
          className={`pb-3 px-2 font-inter text-[14px] font-medium transition-all relative ${
            activeSection === 'garden'
              ? 'text-blue-600 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          心願植物庫 ({favorites.length})
        </button>
        <button
          onClick={() => setActiveSection('reminders')}
          className={`pb-3 px-2 font-inter text-[14px] font-medium transition-all relative ${
            activeSection === 'reminders'
              ? 'text-blue-600 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          養護排程日曆
        </button>
        <button
          onClick={() => setActiveSection('orders')}
          className={`pb-3 px-2 font-inter text-[14px] font-medium transition-all relative ${
            activeSection === 'orders'
              ? 'text-blue-600 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          訂單紀錄
        </button>
      </div>

      {/* Section 1: Garden / Wishlist */}
      {activeSection === 'garden' && (
        <div>
          {favoriteProducts.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-xs">
              <span className="material-symbols-outlined text-[42px] text-slate-300 mb-2">
                favorite_border
              </span>
              <h3 className="font-hanken font-bold text-[18px] text-slate-900 mb-1">
                尚未收藏任何植物
              </h3>
              <p className="font-inter text-[14px] text-slate-500 mb-4">
                在瀏覽植物時點選愛心，就能把心儀的綠色夥伴加入專屬花園！
              </p>
              <button
                onClick={onNavigateToShop}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-inter text-[13px] font-semibold transition-colors shadow-xs"
              >
                前往商店逛逛
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {favoriteProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all cursor-pointer p-3.5 flex gap-4 items-center"
                >
                  <div className="w-18 h-18 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-hanken font-semibold text-[16px] text-slate-900 group-hover:text-blue-600 transition-colors">
                      {p.name}
                    </h4>
                    <p className="font-inter text-[12px] text-slate-500">{p.categoryName}</p>
                    <p className="font-inter text-[14px] text-slate-900 font-bold mt-1">
                      NT$ {p.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Section 2: Watering Reminders */}
      {activeSection === 'reminders' && (
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-blue-600">water_drop</span>
              <h3 className="font-hanken font-bold text-[18px] text-slate-900">
                智慧澆水提醒排程
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {wateringSchedules.map((sc, idx) => (
                <div key={idx} className="py-3.5 flex justify-between items-center">
                  <div>
                    <h4 className="font-inter font-medium text-[14px] text-slate-900">{sc.name}</h4>
                    <p className="font-inter text-[12px] text-slate-500 mt-0.5">
                      頻率：{sc.frequency}・下次澆水：
                      <span className="text-blue-600 font-semibold ml-1">{sc.nextDate}</span>
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-[12px] font-inter font-medium rounded-lg">
                    {sc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Section 3: Orders */}
      {activeSection === 'orders' && (
        <div className="space-y-3.5">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex justify-between items-start mb-3 pb-3 border-b border-slate-100">
                <div>
                  <span className="font-inter text-[12px] text-slate-400 font-mono">
                    訂單編號：{order.id}
                  </span>
                  <p className="font-inter text-[13px] text-slate-800 font-medium mt-0.5">
                    {order.date}
                  </p>
                </div>
                <span className="font-inter text-[12px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  {order.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="font-inter text-slate-600 text-[13px]">{order.items}</span>
                <strong className="font-inter font-bold text-[16px] text-slate-900">
                  NT$ {order.total.toLocaleString()}
                </strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};
