import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PortfolioItemCard from "@/components/PortfolioItemCard";

const items = [
  {
    title: "Volvo",
    subtitle: "Diseño publicitario",
    description:
      "Pieza gráfica para marca automotriz con composición limpia y mensaje visual impactante.",
    cover: "/img/volvo.png",
    slides: [{ src: "/img/volvo.png" }],
  },
  {
    title: "Campaña gráfica",
    subtitle: "Diseño publicitario",
    description:
      "Anuncio para bebida refrescante con colores vibrantes y enfoque en el producto.",
    cover: "/img/bebida-refrescante.png",
    slides: [{ src: "/img/bebida-refrescante.png" }],
  },
  {
    title: "Nike — Zona",
    subtitle: "Diseño publicitario",
    description:
      "Creatividad deportiva para Nike con tipografía dinámica y estética urbana.",
    cover: "/img/zona-nike.png",
    slides: [{ src: "/img/zona-nike.png" }],
  },
  {
    title: "Pollo campero",
    subtitle: "Pieza promocional",
    description:
      "Publicidad promocional para cadena de comida con apetito visual y llamado a la acción.",
    cover: "/img/cover-pollo.png",
    slides: [{ src: "/img/pollopublicidad.png" }],
  },
  {
    title: "Audífonos",
    subtitle: "Publicidad de producto",
    description:
      "Pieza publicitaria de producto tecnológico destacando diseño y calidad del audio.",
    cover: "/img/AUDIFONOS-cover.jpg",
    slides: [{ src: "/img/AUDIFONOS.jpg" }],
  },
  {
    title: "COPA",
    subtitle: "Ilustración y marca",
    description:
      "Ilustración con identidad de marca aplicada en formato promocional.",
    cover: "/img/COPA.jpg",
    slides: [{ src: "/img/COPA.jpg" }],
  },
  {
    title: "Ilustración",
    subtitle: "Estilo artístico",
    description:
      "Trabajo ilustrativo con estilo propio, color y narrativa visual creativa.",
    cover: "/img/ilustracion.jpg",
    slides: [{ src: "/img/ilustracion.jpg" }],
  },
  {
    title: "Tarjetas",
    subtitle: "Identidad aplicada",
    description:
      "Diseño de tarjetas de presentación con identidad visual coherente y profesional.",
    cover: "/img/cover-T.png",
    slides: [{ src: "/img/tarjetas.png" }],
  },
  {
    title: "Póster",
    subtitle: "Composición gráfica",
    description:
      "Póster con jerarquía visual clara, equilibrio tipográfico y composición atractiva.",
    cover: "/img/cover-poster.png",
    slides: [{ src: "/img/poster.png" }],
  },
  {
    title: "Pollo — variante",
    subtitle: "Pieza publicitaria",
    description:
      "Variante creativa de campaña gastronómica con enfoque en frescura y sabor.",
    cover: "/img/Pollo-cover1.png",
    slides: [{ src: "/img/pollo-min.png" }],
  },
  {
    title: "Nier: Automata",
    subtitle: "Fan art / publicidad",
    description:
      "Pieza inspirada en videojuego con estética cinematográfica y tratamiento gráfico.",
    cover: "/img/cover-nier.png",
    slides: [{ src: "/img/Nier-automata2.png" }],
  },
  {
    title: "Herramientas",
    subtitle: "Diseño gráfico",
    description:
      "Publicidad para productos de ferretería con mensaje directo y visual funcional.",
    cover: "/img/herramientas-cover.png",
    slides: [{ src: "/img/herramientas.png" }],
  },
  {
    title: "Electrónica",
    subtitle: "Publicidad retail",
    description:
      "Anuncio retail de electrónica con énfasis en beneficios y presentación del producto.",
    cover: "/img/electronic-1.png",
    slides: [{ src: "/img/electronic.png" }],
  },
  {
    title: "Publicidad IA",
    subtitle: "Concept y pieza digital",
    description:
      "Concepto publicitario digital explorando herramientas de inteligencia artificial.",
    cover: "/img/cover-IA.png",
    slides: [{ src: "/img/PUBLICIDAD IA.png" }],
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen bg-surface px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Proyectos publicitarios
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          Campañas, piezas para redes e identidad visual.
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
