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
  const prevSlide = () => {
    const newIndex =
      (currentIndex + galleryImages.length - 1) % galleryImages.length;
    onCloseModal(); // Close the modal before changing slide
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    onCloseModal(); // Close the modal before changing slide
  };

  const goToSlide = (slideIndex: number) => {
    onCloseModal(); // Close the modal before changing slide
  };

  return (
    <div className="fixed h-screen w-full top-0 z-20 left-0 bg-black/50 flex flex-col items-center justify-center  p-5">
      <div className="h-4/5 w-full bg-blue-500 m-5 flex">
        {galleryImages.map((image) => (
          <Image
            key={image.key}
            src={image.url}
            alt=""
            width={1000}
            height={1000}
          />
        ))}
      </div>
      <div className="h-1/5 w-full bg-red-500 mb-5"></div>
    </div>
  );
}

export default ImageModal;
