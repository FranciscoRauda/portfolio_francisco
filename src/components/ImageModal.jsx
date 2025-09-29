import React from "react";
import Image from "next/image";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Close modal when clicking outside the image
    >
      <div
        className="relative bg-gray-800 p-4 rounded-lg max-w-3xl max-h-full overflow-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold p-2"
          onClick={onClose}
        >
          &times;
        </button>
        <Image
          src={image.src}
          alt={image.alt}
          layout="intrinsic" // Use intrinsic layout for full size within modal
          width={1000} // Max width for the modal image
          height={700} // Max height for the modal image
          objectFit="contain" // Ensure the image fits within the bounds
          className="rounded-lg"
        />
        <p className="mt-4 text-center text-white text-lg capitalize">
          {image.alt} - {image.category}
        </p>
      </div>
    </div>
  );
};

export default ImageModal;
