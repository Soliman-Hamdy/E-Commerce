import {
  getBrandDetails,
  getProductsByBrand,
} from "@/src/api/services/brandsApi";
import Image from "next/image";
import Link from "next/link";

export default async function BrandDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [brand, products] = await Promise.all([
    getBrandDetails(id),
    getProductsByBrand(id),
  ]);

  return (
    <div className="my-5">
      <Link
        href="/brands"
        className="inline-block mb-4 text-sm text-green-600 hover:underline"
      >
        ← Back to brands
      </Link>

      {/* Brand header */}
      <div className="flex flex-col items-center mb-8">
        <Image
          width={150}
          height={150}
          src={brand.image}
          alt={brand.name}
          className="object-contain"
        />
      </div>

      {/* Products of this brand */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No Products</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="border rounded-lg p-4">
              <Image
                src={product.imageCover}
                alt={product.title}
                width={200}
                height={200}
                className="object-cover"
              />
              <h4 className="mt-2 font-medium">{product.title}</h4>
              <p className="text-gray-600">{product.price} EGP</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
