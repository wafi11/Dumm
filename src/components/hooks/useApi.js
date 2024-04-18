import { create } from "zustand";
import { ApiProduct, ApiProductList } from "../../api/api";


const useStoreApi = create((set) => ({
    product : [],
    fetchProduct : async () => {
        const response = await ApiProduct()
        return set({ product : response}) 
    }
}))

export default useStoreApi