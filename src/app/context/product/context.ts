import { createContext, useContext } from "react";
import { TCategory } from "../../../shared/types/category.type";
import { TProduct } from "../../../shared/types/product.type";

export const ProductContext = createContext<{
  categories: TCategory[];
  setCategory: (value: TCategory) => void;
  product: TProduct;
  productList: TProduct[];
  productID: number | string;
  setProductID: (value: string) => void;
  loading: boolean;
}>({
  categories: [],
  setCategory: () => {},
  loading: false,
  product: {} as TProduct,
  productID: "",
  productList: [],
  setProductID: () => {},
});

export const useProduct = () => useContext(ProductContext);
