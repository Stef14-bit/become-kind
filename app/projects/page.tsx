import ProjectsCard from "@/app/components/ProjectsCard";
import React from "react";
import projects from "../../data/projects";
type Props = {};

function Projects({}: Props) {
  return (
    <>
      <h1 className="text-center font-thin py-12 text-3xl lg:text-6xl mt-40">
        OUR Programs
      </h1>
      <p className="text-center p-4 md:p-28 font-light">
        BE KIND is achieving more with our initiatives than ever before, and we
        are very proud of the progress we continue to make. Below are some of
        our most recent projects. Learn more about what we do, who we help, and
        how we work every day to create a lasting impact.
      </p>
      <div className="my-36 flex px-8 flex-wrap justify-center">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            picture={project.picture}
            picture_description={project.picture_description}
            title={project.title}
            content={project.content}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
