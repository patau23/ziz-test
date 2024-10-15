import { createContext, useContext } from "react";
import { TProduct } from "../../../shared/types/product.type";

export const defaultCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")!)
  : [];

export const CartContext = createContext(defaultCart);

export const useCart = (): {
  items: TProduct[];
  setItems: (items: TProduct[]) => void;
  removeFromCart: (item_id: any) => void;
  addToCart: (data: TProduct, findCartItem?: TProduct) => void;
} => useContext(CartContext);
