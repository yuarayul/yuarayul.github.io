import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/portfolio/SectionPage";
import { sections } from "@/data/sections";

const section = sections.find((item) => item.key === "album")!;

export const Route = createFileRoute("/album-identities")({
  head: () => ({
    meta: [
      { title: section.metaTitle },
      { name: "description", content: section.metaDescription },
      { property: "og:title", content: section.metaTitle },
      { property: "og:description", content: section.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
