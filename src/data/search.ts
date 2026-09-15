import type { ProductSearch } from "@/schemas/searchSchema";
import { create } from "zustand";

type searchStore = {
  query: ProductSearch;
  setSearch: (s: string) => void;
  setCategory: (s: string) => void;
  setSort: (s: "asc" | "desc") => void;
};

export const useSearchStore = create<searchStore>((set) => ({
  query: { search: "", category: "none", sort: "asc" },
  setSearch: (search) =>
    set((state) => ({
      query: {
        ...state.query,
        search,
      },
    })),
  setCategory: (category) =>
    set((state) => ({
      query: {
        ...state.query,
        category,
      },
    })),
  setSort: (sort) =>
    set((state) => ({
      query: {
        ...state.query,
        sort,
      },
    })),
}));
