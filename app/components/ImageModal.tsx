import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  picture: StaticImageData;
  alt: string;
  closeModal: () => void;
};

function ImageModal({ picture, alt, closeModal }: Props) {
  const handleParagraphClick = (
    event: React.MouseEvent<HTMLParagraphElement>
  ) => {
    event.stopPropagation(); // Prevent event propagation
  };
  return (
    <div
      className="fixed inset-0 w-full h-screen bg-slate-950/50 flex justify-center items-center"
      onClick={closeModal}>
      <p className="font-extrabold cursor-pointer absolute top-24 right-10 w-8 h-8 text-center text-white">
        {" "}
        X
      </p>
      <div
        className="absolute h-1/2 w-1/2 bg-red-600 "
        onClick={handleParagraphClick}>
        <Image src={picture} alt={alt} />
      </div>
    </div>
  );
}

export default ImageModal;
