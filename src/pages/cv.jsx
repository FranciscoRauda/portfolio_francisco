
import React from 'react';

const CV = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Currículum</h1>
      <p className="text-lg text-gray-600 mb-8">
        Puedes descargar mi currículum haciendo clic en el botón de abajo.
      </p>
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default CV;
