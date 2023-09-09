import React from "react";
import Image from "next/image";
import UserInfo from "./UserInfo";

type Props = {};

const BlogPost = (props: Props) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 content-center bg-red-50">
      <Image
        src={
          "https://become-kind.s3.eu-central-1.amazonaws.com/gallery/gallery19.png"
        }
        alt=""
        width={500}
        height={400}
      />

      <div className=" flex flex-col">
        <span className=" ">
          <UserInfo />
        </span>
        <span className="h-5/6 ">
          <h2 className="p-2">Changing Life with Kindness</h2>
          <p className="p-5  overflow-scroll h-5/6 text-xs">
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
        <span className="p-5 font-mono text-xs text-slate-600 ">
          views : 45
        </span>
      </div>
    </div>
  );
};

export default BlogPost;
