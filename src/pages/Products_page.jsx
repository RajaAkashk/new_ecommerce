import React, { useContext, useState } from "react";
import { ChevronUp, ChevronDown, ShoppingCart, HeartIcon } from "lucide-react";
import productsData from "../products";
import { Link } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

export const ShowAllProducts = ({ filteredProducts }) => {
  const { addToCart, addToWishlist } = useContext(productContext);

  const productList =
    filteredProducts && filteredProducts.length > 0
      ? filteredProducts
      : productsData;

  return productList.map((product) => (
    <div
      key={product.id}
      className="bg-white border-red-800 rounded-xl shadow p-4 flex flex-col justify-between hover:shadow-xl transition"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-lg mb-3"
        />
        <div className="flex flex-col flex-grow">
          <h2 className="text-lg font-semibold mb-1">
            {product.name} ({product.category})
          </h2>

          <p className="text-gray-600 text-sm mb-1">{product.description}</p>
          <p className="font-bold text-orange-500 text-lg mb-3">
            ₹{product.price}
          </p>
        </div>
      </Link>
      <div className="flex justify-between">
        <button
          onClick={() => addToCart(product)}
          className="flex bg-orange-400 hover:bg-orange-500 text-white px-3 py-2 rounded-lg font-semibold transition"
        >
          <ShoppingCart className="mr-2" /> Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="bg-gray-200 flex hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-lg font-semibold transition"
        >
          <HeartIcon className="mr-2" /> Add to wishlist
        </button>
      </div>
    </div>
  ));
};

function Products_page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    searchTerm,
    filteredProducts,
    appliedFilters,
    setAppliedFilters,
    cart,
    wishlist,
  } = useContext(productContext);

  console.log("cart", cart);
  console.log("wishlist", wishlist);

  // Temporary filters before applying
  const [filters, setFilters] = useState(appliedFilters);

  // Handle category checkboxes
  const handleCategory = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((item) => item !== value),
    }));
  };

  // Apply button handler
  const handleApply = (e) => {
    e.preventDefault();
    setAppliedFilters(filters);
  };

  // Reset button handler
  const handleReset = () => {
    const resetFilters = {
      categories: [],
      size: "",
      priceRange: 2500,
      sortValue: "",
    };
    setFilters(resetFilters);
    setAppliedFilters(resetFilters);
  };

  console.log("Search:", searchTerm);
  console.log("appliedFilters:", appliedFilters);

  return (
    <div className="md:p-4 p-1">
      <div className="md:flex md:gap-4">
        {/* Mobile menu button */}
        <div className="md:hidden mb-2 ">
          <button
            className="bg-orange-400 flex justify-center w-full px-3 py-1 rounded text-white font-semibold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close Menu" : "Open Menu"}
            {isMenuOpen ? (
              <ChevronUp className="ml-1 font-bold" />
            ) : (
              <ChevronDown className="ml-1 font-bold" />
            )}
          </button>
        </div>

        {/* Filters */}
        <div
          className={`bg-orange-400 p-4 rounded-lg 
          md:block md:w-3/12  
          ${isMenuOpen ? "block w-full mb-4" : "hidden w-full h-fit"} 
          `}
        >
          <h2 className="text-white text-3xl font-bold">Filters</h2>

          <form id="filterForm" onSubmit={handleApply}>
            <div className="space-y-6">
              {/* Category Filter */}
              <div className="mt-3">
                <h3 className="font-semibold text-white mb-2 text-xl">
                  Category
                </h3>
                <div className="flex flex-col space-y-1 text-white">
                  {["Men", "Women", "Kids"].map((cat) => (
                    <label key={cat}>
                      <input
                        type="checkbox"
                        value={cat}
                        onChange={handleCategory}
                        checked={filters.categories.includes(cat)}
                      />{" "}
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="font-semibold text-white mb-2 text-xl">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {["XS", "S", "M", "L", "XL"].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          size: prev.size === opt ? "" : opt,
                        }))
                      }
                      className={`px-3 py-1 rounded-full text-sm font-semibold transition
                        ${
                          filters.size === opt
                            ? "bg-white text-orange-500"
                            : "bg-orange-200 text-white hover:bg-orange-300"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-white mb-2 text-xl">
                  Price Range
                </h3>
                <input
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      priceRange: Number(e.target.value),
                    }))
                  }
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={filters.priceRange}
                  className="w-full accent-white bg-white"
                />
                <div className="flex justify-between text-sm font-semibold text-white">
                  <span>₹0</span>
                  <span>₹{filters.priceRange}</span>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="font-semibold text-white mb-2 text-xl">
                  Sort By Price
                </h3>
                <div className="flex flex-col space-y-1 text-white">
                  <label>
                    <input
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          sortValue: e.target.value,
                        }))
                      }
                      type="radio"
                      name="price"
                      value="low to high"
                      checked={filters.sortValue === "low to high"}
                    />{" "}
                    Low to High
                  </label>
                  <label>
                    <input
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          sortValue: e.target.value,
                        }))
                      }
                      type="radio"
                      name="price"
                      value="high to low"
                      checked={filters.sortValue === "high to low"}
                    />{" "}
                    High to Low
                  </label>
                </div>
              </div>

              {/* Apply / Reset */}
              <div className="flex gap-2 mt-4">
                <button
                  type="submit"
                  className="bg-transparent border border-white text-white font-semibold px-4 py-2 rounded hover:bg-white hover:text-orange-500 w-1/2"
                >
                  Apply
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-transparent border border-white text-white font-semibold px-4 py-2 rounded hover:bg-white hover:text-orange-500 w-1/2"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Products Section */}
        <div className="p-4 rounded-lg w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ShowAllProducts filteredProducts={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products_page;
