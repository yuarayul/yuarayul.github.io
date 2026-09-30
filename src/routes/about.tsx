import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight } from "lucide-react";

import { PageShell } from "@/components/portfolio/PageShell";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { Ticker } from "@/components/portfolio/Ticker";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 0piumvisuals" },
      { name: "description", content: "Meet 0piumvisuals, a Nairobi-based independent practice shaping visual identities, events, and apparel." },
      { property: "og:title", content: "About — 0piumvisuals" },
      { property: "og:description", content: "Visual identity, event direction, and apparel design rooted in Nairobi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const services = [
  ["01", "BRAND IDENTITY", "Distinct systems for artists, brands, and cultural projects—from a defining visual language to the details that make it recognisable."],
  ["02", "EVENT DIRECTION", "Campaign worlds built around a moment: key artwork, digital rollouts, posters, and visual systems that move from screen to space."],
  ["03", "APPAREL DESIGN", "Graphic concepts and placements for garments, merchandise, and limited editions made to live beyond the campaign."],
];

function AboutPage() {
  return (
    <PageShell>
      <main>
        <section className="grid min-h-[72vh] items-end border-b-2 border-ink-black px-4 py-12 sm:px-8 md:grid-cols-[1fr_2fr] md:px-12 md:py-20">
          <p className="self-start text-sm font-black">INDEPENDENT CREATIVE PRACTICE<br />NAIROBI, KENYA</p>
          <div>
            <p className="mb-5 text-sm font-black text-ink-black">ABOUT 0PIUMVISUALS</p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl">IMAGES THAT STAY AFTER THE MOMENT ENDS.</h1>
          </div>
        </section>

        <section className="grid border-b-2 border-ink-black md:grid-cols-[1fr_2fr]">
          <h2 className="border-b-2 border-ink-black p-6 text-lg font-black md:border-b-0 md:border-r-2 md:p-12">THE PRACTICE</h2>
          <div className="p-6 md:p-12">
            <p className="max-w-4xl text-3xl font-black leading-tight sm:text-5xl">0PIUMVISUALS BUILDS BOLD, CULTURE-LED VISUAL WORLDS FOR MUSIC, EVENTS, BRANDS, AND CLOTHING.</p>
            <p className="mt-10 max-w-2xl text-base font-bold leading-relaxed sm:text-lg">The work moves between strategy and instinct—finding the attitude of a project, then translating it into clear, memorable design. Every direction is built to feel specific to the people, sound, and scene behind it.</p>
          </div>
        </section>

        <section aria-labelledby="services-title">
          <div className="flex items-end justify-between border-b-2 border-ink-black p-6 md:p-12">
            <h2 id="services-title" className="text-4xl font-black sm:text-6xl">SERVICES</h2>
            <span className="text-sm font-black">01—03</span>
          </div>
          {services.map(([number, title, description]) => (
            <article key={number} className="group grid border-b-2 border-ink-black transition-colors duration-300 hover:bg-ink-black hover:text-brutalist-pink md:grid-cols-[0.25fr_1fr_1.5fr]">
              <p className="p-6 text-sm font-black md:p-10">{number}</p>
              <h3 className="px-6 pb-4 text-3xl font-black md:p-10 md:text-5xl">{title}</h3>
              <p className="max-w-2xl px-6 pb-8 text-base font-bold leading-relaxed md:p-10 md:text-lg">{description}</p>
            </article>
          ))}
        </section>

        <section className="flex min-h-[42vh] flex-col items-start justify-between gap-10 p-6 md:flex-row md:items-end md:p-12">
          <h2 className="max-w-4xl text-5xl font-black leading-[0.9] sm:text-7xl md:text-8xl">HAVE A PROJECT IN MIND?</h2>
          <Link to="/contact" className="group flex items-center gap-3 border-b-2 border-ink-black py-2 text-xl font-black transition-colors hover:text-ink-black">START A CONVERSATION <ArrowDownRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" /></Link>
        </section>
        <Ticker text="VISUAL IDENTITY • EVENT DIRECTION • APPAREL DESIGN" label="Services" />
      </main>
      <SiteFooter />
    </PageShell>
  );
}
