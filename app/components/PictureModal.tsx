"use client";
import React, { useState } from "react";

type Props = {};

function PictureModal({}: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    showModal && (
      <div className="fixed inset-0 h-screen w-full bg-black opacity-50 z-10">
        <div className="absolute inset-1/4 bg-white"></div>
      </div>
    )
  );
}

export default PictureModal;
