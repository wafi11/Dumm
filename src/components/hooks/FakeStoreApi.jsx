import axios from "axios";
import { create } from "zustand";

const useFakeStore = create((set, get) => ({
  product: [],
  category: [],
  categorys: null,
  products: [],
  searchProducts: [],
  ProductId: [],
  setFilteredCategory: (category) => set({ categorys: category }),
  fetchProduct: async () => {
    const response = await axios(`https://dummyjson.com/products`);
    const result = await response.data;
    return set({ product: result });
  },
  fetchProductID: async (id) => {
    const response = await axios(`https://dummyjson.com/products/${id}`);
    const result = await response.data;
    return set({ ProductId: result });
  },
  fetchProducts: async () => {
    const response = await axios(
      `https://dummyjson.com/products/category/laptops`
    );
    const result = await response.data;
    return set({ category: result });
  },
  fetchProductCategory: async () => {
    const { categorys } = get();
    const response = await axios(`https://dummyjson.com/products`);
    const result = await response.data.products;
    const filteredItems = categorys
      ? result.filter((item) => item.category === categorys)
      : result;
    return set({ products: filteredItems });
  },
  fetchProductSearch: async (resource, q) => {
    const response = await axios(
      `https://dummyjson.com/products/${resource}?${q}`
    );
    const result = await response.data;
    return set({ searchProducts: result });
  },
}));

export default useFakeStore;
