import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  picture: StaticImageData;
  alt: string;
};

function ImageModal({ picture, alt }: Props) {
  return (
    <div className="fixed inset-0 w-full h-screen bg-slate-950/50 flex justify-center items-center">
      <div className="absolute h-1/2 w-1/2 bg-red-600 ">
        <Image src={picture} alt={alt} />
      </div>
    </div>
  );
}

export default ImageModal;
