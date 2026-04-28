import React from "react";
import Image from "next/image";
import Link from "next/link";
import Perfil from "/public/img/foto-profesional.jpg";

const Header = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-surface py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-glow/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:items-center md:justify-between md:gap-16 md:px-6">
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-green">
            Hola, soy
          </p>

          <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Daniel Mejia
          </h1>

          <h2 className="mb-5 text-xl font-semibold text-brand-glow md:text-2xl">
            Web Designer &amp; Frontend Developer
          </h2>

          <p className="mb-8 text-base leading-relaxed text-gray-400 md:text-lg">
            Creo interfaces modernas, funcionales y centradas en la experiencia
            del usuario.
          </p>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="/#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-glow-blue-sm transition hover:bg-brand-glow"
            >
              Ver proyectos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-green bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-green/10"
            >
              Contactarme
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-brand-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-md shrink-0">
          <div
            className="absolute inset-0 -m-4 rounded-[2rem] bg-brand-blue/30 blur-2xl md:-m-8"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-glow-blue ring-1 ring-white/5">
            <Image
              src={Perfil}
              alt="Daniel Mejia - Web Designer & Frontend Developer"
              className="aspect-[4/5] w-full object-cover"
              width={500}
              height={625}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
