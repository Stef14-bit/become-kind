"use client";
import React, { useState } from "react";
import ImageGallery from "../components/ImageGallery";
import larisa0 from "@/assets/larisa0.webp";
import ImageModal from "../components/ImageModal";

type Props = {};

function Gallery({}: Props) {
  const [imageModalToggle, setImageModalToggle] = useState(false);
  function toggleModal() {
    setImageModalToggle(!imageModalToggle);
  }
  return (
    <section>
      <button className="mt-20" onClick={toggleModal}>
        Modal
      </button>
      {imageModalToggle && (
        <ImageModal picture={larisa0} alt="larisa" closeModal={toggleModal} />
      )}
      <ImageGallery picture={larisa0} altText="larisa" />
    </section>
  );
}

export default Gallery;
