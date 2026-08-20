import React from 'react';
import { PRODUCTS } from '../data/plants';
import { Product } from '../types';

interface HomeViewProps {
  onNavigateToShop: (category?: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenCareGuide: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateToShop,
  onSelectProduct,
  onOpenCareGuide
}) => {
  // Curate featured beginner plants matching Image 5
  const featuredPlants = [
    {
      ...PRODUCTS.find((p) => p.id === 'fiddle-leaf-fig')!,
      badge: '明亮散光',
      displayPrice: 1200
    },
    {
      ...PRODUCTS.find((p) => p.id === 'golden-pothos')!,
      badge: '易於照顧',
      displayPrice: 450
    },
    {
      ...PRODUCTS.find((p) => p.id === 'snake-plant')!,
      badge: '空氣淨化',
      displayPrice: 850
    },
    {
      ...PRODUCTS.find((p) => p.id === 'zz-plant')!,
      badge: '耐陰植物',
      displayPrice: 700
    }
  ];

  return (
    <main className="max-w-[1280px] mx-auto pb-28 md:pb-20">
      {/* Hero Section */}
      <section className="px-4 md:px-16 mt-4 md:mt-6 mb-12 md:mb-16">
        <div className="relative w-full h-[480px] md:h-[540px] rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center shadow-sm border border-slate-200/60">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full transform hover:scale-102 transition-transform duration-1000 ease-out opacity-85"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeJtraapMX7wtgQtA9oVbUdKnNRleEXN_4tSbbPKldKwsEuzvRslmKnI6I0vQqkREZtTjbsZ9xnFeaC5cVa7XHhDYGrb_HrBD9CrX6ZTDiTQG-B3SA95lj8YbbAe9RR5fhd0kgGjqdIFhXrr4BiNRXhHHjx5NkH9mKBD_XUg7ZCEQrk64HPCRuBdGyBNu1tFXqneFISWnwk1bW4SIQH-YjZleXP4ah5j-G7yCxVBsN1yrFlOWSVGW0')`
            }}
          />

          {/* Subtle nature gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-900/10" />

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 mt-auto mb-10 md:mb-14 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-3 border border-white/25">
              Botanical Living
            </span>
            <h2 className="font-hanken font-bold text-[36px] md:text-[48px] text-white leading-tight tracking-tight mb-3">
              為生活注入綠意
            </h2>
            <p className="font-inter text-[15px] md:text-[17px] text-slate-200 mb-8 leading-relaxed font-normal">
              精選室內植栽，讓大自然與您的日常空間完美融合，享受純粹的平靜。
            </p>
            <button
              id="btn-hero-explore"
              onClick={() => onNavigateToShop()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-inter text-[14px] font-semibold px-8 py-3.5 rounded-lg active:scale-95 transition-all shadow-md inline-flex items-center gap-2"
            >
              探索植栽
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Plants Section (Horizontal Carousel) */}
      <section className="mb-14 md:mb-20">
        <div className="px-4 md:px-16 flex justify-between items-end mb-6 md:mb-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Editor's Choice
            </span>
            <h3 className="font-hanken font-bold text-[24px] md:text-[30px] text-slate-900 mb-1">
              精選推薦
            </h3>
            <p className="font-inter text-[14px] text-slate-500">最適合初學者的室內綠伴侶</p>
          </div>
          <button
            id="btn-featured-view-all"
            onClick={() => onNavigateToShop()}
            className="text-blue-600 hover:text-blue-700 font-inter text-[14px] font-semibold transition-colors hidden md:flex items-center gap-1"
          >
            查看全部
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Horizontal scroll container with snap */}
        <div className="flex overflow-x-auto no-scrollbar gap-5 px-4 md:px-16 pb-4 snap-x snap-mandatory">
          {featuredPlants.map((plant) => (
            <div
              key={plant.id}
              onClick={() => onSelectProduct(plant)}
              className="snap-start shrink-0 w-[270px] md:w-[290px] group cursor-pointer"
            >
              <div className="w-full h-[340px] md:h-[360px] bg-slate-100 rounded-xl overflow-hidden mb-3 relative border border-slate-200/80 shadow-xs group-hover:shadow-md transition-all">
                <img
                  src={plant.galleryImages?.[0] || plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  loading="lazy"
                />
                {plant.badge && (
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-xs border border-blue-200/60">
                    <span className="font-inter text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
                      {plant.badge}
                    </span>
                  </div>
                )}
              </div>
              <h4 className="font-hanken font-semibold text-[18px] text-slate-900 group-hover:text-blue-600 transition-colors mb-0.5">
                {plant.name}
              </h4>
              <p className="font-inter text-[15px] font-semibold text-slate-600">
                NT$ {plant.displayPrice.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Plant Care Tips Bento Card Section */}
      <section className="px-4 md:px-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
          {/* Left Column: Introduction */}
          <div className="md:col-span-1 flex flex-col justify-center mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
              <span className="material-symbols-outlined text-[26px]">water_drop</span>
            </div>
            <h3 className="font-hanken font-bold text-[24px] md:text-[28px] text-slate-900 mb-2">
              基礎養護指南
            </h3>
            <p className="font-inter text-[14px] text-slate-600 leading-relaxed mb-6">
              了解植物的基本需求，讓它們在您的空間中茁壯成長。簡單的步驟，帶來長久的綠意。
            </p>
            <button
              id="btn-home-care-guide"
              onClick={onOpenCareGuide}
              className="self-start text-blue-600 hover:text-white font-inter text-[13px] font-semibold border border-blue-600 hover:bg-blue-600 px-5 py-2.5 rounded-lg transition-colors shadow-xs"
            >
              閱讀更多
            </button>
          </div>

          {/* Right Column: 2 Bento Info Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Light Requirements */}
            <div className="bg-slate-50 rounded-xl p-5 flex flex-col justify-between h-[200px] border border-slate-200/80 shadow-xs hover:border-blue-300 hover:bg-white transition-all">
              <span className="material-symbols-outlined text-amber-500 text-[28px]">wb_sunny</span>
              <div>
                <h4 className="font-hanken font-semibold text-[18px] text-slate-900 mb-1.5">光照需求</h4>
                <p className="font-inter text-[13px] text-slate-600 leading-relaxed">
                  多數室內植物喜好明亮的散射光，避免陽光直射造成葉片灼傷。
                </p>
              </div>
            </div>

            {/* Card 2: Moisture Control */}
            <div className="bg-slate-50 rounded-xl p-5 flex flex-col justify-between h-[200px] border border-slate-200/80 shadow-xs hover:border-blue-300 hover:bg-white transition-all">
              <span className="material-symbols-outlined text-blue-600 text-[28px]">humidity_mid</span>
              <div>
                <h4 className="font-hanken font-semibold text-[18px] text-slate-900 mb-1.5">水分控制</h4>
                <p className="font-inter text-[13px] text-slate-600 leading-relaxed">
                  遵循「表土微乾再澆水」的原則，確保花盆排水良好，防止根部腐爛。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
