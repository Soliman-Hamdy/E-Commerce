import { getShopCategories } from "@/src/api/services/categoriesApi";
import React from "react";
import Image from "next/image";

export default async function ShopeCategory() {
  const data = await getShopCategories();
  console.log("datacatg", data);

  return (
    <div className="my-5">
      <h2 className="text-2xl text-green-600 border-l-4 border-l-black font-bold">
        Shop Category
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {data.map((category) => {
          return (
            <div key={category._id} className="category ">
              <div>
                <Image
                  className="w-25 h-25 rounded-full"
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                />
                <h4>{category.name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
