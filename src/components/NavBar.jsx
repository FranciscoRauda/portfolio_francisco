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
    <header className="sticky top-0 z-[100] w-full bg-[#101a2f] px-3 pb-3 pt-5 md:px-6">
      <nav className="mx-auto flex max-w-6xl items-center gap-3 rounded-[999px] border border-white/[0.14] bg-surface/98 px-4 py-2.5 shadow-[0_12px_44px_-8px_rgba(0,0,0,0.55)] backdrop-blur-xl ring-1 ring-white/[0.06] md:gap-4 md:px-7 md:py-3">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center text-white"
          onClick={() => setIsOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.png"
            width={200}
            height={80}
            alt="Logo"
            className="h-9 w-auto max-w-[140px] object-contain md:h-10 md:max-w-[180px]"
          />
        </Link>

        <div className="hidden min-w-0 flex-1 justify-center md:flex">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-x-8">
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
          className="ml-auto mr-1 hidden shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white/95 md:mr-0 md:inline-flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-slate-800"
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
          CV
        </a>

        <button
          type="button"
          className="ml-auto rounded-full p-2 text-gray-300 hover:bg-white/10 hover:text-white md:ml-0 md:hidden"
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
          className="fixed inset-0 top-[5.5rem] z-[90] bg-surface md:hidden"
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
