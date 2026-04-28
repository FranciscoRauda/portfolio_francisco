import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PortfolioItemCard from "@/components/PortfolioItemCard";

const items = [
  {
    title: "Mockup producto",
    subtitle: "Presentación 3D",
    cover: "/img/cover-mock2.png",
    slides: [{ src: "/img/mock-2.jpg" }],
  },
  {
    title: "Vaso",
    subtitle: "Packaging",
    cover: "/img/cover-vaso.png",
    slides: [{ src: "/img/Mockup-p.jpg" }],
  },
  {
    title: "Cap Smile",
    subtitle: "Branding aplicado",
    cover: "/img/smile-cover.png",
    slides: [{ src: "/img/CAPSSMILE.jpg" }],
  },
  {
    title: "Camisetas",
    subtitle: "Textil",
    cover: "/img/camisas-cover.png",
    slides: [{ src: "/img/camisas-m.jpg" }],
  },
  {
    title: "Lata",
    subtitle: "Producto",
    cover: "/img/cover-lata.png",
    slides: [{ src: "/img/Lata.png" }],
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen bg-surface px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">Mockups</h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          Producto final, packaging y presentaciones visuales.
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
