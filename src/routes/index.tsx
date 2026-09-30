import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/portfolio/PageShell";
import { Project } from "@/components/portfolio/Project";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { Ticker } from "@/components/portfolio/Ticker";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "0piumvisuals — Visual Direction & Graphic Design" },
      { name: "description", content: "Nairobi-based visual direction for events, music, brands, and culture by 0piumvisuals." },
      { property: "og:title", content: "0piumvisuals — Visual Direction & Graphic Design" },
      { property: "og:description", content: "Explore event visuals, album artwork, and brand identity from Nairobi-based 0piumvisuals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="pt-4" aria-label="Creative disciplines">
          <Ticker text="EVENTS VISUALS DIRECTION • ALBUM VISUALS DIRECTION • BRAND IDENTITY DIRECTION" />
        </section>
        <section id="work" className="flex scroll-mt-24 flex-col" aria-label="Selected work">
          {projects.map((item) => <Project key={item.id} {...item} />)}
        </section>
        <Ticker text="AVAILABLE FOR PROJECTS 2026 • LATEST CATALOGUE" label="Availability" />
      </main>
      <SiteFooter />
    </PageShell>
  );
}
