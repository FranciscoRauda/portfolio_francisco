import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { FaRocket, FaLaptopCode, FaShoppingCart, FaPaintBrush } from 'react-icons/fa'; // Import icons

const Servicios = () => {
  const servicesData = [
    {
      icon: <FaRocket className="mb-4 text-5xl text-brand-glow" />,
      title: "Landing Pages que convierten",
      description: "Diseño páginas enfocadas en captar clientes, optimizadas para móviles y con estructura pensada para aumentar conversiones.",
    },
    {
      icon: <FaLaptopCode className="mb-4 text-5xl text-brand-glow" />,
      title: "Desarrollo Web Moderno",
      description: "Creo sitios web rápidos, seguros y con diseño actual utilizando tecnologías modernas como React y Tailwind.",
    },
    {
      icon: <FaShoppingCart className="mb-4 text-5xl text-brand-glow" />,
      title: "Desarrollo de e-commerce",
      description:
        "Desarrollo tiendas virtuales funcionales para que puedas vender tus productos de forma profesional en internet.",
    },
    {
      icon: <FaPaintBrush className="mb-4 text-5xl text-brand-glow" />,
      title: "Rediseño de Sitios Web",
      description: "Mejoro la apariencia, velocidad y experiencia de usuario de páginas web existentes para hacerlas más atractivas y efectivas.",
    },
  ];

  return (
    <section
      id="servicios"
      className="scroll-mt-24 border-t border-white/5 bg-surface px-4 py-20 md:px-6"
    >
      <div className="container mx-auto max-w-6xl px-0">
        <div className="mb-12 flex flex-col items-center gap-3 text-center md:mb-16">
          <div className="flex items-center justify-center gap-3">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-blue shadow-[0_0_12px_rgba(59,130,246,0.85)]"
              aria-hidden
            />
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Mis servicios
            </h2>
          </div>
          <p className="max-w-xl text-gray-400">
            Soluciones pensadas para marcas que buscan presencia digital clara y
            efectiva.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border border-white/5 bg-surface-card p-8 text-center shadow-card transition hover:border-brand-blue/25"
            >
              {service.icon}
              <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-glow-blue-sm transition hover:bg-brand-glow"
          >
            ¡Hablemos de tu proyecto!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
