import React from "react";
import Image from "next/image";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-800 p-4 rounded-lg max-w-3xl max-h-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold p-2"
          onClick={onClose}
        >
          &times;
        </button>
        <Image
          src={project.src}
          alt={project.alt}
          layout="intrinsic"
          width={1000}
          height={700}
          objectFit="contain"
          className="rounded-lg"
        />
        <p className="mt-4 text-center text-white text-lg font-semibold capitalize">
          {project.alt}
        </p>
        <p className="text-center text-gray-300 text-md mt-2">
          Categoría: {project.category}
        </p>
        {project.description && (
          <p className="text-center text-gray-400 text-sm mt-2">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
