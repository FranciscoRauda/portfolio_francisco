import React, { useState } from "react";
import Image from "next/image";
import imagesData from "../data/imagesData";
import ImageModal from "./ImageModal"; // Will create this component next

const Imagenes = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section className="pt-8 text-white bg-gradient-to-r from-indigo-800 to-gray-800">
      <div className="font-bold text-center md:pt-1">
        <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl bold ">Imágenes</h2>
      </div>

      {/* Image Grid */}
      <div className="grid items-center justify-center max-w-screen-xl grid-cols-1 gap-3 py-10 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 animate-fade-up animate-twice animate-duration-[3000ms]">
        {imagesData.map((image) => (
          <div key={image.id} className="w-full text-center cursor-pointer mb-3" onClick={() => openModal(image)}>
            <div className="relative w-full h-64 mb-1">
              <Image
                className="object-cover rounded-lg"
                src={image.src}
                alt={image.alt}
                layout="fill"
              />
            </div>
            <p className="text-white text-lg font-medium capitalize">{image.category}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </section>
  );
};

export default Imagenes;

