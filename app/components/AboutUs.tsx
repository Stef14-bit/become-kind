import Image from "next/image";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <section className="flex flex-col items-center  w-full lg:flex-row">
      <div className="flex flex-col items-center justify-center lg:w-1/2">
        <h2 className="font-thin  text-3xl lg:text-6xl py-9 text-center">
          Who We Are
        </h2>
        <blockquote className="font-light  p-8 md:w-4/6 text-center italic">
          &quot;Our strength lies not only in the words we stand by, but most
          importantly in the actions of our initiatives. From the moment we
          started our small acts of kindness, we understood that by working
          together we could overcome our challenges much more efficiently, and
          that is why we ultimately decided to launch BE KIND. We strive to make
          a positive change in all of our pursuits.&quot;
        </blockquote>
      </div>
      <div className="lg:w-1/2 p-3">
        {" "}
        <Image
          className="w-full"
          src={
            "https://become-kind.s3.eu-central-1.amazonaws.com/page/main-page.png"
          }
          width={300}
          height={400}
          alt="women huging"
        />
      </div>
    </section>
  );
}

export default About;
