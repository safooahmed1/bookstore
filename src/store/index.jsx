import { useParams } from "react-router-dom";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const getInitialStorage = () => {
  const fromLocal = localStorage.getItem("auth-token");
  const fromSession = sessionStorage.getItem("auth-token");
  return fromLocal ? localStorage : sessionStorage;
};

export const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      isAuthenticated: false,
      rememberMe: false,

      login: (token, rememberMe = false) => {
        localStorage.removeItem("auth-token");
        sessionStorage.removeItem("auth-token");
        set({ token, isAuthenticated: true, rememberMe });
      },

      logout: () => {
        localStorage.removeItem("auth-token");
        sessionStorage.removeItem("auth-token");
        set({ token: null, isAuthenticated: false, rememberMe: false });
      },
    }),
    {
      name: "auth-token",
      storage: createJSONStorage(getInitialStorage),
    }
  )
);

export const useNavProductPage = () => {
  const { productId } = useParams();
  const nav = [
    { link: "ProductDetails", path: `/product/${productId}/details` },
    { link: "CustomerReviews", path: `/product/${productId}/review` },
    { link: "Recomminded", path: `/product/${productId}/recommided` },
  ];
  return { nav };
};
