"use client";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  picture: StaticImageData;
  alt: string;
  toggleModal: () => void; // Define the function type correctly
};

function PictureModal({ picture, alt, toggleModal }: Props) {
  // Use local state to manage the modal visibility
  const [showModal, setShowModal] = useState(true);

  // Function to toggle the modal visibility
  const handleToggleModal = () => {
    setShowModal(!showModal);
    toggleModal(); // Call the passed toggleModal function from props
  };

  return showModal ? (
    <div
      onClick={handleToggleModal}
      className="fixed inset-0 h-screen w-full bg-black  z-10">
      {/* Center the Image vertically and horizontally */}
      <Image src={picture} alt={alt} className="w-full h-full object-contain" />
    </div>
  ) : null;
}

export default PictureModal;
