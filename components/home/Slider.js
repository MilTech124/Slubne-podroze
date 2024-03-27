"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import {Autoplay, FreeMode } from "swiper/modules";

export default function App({ aktualnosci }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        autoplay={
          {
            delay: 2500,
            disableOnInteraction: false,
          }
        }
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode,Autoplay]}
        className="mySwiper"
      >
        {aktualnosci.map((aktualnosc) => (
          <SwiperSlide>
          <div
            key={aktualnosc.id}
            className="bg-neutral-100 p-5 rounded-sm shadow-md media-element"
          >
            <img src={aktualnosc.image} alt={aktualnosc.title} className="w-[217px] h-[140px]" />
            <h3>{aktualnosc.title}</h3>
            <p className="text-sm">{aktualnosc.content.slice(0,100)+"..."}</p>
            <p className="text-xs text-right pt-2">{aktualnosc.date}</p>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
