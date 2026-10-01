import { getAllProducts } from "@/src/api/services/productApi";
import Link from "next/link";
import { PackageOpen } from "lucide-react";
import React from "react";
import ProductCard from "../_component/productCard/productCard";
import ShopCategoryHeader from "./ShopCategoryHeader";

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const data = await getAllProducts();
  const { category } = await searchParams;
  const selectedCategory = Array.isArray(category) ? category[0] : category;
  const normalizeCategory = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const filteredData = selectedCategory
    ? data.filter((product) =>
        normalizeCategory(product.category.name).includes(
          normalizeCategory(selectedCategory),
        ),
      )
    : data;

  return (
    <>
      <ShopCategoryHeader category={selectedCategory} />
      <span className="my-2 border-l-4 border-l-green-500 pl-3 text-2xl font-bold text-green-600">
        Showing {filteredData.length} Products
      </span>

      {filteredData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      ) : (
        <section className="flex min-h-80 flex-col items-center justify-center gap-3 text-center">
          <div className="flex size-20 items-center justify-center rounded-full bg-gray-100 text-gray-400">
            <PackageOpen aria-hidden="true" className="size-8" />
          </div>
          <h2 className="text-xl font-bold">No Products Found</h2>
          <p className="text-gray-500">
            No products match your current filters.
          </p>
          <Link
            href="/shop"
            className="mt-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            View All Products
          </Link>
        </section>
      )}
    </>
  );
}
