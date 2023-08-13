import React from "react";
import Image from "next/image";
import larisa0 from "@/assets/larisa0.webp";

type Props = {};

function ImageGallery({}: Props) {
  return (
    <section className=" h-screen p-5 grid grid-cols-2 grid-rows-3 gap-4 row-start-2 overflow-scroll scroll-smooth">
      <Image className="p-2 w-40" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
    </section>
  );
}

export default ImageGallery;
