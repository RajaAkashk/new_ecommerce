import React from "react";
import { ShowAllProducts } from "./Products_page";

function Wishlist_Page() {
  return (
    <div className="max-w-7xl mx-auto my-5">
      <h4 className="text-orange-400 underline font-bold text-3xl ms-4">Wishlist</h4>
      <div className="p-4 rounded-lg w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShowAllProducts />
        </div>
      </div>
    </div>
  );
}

export default Wishlist_Page;
