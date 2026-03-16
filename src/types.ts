export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'UI Kit' | 'Course' | 'E-Book' | 'Scripts' | '3D Asset' | 'Texture Pack' | 'Photography';
  image: string;
  rating: number;
  featured?: boolean;
  newRelease?: boolean;
  bestSeller?: boolean;
}

export type View = 'home' | 'shop' | 'profile' | 'detail';
