// components/blog/PortableArticle.tsx
"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

type ImgVal = {
  assetRef?: string;
  asset?: { _ref: string };
  alt?: string;
  caption?: string;
  lqip?: string;
};
const refOf = (v: ImgVal) => v.assetRef || v.asset?._ref;

type Props = {
  value: PortableTextBlock[];
  /** por si quieres un contenedor distinto */
  className?: string;
};

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-in-blue-title font-in-nunito font-semibold text-4xl md:text-5xl mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-in-blue-title font-in-nunito font-semibold text-2xl md:text-4xl mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-in-blue-title font-in-nunito font-semibold text-xl md:text-3xl mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-in-blue-title font-in-nunito font-semibold text-lg md:text-2xl mt-5 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="font-in-poppins text-in-gray-base leading-7 text-sm md:text-base my-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-in-cyan/60 pl-4 italic my-6 text-in-gray-base">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="pl-6 my-4 space-y-1 text-in-gray-base list-disc marker:text-in-gray-light">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="pl-6 my-4 space-y-1 text-in-gray-base list-decimal marker:text-in-gray-light">
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const ext = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          target={ext ? "_blank" : undefined}
          rel={ext ? "noopener noreferrer" : undefined}
          className="text-in-cyan underline underline-offset-4 hover:no-underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline underline-offset-2">{children}</span>,
    code: ({ children }) => (
      <code className="px-1 py-0.5 rounded bg-black/10 text-in-gray-base text-sm">{children}</code>
    ),
  },

  types: {
    image: ({ value }) => {
      const v = value as ImgVal;
      const ref = refOf(v);
      if (!ref) return null;
      const src = urlFor(ref).width(1200).fit("max").auto("format").url();
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={v.alt || ""}
            width={400}
            height={225}
            className="rounded-2xl w-auto h-auto object-contain"
            placeholder={v.lqip ? "blur" : "empty"}
            blurDataURL={v.lqip}
          />
          {v.caption && <figcaption className="text-sm text-gray-500 mt-2">{v.caption}</figcaption>}
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="my-6 overflow-x-auto rounded-2xl p-4 bg-zinc-900 text-zinc-100">
        <code className="text-sm">{(value as { code?: string }).code}</code>
      </pre>
    ),
    divider: () => <hr className="my-10 border-t border-gray-300/50" />,
    youtube: ({ value }) => {
      const v = value as { url?: string; videoId?: string };
      const url = v.url || (v.videoId ? `https://www.youtube.com/embed/${v.videoId}` : "");
      if (!url) return null;
      return (
        <div className="my-8 aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            src={url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      );
    },
    callout: ({ value }) => {
      const v = value as { title?: string; body?: string };
      return (
        <div className="my-6 rounded-2xl border p-4 bg-cyan-50/50 dark:bg-cyan-950/20">
          {v.title && <p className="font-semibold mb-1">{v.title}</p>}
          {v.body && <p className="text-sm">{v.body}</p>}
        </div>
      );
    },
  },
};

export function PortableArticle({ value, className }: Props) {
  if (!value?.length) return null;

  // Contenedor base sin prose: controla el ritmo vertical global
  const container = [
    "max-w-none",
    "text-in-gray-base",          // color base del texto
    "space-y-12",                  // ritmo entre bloques hermanos *que no tengan su propio margin*
  ].join(" ");

  return (
    <article className={className ? `${container} ${className}` : container}>
      <PortableText value={value} components={components} />
    </article>
  );
}
