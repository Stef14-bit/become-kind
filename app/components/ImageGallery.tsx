import React from "react";
import Image from "next/image";
import larisa0 from "@/assets/larisa0.webp";

type Props = {};

function ImageGallery({}: Props) {
  return (
    <div className="mb-56  p-5 flex overflow-scroll scroll-smooth snap-x">
      <Image className="p-2 w-40" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
      <Image className="p-2" src={larisa0} alt={""} />
    </div>
  );
}

export default ImageGallery;
