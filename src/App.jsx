import Navbar from "./componenets/Navbar";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Products_page from "./pages/Products_page";
import Product_Detail_Page from "./pages/Product_Detail_Page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products_page />} />
        <Route path="/product/:id" element={<Product_Detail_Page />} />
      </Routes>
    </>
  );
}

export default App;
