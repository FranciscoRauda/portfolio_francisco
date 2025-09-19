import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b md:static md:text-sm md:border-none bg-gradient-to-r from-indigo-800 to-gray-800">
      <div className="flex items-center justify-between max-w-screen-xl px-4 py-3 mx-auto md:px-6 md:py-4">
        <a href="/" className="flex items-center">
          <img
            src="/img/logo.png"
            width={200}
            height={300}
            alt="Logo"
            className="h-22 md:h-20 lg:h-16" // Ajuste del logo en diferentes pantallas
          />
        </a>
        <button
          className="text-gray-200 md:hidden hover:text-white" // Botón de menú visible solo en móviles
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Icono de cierre para cuando el menú está abierto
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            // Icono de menú para cuando el menú está cerrado
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 z-50 md:static md:bg-transparent md:flex md:items-center md:space-x-4 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`} // En pantallas más grandes el menú siempre estará visible
        >
          <ul className="flex flex-col p-2 md:flex-row md:space-x-6 md:p-0">
            <li>
              <a
                href="/"
                className="block py-3 text-lg font-bold text-center text-white rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/proyectos"
                className="block py-3 text-lg font-bold text-center text-white rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="block py-3 text-lg font-bold text-center text-white rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
              >
                Contáctame
              </a>
            </li>
            <li>
              <a
                href="https://franciscorauda.github.io/cv-francisco/" // Reemplaza con la ruta correcta a tu CV
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-lg font-bold text-center text-white rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
              >
                Cv
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
