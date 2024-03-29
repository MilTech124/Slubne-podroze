"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";

export default function App({ aktualnosci }) {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        {aktualnosci.map((aktualnosc) => (
          <SwiperSlide  key={aktualnosc.id}>
            <div
          
              className="bg-neutral-100 max-sm:scale-75 max-sm:-m-5 max-sm:-my-16 p-5 rounded-sm shadow-md media-element"
            >
              <a href={aktualnosc.acf.link}>
                <Image
                  src={aktualnosc.acf.obraz}
                  alt={aktualnosc.acf.tytul}
                  width={217}
                  height={140}
                  className="w-[217px] h-[140px]"
                />
              </a>
              <h3>{aktualnosc.acf.tytul}</h3>
              <p className="text-sm">
                {aktualnosc.acf.text.slice(0, 100) + "..."}
              </p>
              <p className="text-xs text-right pt-2">{aktualnosc.acf.data}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
