import React from "react";
import Image from "next/image";

type Props = {
  picture: string;
  picture_description: string;
  title: string;
  content: string;
};

function ProjectsCard({ picture, picture_description, title, content }: Props) {
  return (
    <div className="m-3 max-w-xs w-full h-[32rem]  border border-gray-200 rounded-lg shadow flex flex-col">
      <div className="h-full relative">
        <Image
          layout="fill"
          className="rounded-t-lg"
          src={picture}
          alt={picture_description}
        />
      </div>

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
          <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-200">
            <a href="/">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
