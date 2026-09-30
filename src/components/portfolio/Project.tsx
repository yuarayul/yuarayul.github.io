import { useEffect, useRef, useState } from "react";

import type { ProjectItem } from "@/data/projects";

type ProjectProps = Pick<ProjectItem, "title" | "image" | "client" | "year">;

export function Project({ title, image, client, year }: ProjectProps) {
  const articleRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageAvailable, setImageAvailable] = useState(true);

  useEffect(() => {
    const node = articleRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={articleRef} className={`project-reveal group border-b-2 border-ink-black bg-brutalist-pink text-off-white transition-colors duration-700 hover:bg-ink-black ${isVisible ? "is-visible" : ""}`}>
      <div className="flex flex-col items-center px-4 py-8 md:px-20 md:py-12">
        <div className="project-image relative w-full max-w-2xl overflow-hidden border-2 border-ink-black bg-off-white">
          {imageAvailable ? (
            <img loading="lazy" decoding="async" src={image} alt={`${title} — ${client}`} onError={() => setImageAvailable(false)} className="h-auto w-full scale-100 object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
          ) : (
            <div className="grid aspect-[4/5] place-items-center bg-off-white p-8 text-center text-ink-black" role="img" aria-label={`${title} — artwork unavailable`}>
              <div><p className="text-4xl font-black sm:text-6xl">{title}</p><p className="mt-4 text-sm font-black">{client} / {year}</p></div>
            </div>
          )}
          <span className="project-cursor pointer-events-none absolute left-1/2 top-1/2 grid size-24 place-items-center rounded-full bg-ink-black text-xs font-black text-off-white" aria-hidden="true">VIEW</span>
        </div>
        <div className="mt-6 flex w-full max-w-2xl items-end justify-between gap-6 text-off-white">
          <div>
            <h2 className="text-2xl font-black leading-none sm:text-4xl">{title}</h2>
            <p className="mt-2 text-xs font-bold opacity-80 transition-opacity group-hover:opacity-100">{client}</p>
          </div>
          <p className="text-lg font-black opacity-80 transition-opacity group-hover:opacity-100">{year}</p>
        </div>
      </div>
    </article>
  );
}
