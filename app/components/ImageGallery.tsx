"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import larisa0 from "@/assets/larisa0.webp";
import PictureModal from "./PictureModal"; // Import the PictureModal component

type Props = {
  picture: StaticImageData;
};

function ImageGallery({}: Props) {
  // State to manage the selected picture and modal visibility
  const [selectedPicture, setSelectedPicture] =
    useState<StaticImageData | null>(null);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setSelectedPicture(null);
  };

  // Function to open the modal with the selected picture
  const openModal = (picture: StaticImageData) => {
    setSelectedPicture(picture);
  };

  return (
    <section className="mt-20 p-10 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 row-start-2 scroll-smooth">
      {/* Map through your images and open the selected picture in modal */}
      {[larisa0, larisa0, larisa0, larisa0, larisa0, larisa0, larisa0].map(
        (picture, index) => (
          <div
            key={index}
            className="hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            onClick={() => openModal(picture)}>
            <Image
              src={picture}
              alt={""}
              className="w-full h-full object-contain"
            />
          </div>
        )
      )}

      {/* Render the PictureModal component */}
      {selectedPicture && (
        <PictureModal
          picture={selectedPicture}
          alt={""}
          toggleModal={toggleModal}
        />
      )}
    </section>
  );
}

export default ImageGallery;
