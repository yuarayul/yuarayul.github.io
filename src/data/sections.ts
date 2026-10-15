export type SectionKey = "brand" | "event" | "album";

export type Section = {
  key: SectionKey;
  path: "/brand-identities" | "/event-identities" | "/album-identities";
  navLabel: string;
  title: string;
  label: string;
  description: string;
  ticker: string;
  metaTitle: string;
  metaDescription: string;
};

export const sections: Section[] = [
  {
    key: "brand",
    path: "/brand-identities",
    navLabel: "BRAND IDENTITIES",
    title: "BRAND IDENTITIES",
    label: "BRAND IDENTITY DIRECTION",
    description:
      "Distinct systems for artists, brands, and cultural projects—from a defining visual language to the details that make it recognisable.",
    ticker: "BRAND IDENTITY DIRECTION • VISUAL SYSTEMS • LOGOS • GUIDELINES",
    metaTitle: "Brand Identities — 0piumvisuals",
    metaDescription: "Brand identity direction for artists, brands, and cultural projects by Nairobi-based 0piumvisuals.",
  },
  {
    key: "event",
    path: "/event-identities",
    navLabel: "EVENT IDENTITIES",
    title: "EVENT IDENTITIES",
    label: "EVENT VISUALS DIRECTION",
    description:
      "Campaign worlds built around a moment: key artwork, digital rollouts, posters, and visual systems that move from screen to space.",
    ticker: "EVENT VISUALS DIRECTION • KEY ARTWORK • POSTERS • ROLLOUTS",
    metaTitle: "Event Identities — 0piumvisuals",
    metaDescription: "Event posters, key artwork, and visual rollouts from Nairobi-based 0piumvisuals.",
  },
  {
    key: "album",
    path: "/album-identities",
    navLabel: "ALBUM IDENTITIES",
    title: "ALBUM IDENTITIES",
    label: "ALBUM VISUALS DIRECTION",
    description:
      "Cover art and visual direction for artists and releases—images built to sit alongside the sound.",
    ticker: "ALBUM VISUALS DIRECTION • COVER ART • RELEASE VISUALS",
    metaTitle: "Album Identities — 0piumvisuals",
    metaDescription: "Album artwork and release visuals from Nairobi-based 0piumvisuals.",
  },
];
