import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/plants';
import { ProductCard } from '../components/ProductCard';
import { CategoryId, FilterOptions, Product } from '../types';

interface ShopViewProps {
  filters: FilterOptions;
  onUpdateFilters: (newFilters: Partial<FilterOptions>) => void;
  onOpenFilterDrawer: () => void;
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  filters,
  onUpdateFilters,
  onOpenFilterDrawer,
  favorites,
  onToggleFavorite,
  onSelectProduct,
  onQuickAdd
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category check
      if (filters.category !== 'all' && item.category !== filters.category) {
        return false;
      }

      // Search query check
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesSci = item.scientificName?.toLowerCase().includes(q);
        const matchesCat = item.categoryName.toLowerCase().includes(q);
        const matchesTag = item.tag?.toLowerCase().includes(q);
        if (!matchesName && !matchesSci && !matchesCat && !matchesTag) {
          return false;
        }
      }

      // Pet friendly check
      if (filters.petFriendlyOnly && !item.care.petFriendly) {
        return false;
      }

      // Light filter
      if (filters.lightLevel && !item.care.light.includes(filters.lightLevel)) {
        return false;
      }

      // Max price filter
      if (filters.maxPrice && item.price > filters.maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'name') return a.name.localeCompare(b.name, 'zh-Hant');
      return 0; // default featured order
    });
  }, [filters]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-16 pt-6 md:pt-8 pb-24 md:pb-20">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Search Input Box */}
        <div className="relative w-full md:w-96">
          <input
            id="input-shop-search"
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onUpdateFilters({ searchQuery: e.target.value })}
            placeholder="尋找植物..."
            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 px-4 py-2.5 pl-10 font-inter text-[14px] text-slate-900 placeholder:text-slate-400 rounded-lg transition-all shadow-xs"
          />
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px] pointer-events-none">
            search
          </span>
          {filters.searchQuery && (
            <button
              onClick={() => onUpdateFilters({ searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
            >
              <span className="material-symbols-outlined text-[16px]">cancel</span>
            </button>
          )}
        </div>

        {/* Filter & Sort Action Buttons */}
        <div className="flex items-center gap-2.5 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
          <button
            id="btn-open-filter"
            onClick={onOpenFilterDrawer}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-colors whitespace-nowrap active:scale-98 shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px] text-slate-600">tune</span>
            <span className="font-inter text-[13px] font-medium text-slate-800">篩選</span>
            {(filters.petFriendlyOnly || filters.lightLevel || filters.maxPrice) && (
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            )}
          </button>

          <button
            id="btn-open-sort"
            onClick={onOpenFilterDrawer}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-colors whitespace-nowrap active:scale-98 shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px] text-slate-600">sort</span>
            <span className="font-inter text-[13px] font-medium text-slate-800">排序</span>
          </button>
        </div>
      </div>

      {/* Category Pills (Horizontal Scroll) */}
      <div className="mb-10 md:mb-12">
        <h2 className="font-hanken font-bold text-[22px] md:text-[28px] text-slate-900 mb-4">
          植物分類
        </h2>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 snap-x">
          {CATEGORIES.map((cat) => {
            const isActive = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                id={`btn-cat-${cat.id}`}
                onClick={() => onUpdateFilters({ category: cat.id as CategoryId })}
                className={`snap-start shrink-0 px-4 md:px-5 py-2 rounded-lg font-inter text-[13px] font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-xs'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {displayedProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="material-symbols-outlined text-[48px] text-slate-300 mb-3">
            psychiatry
          </span>
          <h3 className="font-hanken font-semibold text-[20px] text-slate-900 mb-1">
            找不到符合條件的植物
          </h3>
          <p className="font-inter text-[14px] text-slate-500 mb-6">
            請嘗試調整搜尋關鍵字或放寬篩選條件。
          </p>
          <button
            onClick={() =>
              onUpdateFilters({
                category: 'all',
                searchQuery: '',
                petFriendlyOnly: false,
                lightLevel: '',
                maxPrice: undefined
              })
            }
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-inter text-[13px] font-semibold transition-colors shadow-xs"
          >
            重置所有篩選
          </button>
        </div>
      ) : (
        /* Product Grid (Masonry-lite with staggered offsets) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {displayedProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectProduct}
              onQuickAdd={onQuickAdd}
              staggered={product.staggered || idx % 2 === 1}
            />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {displayedProducts.length < filteredProducts.length && (
        <div className="mt-16 md:mt-20 flex justify-center">
          <button
            id="btn-load-more"
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-8 py-2.5 border border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:text-slate-900 rounded-lg font-inter text-[13px] font-semibold transition-all shadow-xs active:scale-95"
          >
            載入更多植物
          </button>
        </div>
      )}
    </main>
  );
};
