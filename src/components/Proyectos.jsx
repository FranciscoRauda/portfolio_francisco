import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Proyectos = ({ project }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (projectData) => {
    setSelectedProject(projectData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const stack = project.stack || "Diseño UX/UI + Frontend";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/5 bg-surface-card shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-glow-blue-sm">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-card/90 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"
          aria-hidden
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.src || "/project.jpg"}
          alt={project.title}
          className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5 md:p-6">
        <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
          {project.title}
        </h3>

        <p className="mb-5 text-sm text-gray-400">{stack}</p>

        <button
          type="button"
          className="text-sm font-semibold text-brand-green transition hover:text-brand-green/90 hover:underline"
          onClick={() => openModal(project)}
        >
          Ver proyecto →
        </button>
      </div>

      {isModalOpen && selectedProject ? (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      ) : null}
    </article>
  );
};

export default Proyectos;
