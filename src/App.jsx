import Navbar from "./componenets/Navbar";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Products_page from "./pages/Products_page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products_page />} />
      </Routes>
    </>
  );
}

export default App;
