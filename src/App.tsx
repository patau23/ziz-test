import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/ui/Navbar";
import Container from "./shared/ui/Container";
import Page404 from "./pages/404";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:category_id" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
