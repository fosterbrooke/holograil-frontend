import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '../types/Cart';

interface CartState {
  items: CartItem[];
  shipping_fee: number;
  totalCartPrice: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  shipping_fee: 20,
  totalCartPrice: 0,
  totalPrice: 0,
};

const products: Product[] = [
  {
    id: 1,
    icon: '',
    name: 'Perforated Paper (4x6”)',
    description:
      'Perforated paper helps you easily align and attach the lenticular sheets for a seamless finish. Ideal for creating perfect, clean prints, this is an essential accessory in delivering high-quality photo booth prints.',
    price: 220,
  },
  {
    id: 2,
    icon: '',
    name: 'Adhesion Roller',
    description:
      'The adhesion roller is designed to eliminate air bubbles while securing lenticular sheets to the base paper. With an ergonomic handle and smooth application, this tool ensures a flawless, professional finish every time.',
    price: 300,
  },
  {
    id: 3,
    name: 'Luggage Tag Cutter',
    description:
      'Create durable, perfectly sized tags for all your travels with our precision Luggage Tag Cutter. This tool quickly and efficiently cuts your lenticular prints into luggage tags that will elevate your product line, ensuring clean, professional edges every time.',
    price: 220,
    icon: '',
  },
];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (
      state,
      action: PayloadAction<{ product_id: number; quantity: number }>
    ) => {
      const { product_id, quantity } = action.payload;

      // Find product in the product list
      const targetProduct = products.find((item) => item.id === product_id);
      if (!targetProduct) return; // Return if product not found

      // Find the item in the cart
      const targetItem = state.items.find(
        (item) => item.product_id === product_id
      );

      if (targetItem) {
        // If the product already exists in the cart, update its quantity
        targetItem.quantity += quantity;
      } else {
        const newItem = {
          product_id,
          quantity,
          price: targetProduct.price,
          icon: targetProduct.icon,
          name: targetProduct.name,
          description: targetProduct.description,
        };

        state.items.push(newItem);
      }

      // Save cart state to localStorage
      localStorage.setItem('cart_items', JSON.stringify(state.items));

      // Recalculate totals
      state.totalCartPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = state.totalCartPrice + state.shipping_fee;
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product_id !== action.payload
      );

      // Save cart state to localStorage
      localStorage.setItem('cart_items', JSON.stringify(state.items));

      state.totalCartPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = state.totalCartPrice + state.shipping_fee;
    },

    setShippingFee: (state, action: PayloadAction<number>) => {
      state.shipping_fee = action.payload;
      state.totalPrice = state.totalCartPrice + state.shipping_fee;
    },

    recalculateTotals: (state) => {
      state.totalCartPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = state.totalCartPrice + state.shipping_fee;
    },

    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;

      state.totalCartPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = state.totalCartPrice + state.shipping_fee;
    },
  },
});

export const {
  addCartItem,
  setShippingFee,
  recalculateTotals,
  removeItem,
  setCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
