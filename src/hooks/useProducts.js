import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export const PRODUCT_KEYS = {
  all: ["products"],
  list: (params) => ["products", "list", params],
  details: (id) => ["products", "details", id],
  bestSeller: ["products", "bestSeller"],
  flashSale: ["products", "flashSale"],
  recommended: ["products", "recommended"],
};

const fallbackProducts = [
  {
    id: 1,
    title: "Rich Dad And Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 40,
    old_price: 50,
    rating: 4.2,
    review_count: 210,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s",
    discount_code: "Ne212",
    discount_percent: 25,
    publication_year: 1997,
    stock: "In Stock",
  },
  {
    id: 2,
    title: "The Design Of Books",
    author: "Debbie Berne",
    price: 35,
    old_price: 45,
    rating: 4.5,
    review_count: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s",
    discount_code: "BOOK20",
    discount_percent: 20,
    publication_year: 2020,
    stock: "In Stock",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 25,
    old_price: 35,
    rating: 4.8,
    review_count: 520,
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s",
    discount_code: "",
    discount_percent: 0,
    publication_year: 2018,
    stock: "In Stock",
  },
];

function withFallback(queryFn, fallbackData) {
  return async () => {
    try {
      const res = await queryFn();
      return res.data?.data ? res.data : { data: res.data };
    } catch {
      return { data: fallbackData };
    }
  };
}

export function useProducts(params = {}) {
  return useQuery({
    queryKey: PRODUCT_KEYS.list(params),
    queryFn: withFallback(
      () => api.get("/products", { params }).then((res) => res.data),
      fallbackProducts
    ),
  });
}

export function useProductDetails(id) {
  return useQuery({
    queryKey: PRODUCT_KEYS.details(id),
    queryFn: async () => {
      try {
        const res = await api.get(`/products/${id}`);
        return res.data;
      } catch {
        const product = fallbackProducts.find((p) => p.id === Number(id));
        return { data: product || fallbackProducts[0] };
      }
    },
    enabled: !!id,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const res = await api.get("/categories");
        return res.data;
      } catch {
        return {
          data: [
            "Business",
            "Self Help",
            "History",
            "Romance",
            "Fantasy",
            "Art",
            "Music",
            "Kids",
            "Cooking",
          ],
        };
      }
    },
  });
}

export function useBestSeller() {
  return useQuery({
    queryKey: PRODUCT_KEYS.bestSeller,
    queryFn: withFallback(
      () => api.get("/best-seller").then((res) => res.data),
      fallbackProducts
    ),
  });
}

export function useFlashSale() {
  return useQuery({
    queryKey: PRODUCT_KEYS.flashSale,
    queryFn: withFallback(
      () => api.get("/flash-sale").then((res) => res.data),
      fallbackProducts.map((p) => ({
        ...p,
        flash_price: (p.price * 0.7).toFixed(2),
        stock_count: Math.floor(Math.random() * 10) + 1,
      }))
    ),
  });
}

export function useRecommended() {
  return useQuery({
    queryKey: PRODUCT_KEYS.recommended,
    queryFn: withFallback(
      () => api.get("/recommended").then((res) => res.data),
      fallbackProducts
    ),
  });
}
