import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinkClass = (active) =>
  [
    "relative inline-block py-2 text-sm font-medium transition-colors md:text-[0.95rem]",
    active ? "text-white" : "text-gray-400 hover:text-white",
  ].join(" ");

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const path = router.pathname;

  const isActive = (href) => {
    if (href === "/") return path === "/";
    return path === href || path.startsWith(`${href}/`);
  };

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/#about", label: "Sobre mí", hash: true },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/#servicios", label: "Servicios", hash: true },
    { href: "/contacto", label: "Contáctame" },
    {
      href: "https://franciscorauda.github.io/cv-francisco/",
      label: "CV",
      external: true,
    },
  ];

  const cvHref = "https://franciscorauda.github.io/cv-francisco/";

  const renderLinkInner = (label, active) => (
    <span className={navLinkClass(active)}>
      {label}
      {active ? (
        <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-brand-blue" />
      ) : null}
    </span>
  );

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/5 bg-surface/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center px-4 py-3 md:px-6 md:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center text-white"
          onClick={() => setIsOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.png"
            width={200}
            height={80}
            alt="Logo"
            className="h-10 w-auto max-w-[160px] object-contain md:h-12 md:max-w-[200px]"
          />
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-8">
            {links.map(({ href, label, external, hash }) => {
              if (external) {
                return (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      {renderLinkInner(label, false)}
                    </a>
                  </li>
                );
              }
              if (hash) {
                return (
                  <li key={href}>
                    <a href={href} className="inline-block">
                      {renderLinkInner(label, false)}
                    </a>
                  </li>
                );
              }
              return (
                <li key={href}>
                  <Link href={href} className="inline-block">
                    {renderLinkInner(label, isActive(href))}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <a
          href={cvHref}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto mr-2 hidden shrink-0 items-center gap-2 rounded-lg border border-brand-glow/70 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-blue hover:bg-brand-blue/10 md:mr-0 md:inline-flex"
        >
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Descargar CV
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-300 hover:bg-white/5 hover:text-white md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {isOpen ? (
        <div
          className="fixed inset-0 top-[57px] z-[90] bg-surface md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <ul className="flex flex-col gap-2 px-6 py-6">
            {links.map(({ href, label, external, hash }) => {
              if (external) {
                return (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg px-4 py-3 text-center text-lg hover:bg-white/5"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                );
              }
              if (hash) {
                return (
                  <li key={href}>
                    <a
                      href={href}
                      className="block rounded-lg px-4 py-3 text-center text-lg text-white hover:bg-white/5"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="block rounded-lg px-4 py-3 text-center text-lg text-white hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <a
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-brand-glow/70 px-4 py-3 text-center text-lg font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-brand-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;
