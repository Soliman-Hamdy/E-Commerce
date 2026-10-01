"use client";
import { toast } from "@/components/ui/toast";
import { addToCart } from "@/src/api/actions/cartActions/addToCart";
import { addToWishlist } from "@/src/api/actions/wishlistActions/addToWishlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { ReactNode } from "react";
//call api to add product to cart => get token

export default function WishlistBtn({
  cls,
  child,
  prodId,
}: {
  cls: string;
  child: ReactNode;
  prodId: string;
}) {
  const query = useQueryClient();

  async function handleAddToWishlist() {
    mutate(prodId);

    // try {
    //   const data = await addToCart(prodId);
    //   if (data.message === "Product added successfully to your cart") {
    //     toast.add({
    //       type: "success",
    //       description: data.message,
    //     });
    //   } else {
    //     toast.add({
    //       type: "error",
    //       description: "Login First",
    //     });
    //   }
    // } catch (error) {
    //   toast.add({
    //     type: "error",
    //     description: "Login First",
    //   });
    // }
  }
  const { data, mutate } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "product added successfully",
      });
      query.invalidateQueries({ queryKey: ["getWishlist"] });
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Login First",
      });
    },
  });
  console.log(data);

  return (
    <>
      <button onClick={handleAddToWishlist} className={cls}>
        {child}
      </button>
    </>
  );
}
