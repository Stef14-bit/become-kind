import React from "react";
import ImageGallery from "../components/ImageGallery";
import PictureModal from "../components/PictureModal";
import larisa0 from "@/assets/larisa0.webp";

type Props = {};

function Gallery({}: Props) {
  return (
    <section>
      {/* Pass the required props to PictureModal */}
      <PictureModal picture={larisa0} alt="" toggleModal={() => {}} />

      {/* Pass the required props to ImageGallery */}
      <ImageGallery picture={larisa0} />
    </section>
  );
}

export default Gallery;
