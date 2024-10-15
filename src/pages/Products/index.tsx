import React, { useEffect } from "react";
import { useProduct } from "../../app/context/product";
import styles from "./styles.module.css";
import Spinner from "../../shared/ui/Spinner";
import { useParams } from "react-router-dom";
import Card from "../../shared/ui/Card";
import { useCart } from "../../app/context/cart";

const Products = () => {
  const { addToCart, items } = useCart();

  const { productList, loading, setProductID, setCategory } = useProduct();

  const { category_id } = useParams();

  useEffect(() => {
    if (category_id) setCategory(category_id);
  }, [category_id]);

  return (
    <div className={styles.cardGroup}>
      {!loading ? (
        productList?.map((item, index) => {
          const findCartItem = items.find(
            (cart_item) => cart_item.id === item.id
          );
          return (
            <Card
              key={`product-${index}`}
              item={item}
              setProductID={setProductID}
              findCartItem={findCartItem}
              addToCart={addToCart}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Products;
