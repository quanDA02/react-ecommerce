import { create } from "zustand";
import type { Product } from "@/schemas/productSchema";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  itemCount: () => number;
  totalPrice: () => number;
  addItem: (product: Product, buyQuantity: number) => void;
  decreaseItem: (product: Product, quantity: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  itemCount: () => get().items.length,
  totalPrice: () =>
    get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    ),
  addItem: (product, buyQuantity) =>
    set((state) => {
      const exist = state.items.find((item) => item.product.id === product.id);
      if (exist) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + buyQuantity }
              : item,
          ),
        };
      }
      return {
        items: [...state.items, { product, quantity: buyQuantity }],
      };
    }),
  decreaseItem: (product, quantity) =>
    set((state) => {
      const exist = state.items.find((item) => item.product.id === product.id);
      if (exist) {
        if (exist)
          return {
            items: state.items.map((item) =>
              item.product.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity > 1 ? item.quantity - quantity : 1,
                  }
                : item,
            ),
          };
      }
      return {
        items: [...state.items, { product, quantity: quantity }],
      };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),
  clearCart: () => set({ items: [] }),
}));
