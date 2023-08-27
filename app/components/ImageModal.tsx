import React from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import galleryImages from "@/data/gallery";

type Props = {
  currentIndex: number;
  onCloseModal: () => void;
};

function ImageModal({ currentIndex, onCloseModal }: Props) {
  return (
    <div className="fixed h-screen w-full top-0 z-20 left-0 bg-black/50 flex flex-col  p-5 justify-center">
      <div
        className="h-4/5 bg-black flex justify-center bg-contain bg-center bg-no-repeat py-10 no-scrollbar"
        style={{
          backgroundImage: `url(${galleryImages[currentIndex].url})`,
          width: "100%",
          height: "100%",
        }}></div>
      <div className="h-1/5 w-full bg-black mb-5 flex  overflow-x-scroll scroll-smooth ">
        {galleryImages.map((image, index) => (
          <Image
            className="m-2"
            width={100}
            height={100}
            key={index}
            src={image.url}
            alt={`Thumbnail ${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageModal;
