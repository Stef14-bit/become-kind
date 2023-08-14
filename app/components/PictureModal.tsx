"use client";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  picture: StaticImageData;
  alt: string;
  toggleModal: () => void;
};

function PictureModal({ picture, alt, toggleModal }: Props) {
  return (
    <div
      onClick={toggleModal}
      className="fixed inset-0 h-screen w-full bg-black z-10 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <Image
          src={picture}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default PictureModal;
