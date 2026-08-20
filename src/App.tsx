/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { FilterDrawer } from './components/FilterDrawer';
import { PlantCareModal } from './components/PlantCareModal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { ProductDetailView } from './views/ProductDetailView';
import { CartView } from './views/CartView';
import { ProfileView } from './views/ProfileView';
import { CheckoutModal } from './views/CheckoutModal';
import { PRODUCTS, INITIAL_CART_ITEMS, UpsellItem } from './data/plants';
import { ActiveTab, CartItem, FilterOptions, Product } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ActiveTab | 'detail'>('shop');
  const [previousTab, setPreviousTab] = useState<ActiveTab>('shop');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]); // default Monstera

  // Cart state initialized with sample items from screenshot (Monstera + String of Pearls)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return INITIAL_CART_ITEMS.map((item, idx) => ({
      id: `cart-${item.product.id}-${item.size}-${idx}`,
      product: item.product,
      size: item.size,
      potType: item.potType,
      quantity: item.quantity,
      unitPrice: item.unitPrice
    }));
  });

  // Favorites state (pre-populate 'boston-fern' matching image 1)
  const [favorites, setFavorites] = useState<string[]>(['boston-fern']);

  // Filters state
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    searchQuery: '',
    sortBy: 'featured',
    petFriendlyOnly: false,
    lightLevel: '',
    maxPrice: undefined
  });

  // Modals & drawers state
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isCareModalOpen, setIsCareModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab, selectedProduct]);

  // Helper to trigger toast alerts
  const showToast = (title: string, message?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, message, type }]);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Navigation handlers
  const handleNavigate = (tab: ActiveTab) => {
    setPreviousTab(currentTab === 'detail' ? 'shop' : (currentTab as ActiveTab));
    setCurrentTab(tab);
  };

  const handleSelectProduct = (product: Product) => {
    if (currentTab !== 'detail') {
      setPreviousTab(currentTab as ActiveTab);
    }
    setSelectedProduct(product);
    setCurrentTab('detail');
  };

  const handleBack = () => {
    setCurrentTab(previousTab || 'shop');
  };

  // Favorite toggle
  const handleToggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      const next = isFav ? prev.filter((item) => item !== id) : [...prev, id];
      const prod = PRODUCTS.find((p) => p.id === id);
      showToast(
        isFav ? '已從心願單移除' : '已加入植物心願單 🌿',
        prod ? `${prod.name}` : undefined
      );
      return next;
    });
  };

  // Add to cart from Product Detail
  const handleAddToCart = (product: Product, size: string, price: number) => {
    const cartId = `cart-${product.id}-${size}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.size === size);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: cartId,
          product,
          size,
          potType: '標準陶盆',
          quantity: 1,
          unitPrice: price
        }
      ];
    });
    showToast('已加入購物車', `${product.name} (${size}) - NT$ ${price.toLocaleString()}`);
  };

  // Quick Add from Product Card (defaults to smallest size)
  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.sizes[0]?.size || '標準盆';
    const price = product.sizes[0]?.price || product.price;
    handleAddToCart(product, defaultSize, price);
  };

  // Add upsell accessory directly to cart
  const handleAddUpsell = (upsell: UpsellItem) => {
    const fakeProduct: Product = {
      id: upsell.id,
      name: upsell.name,
      category: 'foliage',
      categoryName: upsell.category,
      price: upsell.price,
      description: upsell.description,
      image: upsell.image,
      care: { watering: '無需澆水', light: '室內常溫', petFriendly: true },
      sizes: [{ size: '標準款', price: upsell.price }]
    };

    const cartId = `cart-${upsell.id}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === cartId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: cartId,
          product: fakeProduct,
          size: '經典款',
          potType: '精緻包裝',
          quantity: 1,
          unitPrice: upsell.price
        }
      ];
    });
    showToast('已加入選購配件', `${upsell.name} - NT$ ${upsell.price.toLocaleString()}`);
  };

  // Update quantity in cart
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove single item from cart
  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('已從購物車移除商品');
  };

  // Total cart count
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Cart summary calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const shipping = subtotal >= 2000 || subtotal === 0 ? 0 : 150;
  const total = subtotal + shipping;

  const handleOrderSuccess = (orderId: string) => {
    setCartItems([]);
    showToast('🎉 訂單已確認成立！', `訂單編號: ${orderId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Toast Feedback */}
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />

      {/* Top App Bar */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        cartCount={cartCount}
        onOpenSearch={() => {
          handleNavigate('shop');
          setTimeout(() => {
            document.getElementById('input-shop-search')?.focus();
          }, 100);
        }}
        onBack={handleBack}
        isDetailPage={currentTab === 'detail'}
        isFavorite={favorites.includes(selectedProduct.id)}
        onToggleFavorite={() => handleToggleFavorite(selectedProduct.id)}
      />

      {/* Primary View Container */}
      <div className="flex-1 w-full">
        {currentTab === 'home' && (
          <HomeView
            onNavigateToShop={(cat) => {
              if (cat) setFilters((prev) => ({ ...prev, category: cat as any }));
              handleNavigate('shop');
            }}
            onSelectProduct={handleSelectProduct}
            onOpenCareGuide={() => setIsCareModalOpen(true)}
          />
        )}

        {currentTab === 'shop' && (
          <ShopView
            filters={filters}
            onUpdateFilters={(newF) => setFilters((prev) => ({ ...prev, ...newF }))}
            onOpenFilterDrawer={() => setIsFilterDrawerOpen(true)}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProduct={handleSelectProduct}
            onQuickAdd={handleQuickAdd}
          />
        )}

        {currentTab === 'detail' && (
          <ProductDetailView
            product={selectedProduct}
            onBack={handleBack}
            onAddToCart={handleAddToCart}
            onSelectRelated={handleSelectProduct}
            isFavorite={favorites.includes(selectedProduct.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {currentTab === 'cart' && (
          <CartView
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveCartItem}
            onAddUpsell={handleAddUpsell}
            onCheckout={() => setIsCheckoutModalOpen(true)}
            onNavigateToShop={() => handleNavigate('shop')}
          />
        )}

        {currentTab === 'profile' && (
          <ProfileView
            favorites={favorites}
            onSelectProduct={handleSelectProduct}
            onNavigateToShop={() => handleNavigate('shop')}
          />
        )}
      </div>

      {/* Mobile Bottom Navigation Bar (Hidden on Detail View to make room for Sticky Add to Cart) */}
      {currentTab !== 'detail' && (
        <BottomNav
          currentTab={currentTab as ActiveTab}
          onNavigate={handleNavigate}
          cartCount={cartCount}
        />
      )}

      {/* Filter & Sort Drawer */}
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        filters={filters}
        onUpdateFilters={(newF) => setFilters((prev) => ({ ...prev, ...newF }))}
        onResetFilters={() =>
          setFilters({
            category: 'all',
            searchQuery: '',
            sortBy: 'featured',
            petFriendlyOnly: false,
            lightLevel: '',
            maxPrice: undefined
          })
        }
      />

      {/* Plant Care Wisdom Modal */}
      <PlantCareModal
        isOpen={isCareModalOpen}
        onClose={() => setIsCareModalOpen(false)}
      />

      {/* Order Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        items={cartItems}
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        onOrderSuccess={handleOrderSuccess}
      />
    </div>
  );
}
