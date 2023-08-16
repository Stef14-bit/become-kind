"use client";
import React, { useState } from "react";
import ImageGallery from "../components/ImageGallery";
import larisa0 from "@/assets/larisa0.webp";
import ImageModal from "../components/ImageModal";
import Image from "next/image";

type Props = {};

function Gallery({}: Props) {
  const [imageModalToggle, setImageModalToggle] = useState(false);
  function toggleModal() {
    setImageModalToggle(!imageModalToggle);
  }
  return (
    <section>
      {imageModalToggle && (
        <ImageModal picture={larisa0} alt="larisa" closeModal={toggleModal} />
      )}
      <div className="mt-20 p-10 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 row-start-2 scroll-smooth">
        <Image
          onClick={toggleModal}
          src={larisa0}
          alt="larisa"
          className="hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
        />
      </div>
    </section>
  );
}

export default Gallery;
