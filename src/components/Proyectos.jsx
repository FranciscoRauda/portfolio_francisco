import React, { useState } from "react";
import Image from "next/image";
import projectsData from "../data/projectsData";
import ProjectModal from "./ProjectModal"; // Will create this component next

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section className="flex-col items-center bg-gradient-to-r from-indigo-800 to-gray-800 ">
      <div className="font-bold text-center text-white ">
        <h1 className="pt-2 mb-4 text-4xl text-center md:text-5xl lg:text-6xl md:pt-16 bg-white-200 md:text-center">
          Proyectos
        </h1>
      </div>

      <div className="grid items-center max-w-screen-xl grid-cols-1 gap-3 px-4 py-8 mx-auto md:grid-cols-2 lg:grid-cols-4 lg:px-10 md:py-12 animate-fade-up animate-twice animate-duration-[3000ms]">
        {projectsData.map((project) => (
          <div key={project.id} className="w-full text-center cursor-pointer mb-3" onClick={() => openModal(project)}>
            <div className="relative w-full h-64 mb-1">
              <Image
                className="object-cover rounded-lg"
                src={project.src}
                alt={project.alt}
                layout="fill"
              />
            </div>
            <p className="text-white text-lg font-medium capitalize">{project.category}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Proyectos;
