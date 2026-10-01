import React from "react";
import { getAllProducts } from "../../../api/services/productApi";
import ProductCard from "./../productCard/productCard";

export default async function FeaturedProducts() {
  const data = await getAllProducts();

  return (
    <>
      <h2 className="my-2 border-l-4 border-l-green-500 pl-3 text-2xl font-bold text-green-600">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </>
  );
}
