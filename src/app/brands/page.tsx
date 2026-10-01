import { getBrandsCategory } from "@/src/api/services/brandsApi";
import Image from "next/image";
import Link from "next/link";
import BrandsHeader from "./BrandsHeader";

export default async function ShopBrands() {
  const data = await getBrandsCategory();

  return (
    <>
      <BrandsHeader />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((brand) => (
          <Link
            key={brand._id}
            href={`/brandDetails/${brand._id}`}
            className="p-4 max-w-md group cursor-pointer block"
          >
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="overflow-hidden h-48 w-full">
                <Image
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={brand.image}
                  width={200}
                  height={200}
                  alt={brand.name}
                />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:text-purple-500">
                  {brand.slug}
                </h1>
                <div className="flex items-center flex-wrap justify-center h-8">
                  <span className="text-purple-500 inline-flex justify-center items-center md:mb-2 lg:mb-0 opacity-0 scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                    View Product
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
