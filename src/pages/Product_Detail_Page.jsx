import React from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";
import productsData from "../products";

function Product_Detail_Page() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Product not found 😔
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-12 px-4">
      <div className="max-w-5xl mx-auto w-full border border-gray-100 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full p-6"
            />
          </div>

          {/* Right: Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <Link
                to="/products"
                className="inline-flex items-center text-gray-500 hover:text-orange-500 transition mb-4"
              >
                <ArrowLeft className="w-5 h-5 mr-1" /> Back to Products
              </Link>

              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} / 5
                </span>
              </div>

              {/* Price */}
              <p className="text-3xl font-semibold text-orange-600 mb-4">
                ₹{product.price}
              </p>

              {/* Sizes */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">
                  Available Sizes
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg px-3 py-1 hover:bg-orange-500 hover:text-white transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <p className="text-gray-700 mb-6">
                <span className="font-semibold">Color:</span> {product.color}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
                Add to Cart
              </button>
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Detail_Page;
