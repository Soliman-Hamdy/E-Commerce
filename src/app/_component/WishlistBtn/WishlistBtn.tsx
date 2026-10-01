"use client";
import { toast } from "@/components/ui/toast";
import { addToWishlist } from "@/src/api/actions/wishlistActions/addToWishlist";
import { deleteWishlistItem } from "@/src/api/actions/wishlistActions/deleteWishlistItem";
import { getWishlist } from "@/src/api/actions/wishlistActions/getWishlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";

export default function WishlistBtn({
  cls,
  prodId,
}: {
  cls: string;
  prodId: string;
}) {
  const query = useQueryClient();
  const { status } = useSession();
  const { data: wishlist } = useQuery({
    queryKey: ["getWishlist"],
    queryFn: getWishlist,
    enabled: status === "authenticated",
  });
  const isSaved = wishlist?.some((product) => product._id === prodId) ?? false;

  const { mutate, isPending } = useMutation({
    mutationFn: (productId: string) =>
      isSaved ? deleteWishlistItem(productId) : addToWishlist(productId),
    onSuccess: () => {
      toast.add({
        type: "success",
        description: isSaved
          ? "Product removed from wishlist"
          : "Product added to wishlist",
      });
      return query.invalidateQueries({ queryKey: ["getWishlist"] });
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Could not update wishlist",
      });
    },
  });

  function handleToggleWishlist() {
    if (status !== "authenticated") {
      toast.add({ type: "error", description: "Login First" });
      return;
    }

    mutate(prodId);
  }

  return (
    <button
      type="button"
      onClick={handleToggleWishlist}
      className={cls}
      aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={isSaved}
      disabled={isPending}
      title={isSaved ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart
        aria-hidden="true"
        className={`size-4 transition-colors ${isSaved ? "fill-red-500 text-red-500" : "text-gray-600"}`}
      />
    </button>
  );
}
