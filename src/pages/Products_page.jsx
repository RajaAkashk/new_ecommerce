import React, { useState } from "react";
import { ChevronUp, ChevronDown, ShoppingCart, HeartIcon } from "lucide-react";
import productsData from "../products";
import { Link } from "react-router-dom";

function Products_page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ShowAllProducts = () => {
    return productsData.map((product) => (
      <Link
        to={`/product/${product.id}`}
        key={product.id}
        className="bg-white border-red-800 rounded-xl shadow p-4 flex flex-col justify-between hover:shadow-xl transition"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-lg mb-3"
        />
        <div className="flex flex-col flex-grow">
          <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-1">{product.description}</p>

          <p className="font-bold text-orange-500 text-lg mb-3">
            ₹{product.price}
          </p>
        </div>
        <div className="flex justify-between">
          <button className="flex bg-orange-400 hover:bg-orange-500 text-white px-3 py-2 rounded-lg font-semibold transition">
            <ShoppingCart className="mr-2" /> Add to Cart
          </button>
          <button className="bg-gray-200 flex hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-lg font-semibold transition">
            <HeartIcon className="mr-2" /> Add to wishlist
          </button>
        </div>
      </Link>
    ));
  };

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

        {/*filters / menu */}
        <div
          className={`bg-orange-400 p-4 rounded-lg 
          md:block md:w-3/12  
          ${isMenuOpen ? "block w-full mb-4" : "hidden w-full h-fit"} 
          `}
        >
          <h2 className="text-white text-3xl font-bold">Filters</h2>
          <div className="space-y-6">
            {/* category filter  */}
            <div className="mt-3">
              <h3 className="font-semibold text-white mb-2 text-xl">
                Category
              </h3>
              <div className="flex flex-col space-y-1 text-white">
                <label>
                  <input type="checkbox" name="clothing" value="men" />
                  Men
                </label>
                <label>
                  <input type="checkbox" name="clothing" value="women" />
                  Women
                </label>
                <label>
                  <input type="checkbox" name="clothing" value="kids" />
                  Kids
                </label>
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="font-semibold text-white mb-2 text-xl">Size</h3>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm hover:bg-orange-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="font-semibold text-white mb-2 text-xl">
                Price Range
              </h3>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                className="w-full accent-white bg-white"
              />
              <div className="flex justify-between text-sm font-semibold text-white">
                <span>₹0</span>
                <span>₹5000</span>
              </div>
            </div>

            {/* Sort By */}
            <div>
              <h3 className="font-semibold text-white mb-2 text-xl">
                Sort By Price
              </h3>
              <div className="flex flex-col space-y-1 text-white">
                <label>
                  <input type="radio" name="price" value="low to high" />
                  Low to High
                </label>
                <label>
                  <input type="radio" name="price" value="high to low" />
                  High to Low
                </label>
              </div>
            </div>

            {/* Apply / Reset */}
            <div className="flex gap-2 mt-4">
              <button className="bg-transparent border border-white text-white font-semibold px-4 py-2 rounded hover:bg-white hover:text-orange-500 w-1/2">
                Apply
              </button>
              <button className="bg-transparent border border-white text-white font-semibold px-4 py-2 rounded hover:bg-white hover:text-orange-500 w-1/2">
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Products section */}
        <div className="p-4 rounded-lg w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ShowAllProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products_page;
