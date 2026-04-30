import React from "react";
import PortfolioItemCard from "@/components/PortfolioItemCard";

const videos = [
  {
    title: "Proyecto audiovisual I",
    subtitle: "Edición y motion",
    embed: "https://www.youtube.com/embed/z1kyd9Y58Dk?si=lkMRsiP1C7o1vGB9",
  },
  {
    title: "Proyecto audiovisual II",
    subtitle: "Edición y motion",
    embed: "https://www.youtube.com/embed/Ng1RF-jG6Qw?si=svCKOkQ0fOvv3V37",
  },
  {
    title: "Proyecto audiovisual III",
    subtitle: "Short — YouTube",
    embed: "https://www.youtube.com/embed/ZnQmrROQBnc",
  },
];

const Page = () => {
  return (
    <section className="min-h-screen bg-surface px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">Videos</h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          Piezas para redes y contenido en movimiento.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {videos.map((v) => (
          <PortfolioItemCard
            key={v.title}
            title={v.title}
            subtitle={v.subtitle}
            showCta={false}
          >
            <div className="aspect-video w-full bg-black">
              <iframe
                title={v.title}
                src={v.embed}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </PortfolioItemCard>
        ))}
      </div>
    </section>
  );
};

export default Page;
