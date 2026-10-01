import FeaturedProducts from "./_component/FeaturedProducts/FeaturedProducts";
import OfferCards from "./_component/OfferCards/OfferCards";
import Slider from "./_component/Slider/Slider";
import img1 from "../assets/images/slider-image-1.jpeg";
import img2 from "../assets/images/slider-2.jpeg";
import img3 from "../assets/images/banner-4.jpeg";
import dynamic from "next/dynamic";
import CompetitiveCards from "./_component/CompetitiveCards/CompetitiveCards";
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
        slides={[
          {
            image: img1,
            title: "Fresh Products Delivered to your Door",
            description: "Get 20% off your first order",
            primaryAction: { label: "Shop Now", href: "/shop" },
            secondaryAction: { label: "View Deals", href: "/shop" },
          },
          {
            image: img2,
            title: "Quality You Can Trust",
            description: "Fresh picks for your everyday essentials",
            primaryAction: { label: "Explore Products", href: "/shop" },
            secondaryAction: { label: "Browse Brands", href: "/brands" },
          },
          {
            image: img3,
            title: "Fast & Free Delivery",
            description: "Same day delivery available",
            primaryAction: { label: "Order Now", href: "/shop" },
            secondaryAction: { label: "Delivery Info", href: "/support" },
          },
        ]}
      />
      <CompetitiveCards />
      <ShopCategory />
      <OfferCards />

      <FeaturedProducts />
    </>
  );
}
