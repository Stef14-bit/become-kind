import React from "react";
import Image from "next/image";
import UserInfo from "./UserInfo";

type Props = {};

const BlogPost = (props: Props) => {
  return (
    <div className="border-2 border-red-500 flex items-center">
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
        <span className=" h-1/4 w-full ">
          <UserInfo />
        </span>
        <span className="bg-blue-600 w-full 1/2">
          <h2>Changing Life with Kindness</h2>
          <p className="p-5  overflow-hidden line-clamp-6">
            What impact may kindness bring? Kindness, changing life with
            kindness, journey with kindness, My kind of kindness My soul and
            mind are heavily woven with love and kindness as I lived with my
            grandmother who was the one who raised me. When I was a child, my
            grandma didn&apos;t have enough money, so we lived simply, with
            nothing more than an extremely old radio on which we could listen to
            children&apos;s stories and let our imaginations run wild. But what
            I had, above all else, was my grandmother&apos;s unwavering,
            everlasting kindness and love for me. She believed that having money
            was never a requirement for living a happy and peaceful life;
            rather, what we need to be happy and tranquil is love and kindness.
            Love and kindness should not be reserved for yourself alone, but
            should be extended to everyone in your vicinity. She raised me with
            this ideology as well as pursuing it herself.
          </p>
        </span>
        <span className="p-5">views : 45</span>
      </div>
    </div>
  );
};

export default BlogPost;
