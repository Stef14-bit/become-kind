"use client";
import React from "react";
import Image from "next/image";
import banner from "../public/banner.webp";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="fixed top-5 z-0 opacity-50">
      <Image src={banner} alt="bekome kind banner " className="mt-20" />
      <div className=" fixed top-0  h-20 bg bg-red-700 opacity-50"></div>
    </div>
  );
}

export default Hero;
