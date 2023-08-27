"use client";
import React, { useState } from "react";
import Image from "next/image";
import galleryImages from "@/data/gallery";
import ImageModal from "../components/ImageModal";

type Props = {};

function Gallery({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(0);

  const openModal = (index: number) => {
    setClickedImageIndex(index);
    setIsModalOpen(true);
  };

  const newImageView = (index: number) => {
    setClickedImageIndex(index);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h2 className="font-thin text-3xl lg:text-6xl py-9 text-center">
        Gallery
      </h2>
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 m-4 gap-4 py-5">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="max-h-200 overflow-hidden bg-gray-100 rounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:shadow-md hover:transform hover:translate-y-1 cursor-pointer"
            onClick={() => openModal(index)}>
            <Image
              src={image.url}
              alt={image.altText}
              width={300}
              height={300}
            />
          </div>
        ))}
      </section>
      {isModalOpen && (
        <ImageModal
          currentIndex={clickedImageIndex}
          newImage={newImageView}
          onCloseModal={closeModal}
        />
      )}
    </>
  );
}

export default Gallery;
