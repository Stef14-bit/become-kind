import React from "react";
import ImageGallery from "../components/ImageGallery";
import PictureModal from "../components/PictureModal";

type Props = {};

function Gallery({}: Props) {
  return (
    <section>
      <PictureModal />
      <ImageGallery />
    </section>
  );
}

export default Gallery;
