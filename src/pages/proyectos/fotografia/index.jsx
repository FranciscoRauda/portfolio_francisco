import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PortfolioItemCard from "@/components/PortfolioItemCard";

const items = [
  {
    title: "Montaje I",
    subtitle: "Edición y composición",
    description:
      "Composición fotográfica con capas, color y retoque para un resultado editorial.",
    cover: "/img/foto-cover.png",
    slides: [{ src: "/img/MONTAJE1.png" }],
  },
  {
    title: "Montaje II",
    subtitle: "Retoque fotográfico",
    description:
      "Montaje con corrección de luz, contraste y detalle para imagen pulida.",
    cover: "/img/Fotomon-cover.png",
    slides: [{ src: "/img/MONTAJE2.png" }],
  },
  {
    title: "Montaje III",
    subtitle: "Composición creativa",
    description:
      "Pieza creativa que combina elementos visuales con narrativa fotográfica.",
    cover: "/img/cover-mon3.png",
    slides: [{ src: "/img/MONTAJE3.jpg" }],
  },
  {
    title: "Automotriz",
    subtitle: "Fotografía de producto",
    description:
      "Fotografía de vehículo con énfasis en líneas, reflejos y presencia de marca.",
    cover: "/img/Auto-cover.png",
    slides: [{ src: "/img/Auto.png" }],
  },
  {
    title: "Moda",
    subtitle: "Sesión y edición",
    description:
      "Sesión de moda con retoque de piel, color y estilo visual contemporáneo.",
    cover: "/img/fotomoda-cover.png",
    slides: [{ src: "/img/fotomoda.jpg" }],
  },
  {
    title: "Nike — luz",
    subtitle: "Concept y estudio",
    description:
      "Concepto de estudio con iluminación dramática y enfoque en producto deportivo.",
    cover: "/img/Nike-cover.png",
    slides: [{ src: "/img/nike light.png" }],
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen bg-surface px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Fotografía
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          Montajes, producto y retrato con postproducción.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <PortfolioItemCard
            key={item.title + index}
            imageSrc={item.cover}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            onOpen={() => setOpenIndex(index)}
            priority={index < 2}
          />
        ))}
      </div>

      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        slides={openIndex !== null ? items[openIndex].slides : []}
      />
    </section>
  );
};

export default Page;
