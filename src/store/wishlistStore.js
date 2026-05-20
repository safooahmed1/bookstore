import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [],

      toggleItem: (product) => {
        set((state) => {
          const exists = state.items.find((i) => i.id === product.id);
          if (exists) {
            return { items: state.items.filter((i) => i.id !== product.id) };
          }
          return { items: [...state.items, product] };
        });
      },

      isInWishlist: (productId) => {
        return get().items.some((i) => i.id === productId);
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== productId),
        }));
      },

      clearWishlist: () => set({ items: [] }),
    }),
    { name: "wishlist-items" }
  )
);
