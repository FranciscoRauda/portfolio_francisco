import React from "react";
import PortfolioItemCard from "@/components/PortfolioItemCard";

const categories = [
  {
    href: "/proyectos/diseniopublicitario",
    title: "Diseño publicitario",
    subtitle: "Campañas, piezas gráficas y redes sociales.",
    image: "/img/publicidad.png",
    alt: "Diseño publicitario",
  },
  {
    href: "/proyectos/disenio_web",
    title: "Diseño y desarrollo web",
    subtitle: "Sitios, landings y productos digitales.",
    image: "/img/diseñoweb.png",
    alt: "Diseño web",
  },
  {
    href: "/proyectos/mockup",
    title: "Mockups",
    subtitle: "Presentación de producto y acabados finales.",
    image: "/img/camisa.png",
    alt: "Mockups de producto",
  },
  {
    href: "/proyectos/fotografia",
    title: "Fotografía",
    subtitle: "Edición, retrato y composición visual.",
    image: "/img/Fotografia.png",
    alt: "Fotografía",
  },
  {
    href: "/proyectos/video",
    title: "Videos",
    subtitle: "Edición y piezas en movimiento.",
    image: "https://i.pinimg.com/564x/d6/78/03/d67803de725da1c479c722c8e5d41538.jpg",
    alt: "Videos",
  },
];

const ProyectosIndex = () => {
  return (
    <div className="min-h-screen bg-surface px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Proyectos por categoría
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          Elige una categoría para ver el trabajo en detalle.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <PortfolioItemCard
            key={c.href}
            href={c.href}
            imageSrc={c.image}
            imageAlt={c.alt}
            title={c.title}
            subtitle={c.subtitle}
            linkLabel="Ver categoría →"
            priority={i < 2}
          />
        ))}
      </div>
    </div>
  );
};

export default ProyectosIndex;
