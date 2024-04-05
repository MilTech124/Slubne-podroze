"use client";
import React from "react";
import Image from "next/image";
import Socials from "../Socials";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const title = "Witaj na stronie Ślubne Podróże! ";
  const description =
    "Na naszej stronie znajdziesz fascynujące wywiady z osobami, które tworzą magiczne chwile podczas ślubów. Mistrzowie florystyki, dekoracji, fotografii, muzyki oraz wiele innych specjalistów podzielą się swoimi doświadczeniami i sekretami sukcesu. Dowiecie się, jak wybrać idealny bukiet, stworzyć niepowtarzalną oprawę muzyczną, czy też zaplanować niesamowite atrakcje weselne.";
  const link = "https://www.youtube.com/@slubnepodroze";
  return (
    <section id="hero" className="relative md:h-[800px] h-[400px]">
      <iframe
        width="1920"
        height="1080"
        src="https://www.youtube.com/embed/vIUZ3dGLO4I?autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="absolute object-cover object-top h-full w-full top-0 left-0"
      ></iframe>
      <div className="absolute h-full w-full bg-black bg-opacity-50 top-0 left-0"></div>
      <div className="absolute bottom-10 left-10 transform text-white">
        <TypeAnimation
          sequence={[
            title, // Types 'One'
            1000, // Waits 1s
          ]}
          wrapper="h1"
          cursor={false}
          repeat={0}
          className="md:text-6xl font-bold"
        />
        <TypeAnimation
          sequence={[
            description, // Types 'One'
            1000, // Waits 1s
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
          speed={75}
          className="max-w-[80vw] h-[100px] max-sm:text-xs "
        />

        {/* <h1 className='text-6xl font-bold'>{title}</h1>
            <p className=''>{description}</p> */}
      </div>
      <Link href={link}>
        <Image
          src={"/Youtube_logo.png"}
          width={75}
          height={75}
          className="absolute animate-pulse  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
        />
      </Link>

      <Socials />
    </section>
  );
}

export default Hero;
