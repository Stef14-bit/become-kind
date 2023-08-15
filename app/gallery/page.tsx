import React from "react";
import ImageGallery from "../components/ImageGallery";
import larisa0 from "@/assets/larisa0.webp";

type Props = {};

function Gallery({}: Props) {
  return (
    <section>
      <ImageGallery picture={larisa0} altText="larisa" />
    </section>
  );
}

export default Gallery;
