import { createContext, useState } from "react";
import productsData from "../products";

export const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <productContext.Provider
      value={{ setSearchTerm, searchTerm, filteredProducts }}
    >
      {children}
    </productContext.Provider>
  );
};
