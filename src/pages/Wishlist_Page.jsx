import React, { useContext } from "react";
import { ShowAllProducts } from "./Products_page";
import { productContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import { ShoppingCart, HeartIcon } from "lucide-react";

function Wishlist_Page() {
  const { wishlist } = useContext(productContext);

  const WishlistProducts =
    wishlist.length > 0 ? (
      wishlist.map((product) => (
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

              <p className="text-gray-600 text-sm mb-1">
                {product.description}
              </p>
              <p className="font-bold text-orange-500 text-lg mb-3">
                ₹{product.price}
              </p>
            </div>
          </Link>
          <div className="flex justify-between">
            <button
              // onClick={() => addToCart(product)}
              className="flex bg-orange-400 hover:bg-orange-500 text-white px-3 py-2 rounded-lg font-semibold transition"
            >
              <ShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button
              // onClick={() => addToWishlist(product)}
              className="bg-gray-200 flex hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-lg font-semibold transition"
            >
              <HeartIcon className="mr-2" /> remove from wishlist
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className=" font-bold text-2xl">No wishlist item present</p>
    );
  return (
    <div className="max-w-7xl mx-auto my-5">
      <h4 className="text-orange-400 underline font-bold text-3xl ms-4">
        Wishlist
      </h4>
      <div className="p-4 rounded-lg w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WishlistProducts}
        </div>
      </div>
    </div>
  );
}

export default Wishlist_Page;
