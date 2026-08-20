import React from 'react';
import { CATEGORIES } from '../data/plants';
import { CategoryId, FilterOptions } from '../types';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onUpdateFilters: (newFilters: Partial<FilterOptions>) => void;
  onResetFilters: () => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onUpdateFilters,
  onResetFilters
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 border-l border-slate-200">
          {/* Header */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-[24px]">tune</span>
              <h2 className="font-hanken font-bold text-[18px] text-slate-900">篩選與排序</h2>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 p-2 -mr-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 overflow-y-auto flex-1">
            {/* Sorting */}
            <div>
              <label className="block font-inter text-[13px] font-semibold text-slate-700 uppercase tracking-wider mb-3">
                排序方式
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'featured', label: '精選推薦' },
                  { id: 'price-asc', label: '價格：低到高' },
                  { id: 'price-desc', label: '價格：高到低' },
                  { id: 'name', label: '植物名稱' }
                ].map((sort) => (
                  <button
                    key={sort.id}
                    onClick={() =>
                      onUpdateFilters({
                        sortBy: sort.id as FilterOptions['sortBy']
                      })
                    }
                    className={`py-2.5 px-3 rounded-lg text-[13px] font-inter text-left transition-all border ${
                      filters.sortBy === sort.id
                        ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {sort.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block font-inter text-[13px] font-semibold text-slate-700 uppercase tracking-wider mb-3">
                植物分類
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      onUpdateFilters({
                        category: cat.id as CategoryId
                      })
                    }
                    className={`px-3.5 py-1.5 rounded-lg text-[13px] font-inter transition-all border ${
                      filters.category === cat.id
                        ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Pet Friendly Toggle */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 text-[22px]">pets</span>
                  <div>
                    <h4 className="font-inter font-semibold text-[14px] text-slate-900">
                      寵物友善植物
                    </h4>
                    <p className="text-[12px] text-slate-500">僅顯示對毛孩無毒安全的品種</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onUpdateFilters({ petFriendlyOnly: !filters.petFriendlyOnly })
                  }
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                    filters.petFriendlyOnly ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      filters.petFriendlyOnly ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Light requirements */}
            <div>
              <label className="block font-inter text-[13px] font-semibold text-slate-700 uppercase tracking-wider mb-3">
                光照需求
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '全部', value: '' },
                  { label: '明亮散光', value: '明亮' },
                  { label: '耐陰環境', value: '耐陰' }
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => onUpdateFilters({ lightLevel: item.value })}
                    className={`py-2 px-2 text-center rounded-lg text-[12px] font-inter border transition-all ${
                      (filters.lightLevel || '') === item.value
                        ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-inter text-[13px] font-semibold text-slate-700 uppercase tracking-wider">
                  預算上限
                </label>
                <span className="font-inter text-[14px] text-blue-600 font-bold">
                  {filters.maxPrice ? `NT$ ${filters.maxPrice}` : '不限'}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="2500"
                step="100"
                value={filters.maxPrice || 2500}
                onChange={(e) =>
                  onUpdateFilters({ maxPrice: Number(e.target.value) })
                }
                className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-inter font-medium">
                <span>NT$ 300</span>
                <span>NT$ 1,400</span>
                <span>NT$ 2,500+</span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-slate-200 bg-white flex gap-3">
            <button
              onClick={onResetFilters}
              className="flex-1 py-2.5 px-4 border border-slate-200 text-slate-700 rounded-lg font-inter text-[14px] font-semibold hover:bg-slate-50 transition-colors"
            >
              重置
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2.5 px-4 bg-blue-600 text-white rounded-lg font-inter text-[14px] font-semibold hover:bg-blue-700 transition-colors shadow-xs"
            >
              套用篩選
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
