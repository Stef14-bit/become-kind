import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Button from "./Button";

type Props = {
  picture: StaticImageData;
  picture_description: string;
  title: string;
  content: string;
};

function ProjectsCard({ picture, picture_description, title, content }: Props) {
  return (
    <div className="m-1 max-w-xs bg-red-100 border border-gray-200 rounded-lg shadow flex flex-col">
      <Image
        className="rounded-t-lg w-full max-h-52"
        src={picture}
        alt={picture_description}
      />

      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800 text-center">
            {title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 text-center">
            {content}
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-indigo-600 text-white py-2 px-6 rounded  hover:bg-indigo-500 duration-500">
            <a href="/">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
