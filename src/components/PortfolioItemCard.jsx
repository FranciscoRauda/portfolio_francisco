import React from "react";
import Image from "next/image";
import Link from "next/link";

const shellClass =
  "group overflow-hidden rounded-2xl border border-white/5 bg-surface-card shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-glow-blue-sm";

/**
 * Misma línea visual que "Proyectos destacados".
 * - `href`: tarjeta enlazada (categorías).
 * - `onOpen`: CTA + clic en imagen abren la vista previa (p. ej. Lightbox).
 */
export default function PortfolioItemCard({
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
  description,
  href,
  onOpen,
  linkLabel = "Explorar →",
  actionLabel = "Ver proyecto →",
  externalHref,
  externalLabel = "Ir al sitio",
  priority = false,
  children,
  imageHeightClass = "h-[200px]",
  showCta = true,
}) {
  const media = children ?? (
    <Image
      src={imageSrc}
      alt={imageAlt || title}
      width={800}
      height={450}
      priority={priority}
      className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${imageHeightClass}`}
    />
  );

  const interactiveMedia =
    href || children ? (
      <div className="relative overflow-hidden">{media}</div>
    ) : (
      <button
        type="button"
        className="relative w-full cursor-pointer overflow-hidden text-left"
        onClick={showCta && typeof onOpen === "function" ? onOpen : undefined}
      >
        {media}
      </button>
    );

  const footer = (
    <div className="p-5 md:p-6">
      <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">{title}</h3>
      {subtitle ? (
        <p className="mb-2 text-sm font-medium text-brand-glow/90">{subtitle}</p>
      ) : null}
      {description ? (
        <p className="mb-5 text-sm leading-relaxed text-gray-400">{description}</p>
      ) : subtitle ? (
        <div className="mb-5" />
      ) : null}

      {href ? (
        <span className="text-sm font-semibold text-brand-green transition group-hover:underline">
          {linkLabel}
        </span>
      ) : (
        <div className="flex flex-col items-start gap-1">
          {showCta && typeof onOpen === "function" ? (
            <button
              type="button"
              className="text-sm font-semibold text-brand-green transition hover:text-brand-green/90 hover:underline"
              onClick={onOpen}
            >
              {actionLabel}
            </button>
          ) : null}
          {externalHref ? (
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-glow transition hover:underline"
            >
              {externalLabel}
            </a>
          ) : null}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`block ${shellClass}`}>
        {interactiveMedia}
        {footer}
      </Link>
    );
  }

  return (
    <article className={shellClass}>
      {interactiveMedia}
      {footer}
    </article>
  );
}
