import axios from "axios";
import { useEffect, useState } from "react";
import { TProduct } from "../../../shared/types/product.type";
import { TCategory } from "../../../shared/types/category.type";
import { ProductContext } from "./context";

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [category, setCategory] = useState("products");
  const [productID, setProductID] = useState("");
  const [product, setProduct] = useState({} as TProduct);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCategories = async () => {
      let categoriesData: TCategory[] = [];
      await axios("https://fakestoreapi.com/products/categories").then(
        (res) =>
          (categoriesData = res.data.map((item: string) =>
            item.replace(/^(.)|\s+(.)/g, (c: string) => c.toUpperCase())
          ))
      );
      setCategories(categoriesData);
    };
    getCategories();
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    const getProductData = async () => {
      if (category && category.length > 0) {
        await axios
          .get(`https://fakestoreapi.com/products/category/${category}`)
          .then((res) => {
            setProductList(res.data);
            setLoading(false);
          });
      } else {
        await axios.get(`https://fakestoreapi.com/products`).then((res) => {
          setProductList(res.data);
          setCategory("");
          setLoading(false);
        });
      }
    };
    getProductData();
  }, [category]);

  useEffect(() => {
    setLoading(true);
    const getProductDetail = async () => {
      productID &&
        productID.length > 0 &&
        (await axios
          .get(`https://fakestoreapi.com/products/${productID}`)
          .then((res) => {
            setProduct(res.data);
            setLoading(false);
          }));
    };
    getProductDetail();
  }, [productID]);

  const values = {
    product,
    productList,
    productID,
    setProductID,
    categories,
    setCategory,
    loading,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
