import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PortfolioItemCard from "@/components/PortfolioItemCard";

const items = [
  {
    title: "Volvo",
    subtitle: "Diseño publicitario",
    cover: "/img/volvo.png",
    slides: [{ src: "/img/volvo.png" }],
  },
  {
    title: "Campaña gráfica",
    subtitle: "Diseño publicitario",
    cover: "/img/coverfull.jpg",
    slides: [{ src: "/img/full1.jpg" }],
  },
  {
    title: "Nike — Zona",
    subtitle: "Diseño publicitario",
    cover: "/img/zona-nike.png",
    slides: [{ src: "/img/zona-nike.png" }],
  },
  {
    title: "Pollo campero",
    subtitle: "Pieza promocional",
    cover: "/img/cover-pollo.png",
    slides: [{ src: "/img/pollopublicidad.png" }],
  },
  {
    title: "Audífonos",
    subtitle: "Publicidad de producto",
    cover: "/img/AUDIFONOS-cover.jpg",
    slides: [{ src: "/img/AUDIFONOS.jpg" }],
  },
  {
    title: "COPA",
    subtitle: "Ilustración y marca",
    cover: "/img/COPA.jpg",
    slides: [{ src: "/img/COPA.jpg" }],
  },
  {
    title: "Ilustración",
    subtitle: "Estilo artístico",
    cover: "/img/ilustracion.jpg",
    slides: [{ src: "/img/ilustracion.jpg" }],
  },
  {
    title: "Tarjetas",
    subtitle: "Identidad aplicada",
    cover: "/img/cover-T.png",
    slides: [{ src: "/img/tarjetas.png" }],
  },
  {
    title: "Póster",
    subtitle: "Composición gráfica",
    cover: "/img/cover-poster.png",
    slides: [{ src: "/img/poster.png" }],
  },
  {
    title: "Pollo — variante",
    subtitle: "Pieza publicitaria",
    cover: "/img/Pollo-cover1.png",
    slides: [{ src: "/img/pollo-min.png" }],
  },
  {
    title: "Nier: Automata",
    subtitle: "Fan art / publicidad",
    cover: "/img/cover-nier.png",
    slides: [{ src: "/img/Nier-automata2.png" }],
  },
  {
    title: "Herramientas",
    subtitle: "Diseño gráfico",
    cover: "/img/herramientas-cover.png",
    slides: [{ src: "/img/herramientas.png" }],
  },
  {
    title: "Electrónica",
    subtitle: "Publicidad retail",
    cover: "/img/electronic-1.png",
    slides: [{ src: "/img/electronic.png" }],
  },
  {
    title: "Publicidad IA",
    subtitle: "Concept y pieza digital",
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
