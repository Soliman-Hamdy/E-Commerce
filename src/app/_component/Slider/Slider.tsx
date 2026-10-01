"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
// type SliderType = "momken 27ot 2l slider tyb b3d 2l ":" w 5las"
// spaceBetween:number,
// slidesPerView:number,
// pageList:string[]

export default function Slider({
  spaceBetween,
  slidesPerView,
  pageList,
}: {
  spaceBetween: number;
  slidesPerView: number;
  pageList: string[];
}) {
  return (
    <div className="w-screen relative left-1/2 right-1/2 mx-[-50vw]">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
          renderBullet(index, className) {
            return `<span class='${className} bg-green-400! w-2! h-2!'></span>`;
          },
          bulletActiveClass: "w-5! rounded-3xl! opacity-80!",
        }}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {pageList.map((src) => {
          return (
            <SwiperSlide key={src}>
              <Image
                src={src}
                className="w-full h-80 object-cover"
                alt=""
                width={400}
                height={300}
              />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
