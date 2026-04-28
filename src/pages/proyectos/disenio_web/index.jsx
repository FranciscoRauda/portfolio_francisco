import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PortfolioItemCard from "@/components/PortfolioItemCard";

const items = [
  {
    title: "Innovación",
    subtitle: "Diseño web + UI",
    cover: "/img/innovacion-cover.png",
    slides: [{ src: "/img/sitio-innovacion.png" }, { src: "/img/sitio2026.png" }],
  },
  {
    title: "Comproyse",
    subtitle: "Sitio corporativo",
    cover: "/img/comproyse-cover.png",
    slides: [{ src: "/img/comproyse.jpg" }, { src: "/img/comproyse2.jpg" }],
    href: "http://comproyse.com/",
  },
  {
    title: "Sivar",
    subtitle: "E-commerce / inventario",
    cover: "/img/sivar-cover.png",
    slides: [
      { src: "/img/INICIO.png" },
      { src: "/img/INVENTARIO.png" },
      { src: "/img/TIENDA.png" },
      { src: "/img/ventas.png" },
    ],
  },
  {
    title: "Ferretería Fénix",
    subtitle: "Presencia web",
    cover: "/img/ferreteria-cover.png",
    slides: [{ src: "/img/ferreteria.png" }],
    href: "https://ferreteriafenix.com/",
  },
  {
    title: "Landing promo",
    subtitle: "Serali — Facebook Ads",
    cover: "/img/cover-landin.png",
    slides: [
      { src: "/img/principal-landing.png" },
      { src: "/img/seccion-landing.png" },
    ],
    href: "https://serali.com.mx/landing-promo-facebook-ads/",
  },
  {
    title: "Serali",
    subtitle: "Sitio institucional",
    cover: "/img/cover-serali.png",
    slides: [{ src: "/img/serali1.png" }, { src: "/img/serali2.png" }],
    href: "https://serali.com.mx/",
  },
  {
    title: "Travel",
    subtitle: "Concept de sitio",
    cover: "/img/cover-travel.png",
    slides: [{ src: "/img/sitiotravel.png" }],
  },
  {
    title: "Panel & Figma",
    subtitle: "Prototipo y sistema",
    cover: "/img/panel.png",
    slides: [{ src: "/img/figma.png" }, { src: "/img/panel.png" }],
  },
  {
    title: "App tipo Uber",
    subtitle: "Serali — emprende",
    cover: "/img/sitioapp-cover.png",
    slides: [{ src: "/img/sitio-transporte.png" }, { src: "/img/sitio-app.png" }],
    href: "https://serali.com.mx/emprende-con-tu-propia-app-tipo-uber/",
  },
  {
    title: "Sitio con IA",
    subtitle: "Frontend experimental",
    cover: "/img/cover-sitiocoffe.png",
    slides: [{ src: "/img/sitio-ia.png" }, { src: "/img/sitiowebcoffe.jpg" }],
    href: "https://franciscorauda.github.io/sitio-web-con-IA/",
  },
  {
    title: "Bienes raíces",
    subtitle: "Belén, El Salvador",
    cover: "/img/cover-moviliaria.png",
    slides: [{ src: "/img/bienes-raices.png" }, { src: "/img/bienes.png" }],
    href: "https://bienesraiceselsalvadorbelen.com/",
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen bg-surface px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Diseño y desarrollo web
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          Landings, sitios y paneles con enfoque en conversión.
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
            externalHref={item.href}
            externalLabel="Ir al sitio"
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
