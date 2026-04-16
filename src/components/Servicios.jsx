import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { FaRocket, FaLaptopCode, FaShoppingCart, FaPaintBrush } from 'react-icons/fa'; // Import icons

const Servicios = () => {
  const servicesData = [
    {
      icon: <FaRocket className="text-blue-400 text-5xl mb-4" />, // Icon for Landing Pages
      title: "Landing Pages que convierten",
      description: "Diseño páginas enfocadas en captar clientes, optimizadas para móviles y con estructura pensada para aumentar conversiones.",
    },
    {
      icon: <FaLaptopCode className="text-blue-400 text-5xl mb-4" />, // Icon for Desarrollo Web
      title: "Desarrollo Web Moderno",
      description: "Creo sitios web rápidos, seguros y con diseño actual utilizando tecnologías modernas como React y Tailwind.",
    },
    {
      icon: <FaShoppingCart className="text-blue-400 text-5xl mb-4" />, // Icon for Tiendas Online
      title: "Desarrollo tiendas virtuales funcionales para que puedas vender tus productos de forma profesional en internet.",
    },
    {
      icon: <FaPaintBrush className="text-blue-400 text-5xl mb-4" />, // Icon for Rediseño de Sitios Web
      title: "Rediseño de Sitios Web",
      description: "Mejoro la apariencia, velocidad y experiencia de usuario de páginas web existentes para hacerlas más atractivas y efectivas.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-black to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Mis Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center"> {/* Use flexbox for centering */}
              {service.icon}
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contacto" legacyBehavior>
            <a className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              ¡Hablemos de tu proyecto!
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
