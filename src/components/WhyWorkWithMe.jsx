import Image from "next/image";
import Link from "next/link";
import {
  FaBolt,
  FaChartBar,
  FaMobileAlt,
  FaHeadset,
  FaArrowRight,
  FaWordpress,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiFigma } from "react-icons/si";

const features = [
  {
    icon: FaBolt,
    title: "Diseños modernos",
    description:
      "Sitios web atractivos y personalizados para tu marca.",
  },
  {
    icon: FaChartBar,
    title: "Enfoque en resultados",
    description:
      "Diseños pensados para convertir visitantes en clientes.",
  },
  {
    icon: FaMobileAlt,
    title: "100% responsivo",
    description:
      "Experiencia perfecta en todos los dispositivos.",
  },
  {
    icon: FaHeadset,
    title: "Soporte continuo",
    description:
      "Te acompaño después de la entrega.",
  },
];

const techLogos = [
  { icon: FaWordpress, label: "WordPress" },
  { icon: FaReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiFigma, label: "Figma" },
];

const WhyWorkWithMe = () => {
  return (
    <section
      id="por-que-trabajar-conmigo"
      className="scroll-mt-24 overflow-hidden bg-surface px-4 py-20 md:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 mx-auto flex w-fit items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-1.5 text-sm font-medium text-brand-green">
              <span
                className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                aria-hidden
              />
              Tu Socio Digital
            </div>

            <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              ¿Por qué{" "}
              <span className="bg-gradient-to-r from-brand-glow to-cyan-400 bg-clip-text text-transparent">
                trabajar conmigo?
              </span>
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400">
              Porque me enfoco en crear soluciones web que combinan diseño,
              rendimiento y resultados para tu negocio.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-surface-card/80 p-5 shadow-card transition hover:border-brand-blue/30"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-glow">
                      <Icon className="text-xl" aria-hidden />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-glow-blue-sm transition hover:bg-brand-glow"
              >
                Hablemos de tu proyecto
                <FaArrowRight aria-hidden />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-blue/25 via-cyan-500/10 to-transparent blur-2xl"
              aria-hidden
            />
            <Image
              src="/img/tu-idea-en-la-web-laptop.png"
              alt="Laptop mostrando un proyecto web con el mensaje Tu idea en la web"
              width={486}
              height={421}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="relative mx-auto h-auto w-full drop-shadow-2xl"
              priority={false}
            />
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Confianza que respalda
          </p>
          <h3 className="mx-auto mb-10 max-w-3xl text-2xl font-bold text-white md:text-3xl">
            Clientes y proyectos que{" "}
            <span className="text-brand-glow">confían en mi trabajo</span>
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-gray-400">
            {techLogos.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-lg font-medium opacity-80 transition hover:opacity-100 hover:text-white"
                >
                  <Icon className="text-2xl md:text-3xl" aria-hidden />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
