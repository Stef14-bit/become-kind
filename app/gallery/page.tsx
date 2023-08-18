"use client";
import React from "react";
import Image from "next/image";
import galleryImages from "@/data/gallery";

type Props = {};

function Gallery({}: Props) {
  return (
    <section className=" mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-5">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="max-h-200 overflow-hidden bg-gray-200 rounded-lg  flex flex-col justify-center items-center transition-transform duration-300 hover:shadow-md hover:transform hover:translate-y-1">
          <Image
            src={image.picture}
            alt={image.altText}
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      ))}
    </section>
  );
}

export default Gallery;
