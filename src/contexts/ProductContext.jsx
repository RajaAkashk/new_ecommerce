import { createContext, useEffect, useState } from "react";
import productsData from "../products";

export const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    categories: [],
    size: "",
    priceRange: 2500,
    sortValue: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    const normaliseSearch = searchTerm.toLowerCase();

    const result = productsData
      .filter((product) =>
        normaliseSearch
          ? product.name.toLowerCase().includes(normaliseSearch)
          : true
      )
      .filter((product) =>
        appliedFilters.categories.length > 0
          ? appliedFilters.categories.includes(product.category)
          : true
      )
      .filter((product) =>
        appliedFilters.size ? product.sizes.includes(appliedFilters.size) : true
      )
      .filter((product) =>
        appliedFilters.priceRange
          ? product.price <= appliedFilters.priceRange
          : true
      )
      .sort((a, b) => {
        if (appliedFilters.sortValue === "low to high")
          return a.price - b.price;
        if (appliedFilters.sortValue === "high to low")
          return b.price - a.price;
        return 0;
      });

    setFilteredProducts(result);

    console.log("Applied Filters", appliedFilters);
    console.log("Filtered Products Count", filteredProducts.length);
  }, [appliedFilters, searchTerm]);

  return (
    <productContext.Provider
      value={{
        setSearchTerm,
        searchTerm,
        appliedFilters,
        setAppliedFilters,
        filteredProducts,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
