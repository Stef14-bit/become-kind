import React, { useState } from "react";
import Image from "next/image";
import galleryImages from "@/data/gallery";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

type Props = {};

function ImageModal({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex =
      (currentIndex + galleryImages.length - 1) % galleryImages.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="absolute h-screen w-full inset-0 bg-black/50 flex flex-col items-center justify-center p-5 ">
      <Image
        src={galleryImages[currentIndex].url}
        alt=""
        width={1000}
        height={1000}
        layout="responsive"
      />
      <div className="hover:bg-black/75 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={50} onClick={prevSlide} />
      </div>
      <div className="hover:bg-black/75 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={50} onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center p-2">
        {galleryImages.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="text-2xl cursor-pointer flex content-center m-5 justify-center"
            onClick={() => goToSlide(slideIndex)}>
            <div className="w-100 h-100 max-w-[100px] max-h-[100px]">
              <Image
                src={slide.url}
                alt=""
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageModal;
