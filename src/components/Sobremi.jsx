import React, { useEffect } from "react";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const skillLevels = [
  { name: "HTML/CSS", detail: "Nivel avanzado · dominio sólido" },
  { name: "JavaScript", detail: "Nivel intermedio · uso frecuente" },
  { name: "React", detail: "Nivel básico · proyectos personales" },
  {
    name: "UI/UX Design",
    detail: "Nivel intermedio · diseño y prototipado",
  },
];

function SkillLevel({ name, detail }) {
  return (
    <p className="text-sm leading-snug">
      <span className="font-semibold text-gray-200">{name}</span>
      <span className="text-gray-600"> — </span>
      <span className="text-gray-400">{detail}</span>
    </p>
  );
}

const Sobremi = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="about" className="bg-surface px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_340px] lg:gap-12">
        <div
          className="rounded-2xl border border-white/5 bg-surface-card p-8 shadow-card md:p-10"
          data-aos="fade-up"
        >
          <div className="mb-6 flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-blue shadow-[0_0_12px_rgba(59,130,246,0.9)]"
              aria-hidden
            />
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Sobre mí
            </h2>
          </div>

          <p className="mb-4 text-gray-400 leading-relaxed">
            Soy diseñador web y frontend developer enfocado en crear interfaces
            modernas, funcionales y centradas en la experiencia del usuario.
          </p>

          <p className="mb-8 text-gray-400 leading-relaxed">
            Me especializo en transformar ideas en productos digitales
            visualmente atractivos, optimizados para usabilidad y rendimiento.
          </p>

          <a
            href="/#servicios"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-blue/80 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-glow hover:bg-brand-blue/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-brand-glow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Conocer más
          </a>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-white/5 bg-surface-elevated/60 p-4 text-center">
              <p className="text-xl font-bold text-brand-glow">+3</p>
              <p className="text-xs text-gray-400">Proyectos reales</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-surface-elevated/60 p-4 text-center">
              <p className="text-xl font-bold text-brand-green">UI/UX</p>
              <p className="text-xs text-gray-400">Enfoque</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-surface-elevated/60 p-4 text-center">
              <p className="text-xl font-bold text-brand-glow">Frontend</p>
              <p className="text-xs text-gray-400">Desarrollo</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-surface-elevated/60 p-4 text-center">
              <p className="text-xl font-bold text-brand-green">100%</p>
              <p className="text-xs text-gray-400">Responsive</p>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
          <div className="rounded-2xl border border-white/5 bg-surface-card p-6 shadow-card">
            <h3 className="mb-5 text-lg font-bold text-white">Habilidades</h3>
            <div className="flex flex-col gap-4">
              {skillLevels.map((s) => (
                <SkillLevel key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-surface-card p-6 shadow-card">
            <h3 className="mb-4 text-lg font-bold text-white">Mi rol</h3>
            <ul className="space-y-2.5 text-gray-300">
              <li className="flex gap-2">
                <span className="text-brand-green">✔</span>
                Diseño UI/UX
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green">✔</span>
                Desarrollo Frontend
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green">✔</span>
                Optimización Web
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green">✔</span>
                Mantenimiento y soporte
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/5 bg-surface-card p-6 shadow-card">
            <h3 className="mb-4 text-lg font-bold text-white">Tecnologías</h3>
            <div className="grid grid-cols-4 gap-2 text-center sm:grid-cols-4">
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-elevated/50 p-3">
                <IoLogoHtml5 className="mb-1 text-3xl text-orange-500" />
                <p className="text-[10px] text-gray-400">HTML5</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-elevated/50 p-3">
                <IoLogoCss3 className="mb-1 text-3xl text-blue-500" />
                <p className="text-[10px] text-gray-400">CSS3</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-elevated/50 p-3">
                <IoLogoJavascript className="mb-1 text-3xl text-yellow-400" />
                <p className="text-[10px] text-gray-400">JS</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-elevated/50 p-3">
                <SiFigma className="mb-1 text-3xl text-purple-400" />
                <p className="text-[10px] text-gray-400">Figma</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-elevated/50 p-3">
                <FaPhp className="mb-1 text-3xl text-purple-500" />
                <p className="text-[10px] text-gray-400">PHP</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-elevated/50 p-3">
                <FaWordpress className="mb-1 text-3xl text-blue-400" />
                <p className="text-[10px] text-gray-400">WP</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-elevated/50 p-3">
                <SiAdobephotoshop className="mb-1 text-3xl text-blue-600" />
                <p className="text-[10px] text-gray-400">Ps</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-surface-elevated/50 p-3">
                <SiAdobeillustrator className="mb-1 text-3xl text-orange-600" />
                <p className="text-[10px] text-gray-400">Ai</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Sobremi;
