import React from "react";
import Image from "next/image";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[90vh] max-w-3xl overflow-auto rounded-2xl border border-white/10 bg-surface-card p-6 shadow-glow-blue"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-10 rounded-lg p-2 text-2xl leading-none text-gray-400 transition hover:bg-white/10 hover:text-white"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <Image
          src={project.src}
          alt={project.alt}
          width={1000}
          height={700}
          className="h-auto w-full rounded-xl object-contain"
        />
        <h3
          id="project-modal-title"
          className="mt-4 text-center text-lg font-semibold text-white capitalize"
        >
          {project.title || project.alt}
        </h3>
        <p className="mt-2 text-center text-sm text-gray-400">
          Categoría: {project.category}
        </p>
        {project.description ? (
          <p className="mt-3 text-center text-sm leading-relaxed text-gray-500">
            {project.description}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectModal;
