import Navbar from "./componenets/Navbar";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Products_page from "./pages/Products_page";
import Product_Detail_Page from "./pages/Product_Detail_Page";
import Wishlist_Page from "./pages/Wishlist_Page";
import Cart_Page from "./pages/Cart_page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products_page />} />
        <Route path="/product/:id" element={<Product_Detail_Page />} />
        <Route path="/wishlist" element={<Wishlist_Page />} />
        <Route path="/cart" element={<Cart_Page />} />
      </Routes>
    </>
  );
}

export default App;
