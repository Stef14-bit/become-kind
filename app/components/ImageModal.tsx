import React from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import galleryImages from "@/data/gallery";

type Props = {
  currentIndex: number;
  onCloseModal: () => void;
  newImage: (index: number) => void;
};

function ImageModal({ currentIndex, onCloseModal, newImage }: Props) {
  const activeHeight = (index: number) => {
    return currentIndex === index ? 50 : 25;
  };
  const activeWidth = (index: number) => {
    return currentIndex === index ? 100 : 40;
  };
  const nextPicture = () => {
    if (currentIndex < galleryImages.length - 1) {
      newImage(currentIndex + 1); // Update the currentIndex using newImage
    }
  };

  const prevPicture = () => {
    if (currentIndex > 0) {
      newImage(currentIndex - 1); // Update the currentIndex using newImage
    }
  };

  return (
    <div className="fixed h-screen w-full top-0 z-20 left-0 bg-black/50 flex flex-col  p-5 justify-center">
      <button
        className="absolute top-0 right-5 p-8 text-white"
        onClick={onCloseModal}>
        close
      </button>
      <div
        className=" bg-black  bg-contain bg-center bg-no-repeat py-10 "
        style={{
          backgroundImage: `url(${galleryImages[currentIndex].url})`,
          width: "100%",
          height: "100%",
        }}>
        {" "}
        <button
          onClick={nextPicture}
          className="text-white bg-black/70 p-3 rounded-full absolute top-[50%] right-8 font-extrabold text-3xl">
          <BsChevronCompactRight></BsChevronCompactRight>
        </button>
        <button
          onClick={prevPicture}
          className="text-white bg-black/70 p-3 rounded-full absolute top-[50%] left-8 font-extrabold text-3xl">
          <BsChevronCompactLeft></BsChevronCompactLeft>
        </button>
      </div>
      <div className="h-1/4 w-full bg-black mb-5 overflow-x-scroll scroll-smooth flex justify-center content-center ">
        {galleryImages.map((image, index) => (
          <Image
            onClick={() => newImage(index)}
            className="m-2"
            width={activeWidth(index)}
            height={activeHeight(index)}
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
