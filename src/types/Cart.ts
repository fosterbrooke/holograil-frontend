export interface Product {
  id: number;
  icon: string;
  name: string;
  description: string;
  price: number;
}

export interface CartItem {
  product_id: number;
  price: number;
  quantity: number;
  icon: string;
  name: string;
  description: string;
}
