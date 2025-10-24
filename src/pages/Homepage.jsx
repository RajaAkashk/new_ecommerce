import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-orange-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Discover the Best Deals with{" "}
            <span className="text-white">ShopEase</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Your one-stop shop for quality products and unbeatable prices.
          </p>
          <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-orange-50 flex items-center gap-2 mx-auto transition">
            <Link to="/products" className="flex items-center">
              Shop Now <ArrowRight size={19} className="ms-1" />
            </Link>
          </button>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Men",
              img: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
            },
            {
              name: "Women",
              img: "https://cdn.pixabay.com/photo/2023/09/02/11/43/woman-8228723_640.jpg",
            },
            {
              name: "Kids",
              img: "https://img.freepik.com/free-photo/full-length-portrait-cute-little-girl-hat_171337-13768.jpg?semt=ais_hybrid&w=740&q=80",
            },
            {
              name: "Trendy clothing",
              img: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80",
            },
          ].map((category, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Why Choose ShopEase?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At ShopEase, we believe in making shopping easier, faster, and more
            enjoyable. We offer a wide range of high-quality products with
            excellent service and quick delivery right to your doorstep.
          </p>
        </div>
      </section>

      {/* 🦶 Footer */}
      <footer className="bg-orange-500 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
