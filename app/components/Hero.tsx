import React from "react";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="relative w-full mb-10">
      <div className="bg bg-black relative h-full">
        <Image
          src="https://become-kind.s3.eu-central-1.amazonaws.com/page/banner.webp"
          alt="bekome kind banner"
          layout="responsive" // Set layout to "responsive"
          width={1200}
          height={800}
          className="opacity-50 w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="font-semibold leading-relaxed text-2xl lg:text-4xl text-red-200">
            Draw the World with kindness
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
