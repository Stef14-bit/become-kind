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
    <div className="fixed max-h-screen w-full inset-0 bg-black/50 flex flex-col items-center justify-center p-5">
      <Image
        src={galleryImages[currentIndex].url}
        alt=""
        width={1000}
        height={1000}
        layout="responsive"
      />
      <div className="hover:bg-black/75 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div className="hover:bg-black/75 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center p-2">
        {galleryImages.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="text-2xl cursor-pointer flex content-center m-5 justify-center"
            onClick={() => goToSlide(slideIndex)}>
            <div className="w-100 h-100 max-w-[100px] max-h-[100px]">
              <Image src={slide.url} alt="" width={100} height={100} />
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-5 right-5 text-2xl text-white cursor-pointer"
        onClick={onCloseModal}>
        Close
      </button>
    </div>
  );
}

export default ImageModal;
