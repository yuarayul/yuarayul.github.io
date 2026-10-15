import { Link } from "@tanstack/react-router";

import { PageShell } from "@/components/portfolio/PageShell";
import { Project } from "@/components/portfolio/Project";
import { SectionNav } from "@/components/portfolio/SectionNav";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { Ticker } from "@/components/portfolio/Ticker";
import { projects } from "@/data/projects";
import type { Section } from "@/data/sections";

/** Shared layout for the brand, event, and album identities pages. */
export function SectionPage({ section }: { section: Section }) {
  const items = projects.filter((item) => item.section === section.key);

  return (
    <PageShell>
      <main>
        <section className="border-b-2 border-ink-black px-4 py-12 sm:px-8 md:px-12 md:py-20" aria-labelledby="section-title">
          <p className="mb-5 text-sm font-black text-ink-black">{section.label}</p>
          <h1 id="section-title" className="max-w-5xl text-5xl font-black leading-[0.9] sm:text-7xl md:text-8xl">{section.title}</h1>
          <p className="mt-8 max-w-2xl text-base font-bold leading-relaxed sm:text-lg">{section.description}</p>
        </section>

        <SectionNav current={section.key} />

        <section id="work" className="flex scroll-mt-24 flex-col" aria-label={section.title}>
          {items.length > 0 ? (
            items.map((item) => <Project key={item.id} {...item} />)
          ) : (
            <div className="flex min-h-[40vh] flex-col items-start justify-between gap-10 border-b-2 border-ink-black p-6 md:flex-row md:items-end md:p-12">
              <p className="max-w-3xl text-4xl font-black leading-[0.95] sm:text-6xl">NEW CASE STUDIES ARE ON THE WAY.</p>
              <Link to="/" hash="work" className="border-b-2 border-ink-black py-2 text-xl font-black transition-colors hover:text-ink-black">SEE ALL WORK</Link>
            </div>
          )}
        </section>

        <Ticker text={section.ticker} label={section.title} />
      </main>
      <SiteFooter />
    </PageShell>
  );
}
