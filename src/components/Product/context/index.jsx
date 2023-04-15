import { createContext } from "react";

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
  isEdit: false,
  setIsEdit: () => {},
  product: null,
  setProduct: () => {},
});
