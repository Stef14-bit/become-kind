import React from "react";
import BlogPost from "@/app/components/BlogPost";

type Props = {};

const Blog = (props: Props) => {
  return (
    <section className="flex justify-center items-center flex-col">
      <h2 className="font-thin text-3xl lg:text-6xl py-9 text-center">Blog</h2>

      <div className="m-5">
        <BlogPost />
      </div>
    </section>
  );
};

export default Blog;
