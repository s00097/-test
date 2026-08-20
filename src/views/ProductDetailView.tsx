import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/plants';
import { Product } from '../types';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, size: string, price: number) => void;
  onSelectRelated: (product: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onBack,
  onAddToCart,
  onSelectRelated,
  isFavorite,
  onToggleFavorite
}) => {
  // Gallery images with fallback
  const gallery = product.galleryImages && product.galleryImages.length > 0
    ? [product.image, ...product.galleryImages]
    : [product.image];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.size || '15cm');

  // Reset selected image and size when product changes
  useEffect(() => {
    setActiveImageIndex(0);
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].size);
    }
  }, [product]);

  // Determine current price based on selected size
  const currentSizeObj = product.sizes.find((s) => s.size === selectedSize) || product.sizes[0];
  const currentPrice = currentSizeObj ? currentSizeObj.price : product.price;

  // Filter 4 related products (excluding current product)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen pb-32 md:pb-24 animate-in fade-in duration-200">
      <main className="max-w-7xl mx-auto px-4 md:px-16 md:grid md:grid-cols-12 md:gap-12 pt-4 md:pt-8">
        {/* Left Column: Image Gallery (Bento / Carousel) */}
        <section className="md:col-span-7 mb-8 md:mb-0">
          <div className="relative h-[440px] sm:h-[530px] md:h-[620px] rounded-2xl overflow-hidden bg-slate-100 shadow-xs border border-slate-200/80">
            <img
              src={gallery[activeImageIndex] || product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Mobile Carousel Dots Indicator */}
            {gallery.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeImageIndex === index ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Desktop Thumbnails */}
          {gallery.length > 1 && (
            <div className="hidden md:grid grid-cols-4 gap-3.5 mt-4 h-24">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`rounded-xl overflow-hidden bg-slate-100 cursor-pointer transition-all duration-200 border ${
                    activeImageIndex === idx
                      ? 'ring-2 ring-blue-600 border-transparent shadow-xs opacity-100'
                      : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Right Column: Product Information & Controls */}
        <section className="md:col-span-5 flex flex-col justify-center">
          {/* Category Chip */}
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-inter text-[12px] font-semibold uppercase tracking-wider">
              {product.tag || '室內植物'}
            </span>
          </div>

          {/* Title & Price */}
          <h1 className="font-hanken font-bold text-[32px] md:text-[40px] text-slate-900 mb-1.5 tracking-tight">
            {product.name}
          </h1>
          {product.scientificName && (
            <p className="font-inter text-[14px] text-slate-400 italic mb-4">
              {product.scientificName}
            </p>
          )}

          <p className="font-inter font-bold text-[24px] md:text-[28px] text-slate-900 mb-6">
            NT$ {currentPrice.toLocaleString()}
          </p>

          <p className="font-inter text-[14px] md:text-[15px] text-slate-600 mb-8 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Plant Care Icons (Chips) */}
          <div className="grid grid-cols-3 gap-3 mb-8 border-y border-slate-200/80 py-5 bg-white rounded-xl px-2">
            {/* Watering */}
            <div className="flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-blue-600 mb-1.5 text-[24px]">
                water_drop
              </span>
              <span className="font-inter text-[12px] font-medium text-slate-800">
                {product.care.watering}
              </span>
            </div>

            {/* Light */}
            <div className="flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-amber-500 mb-1.5 text-[24px]">
                sunny
              </span>
              <span className="font-inter text-[12px] font-medium text-slate-800">
                {product.care.light}
              </span>
            </div>

            {/* Pet friendliness */}
            <div className="flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-slate-600 mb-1.5 text-[24px]">
                pets
              </span>
              <span className="font-inter text-[12px] font-medium text-slate-800">
                {product.care.petFriendly ? '寵物友善' : '對寵物有毒'}
              </span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <h3 className="font-inter text-[13px] font-semibold text-slate-700 uppercase tracking-wider mb-3">
              選擇尺寸 (盆栽直徑)
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {product.sizes.map((s) => (
                <button
                  key={s.size}
                  id={`btn-size-${s.size}`}
                  onClick={() => setSelectedSize(s.size)}
                  className={`px-5 py-2.5 rounded-lg font-inter text-[13px] transition-all ${
                    selectedSize === s.size
                      ? 'border-2 border-blue-600 text-blue-700 font-semibold bg-blue-50/60 shadow-xs'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-xs'
                  }`}
                >
                  {s.size}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Add to Cart Button */}
          <button
            id="btn-desktop-add-cart"
            onClick={() => onAddToCart(product, selectedSize, currentPrice)}
            className="hidden md:flex w-full bg-blue-600 text-white rounded-lg py-3.5 items-center justify-center font-inter text-[14px] font-semibold hover:bg-blue-700 active:scale-98 transition-all shadow-md gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            加入購物車 - NT$ {currentPrice.toLocaleString()}
          </button>
        </section>
      </main>

      {/* Related Products Section ("您可能也會喜歡") */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24 mb-16">
        <h2 className="font-hanken font-bold text-[22px] md:text-[28px] text-slate-900 mb-6">
          您可能也會喜歡
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onSelectRelated(rel)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="bg-slate-100 rounded-xl overflow-hidden aspect-[3/4] mb-3 relative border border-slate-200/80 group-hover:border-slate-300 shadow-xs group-hover:shadow-md transition-all">
                <img
                  src={rel.image}
                  alt={rel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  loading="lazy"
                />
              </div>
              <h3 className="font-inter font-semibold text-[14px] text-slate-900 group-hover:text-blue-600 transition-colors">
                {rel.name}
              </h3>
              <p className="font-inter text-[14px] font-semibold text-slate-600 mt-0.5">
                NT$ {rel.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-xl border-t border-slate-200 z-40 shadow-lg">
        <button
          id="btn-mobile-add-cart"
          onClick={() => onAddToCart(product, selectedSize, currentPrice)}
          className="w-full bg-blue-600 text-white rounded-lg py-3.5 flex items-center justify-center font-inter text-[14px] font-semibold active:scale-95 transition-transform shadow-md gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          加入購物車 - NT$ {currentPrice.toLocaleString()}
        </button>
      </div>
    </div>
  );
};
