import Header from "@/components/Header";
import Sobremi from "@/components/Sobremi";
import Proyectos from "@/components/Proyectos";
import Imagenes from "@/components/Imagenes";
import Servicios from "@/components/Servicios";
import NewSectionPlaceholder from "@/components/NewSectionPlaceholder";
import projectsData from "../data/projectsData";

export default function Home() {
  return (
    <>
      <Header />
      <Sobremi />
      <section
        id="proyectos"
        className="scroll-mt-24 bg-surface px-4 py-20 md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-center gap-3 text-center md:mb-16">
            <div className="flex items-center justify-center gap-3">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green shadow-[0_0_12px_rgba(74,222,128,0.75)]"
                aria-hidden
              />
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Proyectos destacados
              </h2>
            </div>
            <p className="max-w-xl text-gray-400">
              Una selección de trabajos donde combino diseño y desarrollo
              frontend.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <Proyectos key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <NewSectionPlaceholder />
      <Servicios />
      <Imagenes />
    </>
  );
}
