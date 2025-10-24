import { ShoppingCart, HeartIcon, Menu, X, Search } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

function Navbar() {
  const location = useLocation();
  const [showSeach, setShowSearch] = useState(false);
  const { searchTerm, setSearchTerm, cart, wishlist } =
    useContext(productContext);

  useEffect(() => {
    if (location.pathname.startsWith("/products")) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-orange-400">
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl  mx-auto">
        {/* site name  */}
        <div>
          <Link to="/" className="text-white font-bold text-2xl">
            ShopEase
          </Link>
        </div>
        {/* search bar and links  */}
        {showSeach ? (
          <div className="flex-grow max-w-lg w-full mx-2">
            <div className="flex items-center bg-white rounded-lg overflow-hidden px-3 py-2">
              <Search className="text-gray-300 me-1 size-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full text-sm md:text-base outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <button onClick={() => setSearchTerm("")}>
                <X className="hover:text-orange-400 text-gray-300" />
              </button>
            </div>
          </div>
        ) : (
          <div className="hidden md:block space-x-5 text-white text-lg font-semibold">
            <Link to="/" className="hover:underline hover:decoration-2">
              Home
            </Link>
            <Link to="/products" className="hover:underline hover:decoration-2">
              Products
            </Link>
            <Link to="/" className="hover:underline hover:decoration-2">
              About
            </Link>
            <Link to="/" className="hover:underline hover:decoration-2">
              Contact
            </Link>
          </div>
        )}

        {/* buttons */}
        <div className="flex space-x-4">
          <div className="flex space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-white" />
              <span className="absolute -top-4 left-5 text-white font-bold">
                {cart.length}
              </span>
            </Link>
            <Link to="/wishlist" className="relative">
              <HeartIcon className="text-white" />
              <span className="absolute -top-4 left-5 text-white font-bold">
                {wishlist.length}
              </span>
            </Link>
          </div>

          {/* humberger button  */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
              }`}
            >
              {isOpen ? (
                <X size={24} className="text-white font-bold" />
              ) : (
                <Menu size={24} className="text-white font-bold" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* for mobile view  */}
      {isOpen && (
        <div
          className={`md:hidden bg-orange-400 overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-4 space-y-4 text-xl text-white font-semibold pb-4">
            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setIsOpen(!isOpen)}>
              Products
            </Link>
            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
              About
            </Link>
            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
              Contacts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
