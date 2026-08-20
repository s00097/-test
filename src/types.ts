export type CategoryId = 'all' | 'succulent' | 'fern' | 'flowering' | 'airplant' | 'foliage';

export interface PlantSize {
  size: string;
  price: number;
  label?: string;
}

export interface PlantCare {
  watering: string;
  light: string;
  petFriendly: boolean;
  humidity?: string;
  difficulty?: '入門新手' | '中等養護' | '植物達人';
  temperature?: string;
}

export interface Product {
  id: string;
  name: string;
  scientificName?: string;
  category: CategoryId;
  categoryName: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  galleryImages?: string[];
  care: PlantCare;
  sizes: PlantSize[];
  tag?: string;
  isPopular?: boolean;
  aspectRatio?: '4/5' | '3/4' | '1/1';
  staggered?: boolean;
}

export interface CartItem {
  id: string; // unique item id based on product.id + size + pot
  product: Product;
  size: string;
  potType: string;
  quantity: number;
  unitPrice: number;
}

export type ActiveTab = 'home' | 'shop' | 'cart' | 'profile';

export interface FilterOptions {
  category: CategoryId;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name';
  petFriendlyOnly: boolean;
  lightLevel?: string;
  maxPrice?: number;
}
