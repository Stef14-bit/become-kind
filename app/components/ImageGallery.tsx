import React from "react";
import Image from "next/image";
import larisa0 from "@/assets/larisa0.webp";

type Props = {};

function ImageGallery({}: Props) {
  return (
    <section className=" mt-20 p-10 shadow-2xl grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 row-start-2  scroll-smooth ">
      <Image
        className="hover:-translate-y-2 transition-transform duration-300"
        src={larisa0}
        alt={""}
      />
      <Image
        className="hover:-translate-y-2 transition-transform duration-300"
        src={larisa0}
        alt={""}
      />
      <Image
        className="hover:-translate-y-2 transition-transform duration-300"
        src={larisa0}
        alt={""}
      />
      <Image
        className="hover:-translate-y-2 transition-transform duration-300"
        src={larisa0}
        alt={""}
      />
      <Image
        className="hover:-translate-y-2 transition-transform duration-300"
        src={larisa0}
        alt={""}
      />
      <Image
        className="hover:-translate-y-2 transition-transform duration-300"
        src={larisa0}
        alt={""}
      />
      <Image
        className="hover:-translate-y-2 transition-transform duration-300"
        src={larisa0}
        alt={""}
      />
    </section>
  );
}

export default ImageGallery;
