import { getShopCategories } from "@/src/api/services/categoriesApi";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function ShopeCategory() {
  const data = await getShopCategories();
  console.log("datacatg", data);

  return (
    <div className="my-5">
      <h2 className="border-l-4 border-l-green-500 pl-3 text-2xl font-bold text-green-600">
        Shop Category
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {data.map((category) => {
          return (
            <Link
              key={category._id}
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              className="category block text-center transition-colors hover:text-green-600"
            >
              <div className="flex flex-col items-center gap-2">
                <Image
                  className="w-25 h-25 rounded-full"
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                />
                <h4>{category.name}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
