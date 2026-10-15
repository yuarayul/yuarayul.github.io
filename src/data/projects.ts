import type { SectionKey } from "./sections";

export type ProjectItem = {
  id: number;
  title: string;
  client: string;
  image: string;
  category?: string;
  /** Which identities page this project appears on. Leave out to show it on the home page only. */
  section?: SectionKey;
  year: string;
};

export const projects: ProjectItem[] = [
  { id: 10, title: "ALBUM IDENTITY", client: "Chrch", image: "/albumdirection1.webp", category: "Album Visual Direction", section: "album", year: "2025" },
  { id: 1, title: "POSTER DESIGN", client: "OpiumVisuals", image: "/ov1.webp", year: "2026" },
  { id: 2, title: "EVENT IDENTITY DESIGN", client: "Nuru Fest", image: "/eventidentity2.webp", category: "Event Visual Direction", section: "event", year: "2025" },
  { id: 3, title: "EVENT IDENTITY DESIGN", client: "Fusion Dance", image: "/eventidentity1.webp", category: "Event Visual Direction", section: "event", year: "2025" },
  { id: 4, title: "BRAND IDENTITY DESIGN", client: "KAASKAZINI", image: "/brandidentity1.webp", category: "Brand Identity Direction", section: "brand", year: "2025" },
  { id: 5, title: "POSTER DESIGN", client: "Opium Visuals", image: "/ov5.webp", year: "2025" },
  { id: 6, title: "POSTER DESIGN", client: "Black Basket", image: "/ov6.webp", year: "2026" },
  { id: 7, title: "ALBUM ART DESIGN", client: "BIRRRR", image: "/ov7.webp", section: "album", year: "2026" },
  { id: 8, title: "ALBUM ART DESIGN", client: "Ctrl", image: "/ov8.webp", section: "album", year: "2026" },
  { id: 9, title: "ALBUM ART DESIGN", client: "Ctrl", image: "/ov9.webp", section: "album", year: "2026" }
  
];
