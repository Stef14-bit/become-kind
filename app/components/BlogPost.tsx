import React from "react";
import Image from "next/image";

type Props = {};

const BlogPost = (props: Props) => {
  return (
    <div className="border-2 border-red-500 flex max">
      <div className="flex-1">
        <Image
          src={
            "https://become-kind.s3.eu-central-1.amazonaws.com/gallery/gallery19.png"
          }
          alt=""
          width={500}
          height={400}
        />
      </div>
      <div className="flex-1 bg-green-500 flex flex-col">
        <span className="bg-red-600 h-1/4 w-full"></span>
        <span className="bg-blue-600 w-full h-full"></span>
      </div>
    </div>
  );
};

export default BlogPost;
