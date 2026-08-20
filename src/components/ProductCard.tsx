import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
  index?: number;
  staggered?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
  onSelect,
  onQuickAdd,
  staggered = false
}) => {
  const getAspectRatioClass = () => {
    switch (product.aspectRatio) {
      case '3/4':
        return 'aspect-[3/4]';
      case '1/1':
        return 'aspect-[1/1]';
      case '4/5':
      default:
        return 'aspect-[4/5]';
    }
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onSelect(product)}
      className={`group relative flex flex-col cursor-pointer transition-all duration-300 ${
        staggered ? 'sm:translate-y-6' : ''
      }`}
    >
      {/* Product Image Container */}
      <div
        className={`relative w-full ${getAspectRatioClass()} bg-slate-100 overflow-hidden mb-3.5 rounded-xl border border-slate-200/80 shadow-xs group-hover:shadow-md group-hover:border-slate-300 transition-all duration-300`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
          loading="lazy"
        />

        {/* Tag Badge if present */}
        {product.tag && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-blue-700 border border-blue-200/80 px-2.5 py-0.5 rounded-full text-[11px] font-inter font-semibold tracking-wide uppercase shadow-xs pointer-events-none">
            {product.tag}
          </div>
        )}

        {/* Favorite Heart Button */}
        <button
          id={`btn-fav-${product.id}`}
          onClick={(e) => onToggleFavorite(product.id, e)}
          aria-label={isFavorite ? '取消收藏' : '加入收藏'}
          className={`absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full transition-all duration-200 z-10 shadow-xs active:scale-90 border border-slate-200/60 ${
            isFavorite
              ? 'text-rose-600 hover:bg-white'
              : 'text-slate-500 hover:text-rose-600 hover:bg-white'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[18px] block leading-none ${
              isFavorite ? 'fill text-rose-600' : ''
            }`}
          >
            favorite
          </span>
        </button>

        {/* Desktop Quick Add Hover Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent">
          <button
            id={`btn-quick-add-${product.id}`}
            onClick={(e) => onQuickAdd(product, e)}
            className="w-full py-2.5 bg-blue-600 text-white font-inter text-[13px] font-semibold rounded-lg hover:bg-blue-700 active:scale-98 transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
            加入購物車
          </button>
        </div>
      </div>

      {/* Product Title, Category, and Price */}
      <div className="flex justify-between items-start gap-2 px-0.5">
        <div>
          <h3 className="font-hanken font-semibold text-[17px] text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="font-inter text-[12px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
            {product.categoryName}
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="font-inter font-semibold text-[17px] text-slate-900">
            NT$ {product.price.toLocaleString()}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <p className="text-[12px] text-slate-400 line-through font-normal">
              NT$ {product.originalPrice.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
