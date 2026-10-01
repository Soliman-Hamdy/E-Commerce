import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "./_component/FeaturedProducts/FeaturedProducts";
import Slider from "./_component/Slider/Slider";
import img1 from "../assets/images/slider-image-1.jpeg";
import img2 from "../assets/images/slider-image-2.jpeg";
import img3 from "../assets/images/slider-image-3.jpeg";
import dynamic from "next/dynamic";
// import ShopeCategory from "./_component/ٍShopCategory/ShopeCategory";
const ShopCategory = dynamic(
  () => import("./_component/ٍShopCategory/ShopeCategory"),
  {
    loading: () => {
      return (
        <div className="h-25 w-full bg-gray-700 flex justify-center items-center">
          Loading....
        </div>
      );
    },
  },
);
export default function Home() {
  return (
    <>
      <Slider
        spaceBetween={0}
        slidesPerView={1}
        pageList={[img1.src, img2.src, img3.src]}
      />

      <ShopCategory />
      <FeaturedProducts />
    </>
  );
}
