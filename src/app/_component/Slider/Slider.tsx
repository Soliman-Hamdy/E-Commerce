"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
// type SliderType = "momken 27ot 2l slider tyb b3d 2l ":" w 5las"
// spaceBetween:number,
// slidesPerView:number,
// slides:SliderSlide[]

type SliderSlide = {
  image: StaticImageData;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
};

export default function Slider({
  spaceBetween,
  slidesPerView,
  slides,
}: {
  spaceBetween: number;
  slidesPerView: number;
  slides: SliderSlide[];
}) {
  return (
    <div className="w-screen relative left-1/2 right-1/2 mx-[-50vw]">
      <Swiper
        className="hero-slider"
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
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.image.src}>
              <div className="relative h-80 w-full sm:h-90 lg:h-100">
                <Image
                  src={slide.image}
                  className="object-cover"
                  alt=""
                  fill
                  sizes="100vw"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-green-600/75"
                />
                <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 lg:px-16">
                  <div className="max-w-lg text-white">
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                      {slide.title}
                    </h2>
                    <p className="mt-4 text-base font-medium sm:text-lg">
                      <span>{slide.description}</span>
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href={slide.primaryAction.href}
                        className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {slide.primaryAction.label}
                      </Link>
                      <Link
                        href={slide.secondaryAction.href}
                        className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {slide.secondaryAction.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
