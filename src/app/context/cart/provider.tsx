import { useEffect, useState } from "react";
import { CartContext, defaultCart } from "./context";
import { TProduct } from "../../../shared/types/product.type";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<TProduct[]>(defaultCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (data: TProduct, findCartItem?: TProduct) => {
    if (!findCartItem) {
      return setItems((items) => [data, ...items]);
    }

    const filtered = items.filter((item) => item.id !== findCartItem.id);
    setItems(filtered);
  };

  const removeFromCart = (item_id: number | string) => {
    const filtered = items.filter((item) => item.id !== item_id);
    setItems(filtered);
  };

  const values = {
    items,
    setItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
