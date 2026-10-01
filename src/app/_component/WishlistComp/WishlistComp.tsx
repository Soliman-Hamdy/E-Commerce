"use client";
import { toast } from "@/components/ui/toast";
import { deleteWishlistItem } from "@/src/api/actions/wishlistActions/deleteWishlistItem";
import { getWishlist } from "@/src/api/actions/wishlistActions/getWishlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import AddBtn from "../AddBtn/AddBtn";

export default function WishlistComp() {
  const query = useQueryClient();

  const { data: wishlist, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlist(),
  });

  const { mutate: delWishlistItem, isPending } = useMutation({
    mutationFn: deleteWishlistItem,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "product removed successfully",
      });
      query.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "product failed",
      });
    },
  });

  if (isLoading || !wishlist) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="my-5">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        / <span className="text-gray-800">Wishlist</span>
      </nav>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold">My Wishlist</h1>
          <p className="text-sm text-gray-500">
            {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} saved
          </p>
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09L10.5 9l3 3-2 4 1.5 5z" />
              <path d="M12 5.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54" />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-800">
            Your Wishlist is Empty
          </h2>

          <Link
            href="/"
            className="inline-block mt-6 bg-green-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm">
              <tr>
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium text-center">Price</th>
                <th className="p-4 font-medium text-center">Status</th>
                <th className="p-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((product) => (
                <tr key={product._id} className="border-t">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 border rounded-lg overflow-hidden flex items-center justify-center bg-white">
                        <Image
                          src={product.imageCover}
                          alt={product.title}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{product.title}</p>
                        <p className="text-sm text-gray-500">
                          {product.category?.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center font-medium">
                    {product.price} EGP
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      In Stock
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <AddBtn
                        prodId={product._id}
                        child={
                          <span className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                              <path d="M17 17h-11v-14h-2" />
                              <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                            Add to Cart
                          </span>
                        }
                        cls="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
                      />

                      <button
                        onClick={() => delWishlistItem(product._id)}
                        disabled={isPending}
                        className="w-9 h-9 border rounded-lg flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-300 disabled:opacity-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
