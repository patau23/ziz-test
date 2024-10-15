import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./app/context/cart/index.ts";
import { ProductProvider } from "./app/context/product/index.ts";

createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </ProductProvider>
);
