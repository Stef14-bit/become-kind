"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  picture: StaticImageData;
  altText: string;
};

function ImageGallery({ picture, altText }: Props) {
  return (
    <section className="mt-20 p-10 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 row-start-2 scroll-smooth">
      <div className="hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
        <Image
          src={picture}
          alt={altText}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}

export default ImageGallery;
