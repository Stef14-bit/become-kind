import React from "react";
import banner from "../public/banner.webp";
import Image from "next/image";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative mb-8">
      <Image className="w-full" src={banner} alt="become kind banner" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <h1 className="font-semibold leading-relaxed text-red-100 text-center  lg:w-1/3 lg:text-6xl text-2xl p-8">
          Draw the World with Kindness
        </h1>
      </div>
    </div>
  );
};

export default Banner;
