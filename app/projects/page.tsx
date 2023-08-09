import ProjectsCard from "@/components/ProjectsCard";
import React from "react";
import logo from "../../public/logo.webp";
import Hero from "@/components/Hero";

type Props = {};

function Projects({}: Props) {
  return (
    <>
      <Hero />
      <h1 className="text-center font-thin py-12 text-3xl lg:text-6xl mt-40">
        OUR Programs
      </h1>
      <p className="text-center p-4 ">
        BE KIND is achieving more with our initiatives than ever before, and we
        are very proud of the progress we continue to make. Below are some of
        our most recent projects. Learn more about what we do, who we help, and
        how we work every day to create a lasting impact.
      </p>
      <div className="my-36 flex px-8 flex-wrap">
        <ProjectsCard
          picture={logo}
          picture_description="logo placeholder"
          title="title"
          content=" We’re having trouble finding that site.
          We can’t connect to the server at www.google.com.
            "
        />
        <ProjectsCard
          picture={logo}
          picture_description="logo placeholder"
          title="title"
          content=" We’re having trouble finding that site.
          We can’t connect to the server at www.google.com.
            "
        />
        <ProjectsCard
          picture={logo}
          picture_description="logo placeholder"
          title="title"
          content=" We’re having trouble finding that site.
          We can’t connect to the server at www.google.com.
            "
        />
        <ProjectsCard
          picture={logo}
          picture_description="logo placeholder"
          title="title"
          content=" We’re having trouble finding that site.
          We can’t connect to the server at www.google.com.
            "
        />
      </div>
    </>
  );
}

export default Projects;
