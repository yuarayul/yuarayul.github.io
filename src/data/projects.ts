export type ProjectItem = {
  id: number;
  title: string;
  client: string;
  image: string;
  category?: string;
  year: string;
};

export const projects: ProjectItem[] = [
  { id: 1, title: "FLYER DESIGN", client: "Kurosaki", image: "/ov1.webp", category: "Album Visual Direction", year: "2025" },
  { id: 2, title: "EVENT POSTER DESIGN", client: "Kaaskazini Fest", image: "/ov2.webp", category: "Event Visual Direction", year: "2025" },
  { id: 3, title: "EVENT POSTER DESIGN", client: "Lil Maina", image: "/ov3.webp", category: "Event Visual Direction", year: "2025" },
  { id: 4, title: "EVENT POSTER DESIGN", client: "Spice and Ice Bar", image: "/ov4.webp", category: "Event Visual Direction", year: "2025" },
  { id: 5, title: "POSTER DESIGN", client: "Opium Visuals", image: "/ov5.webp", year: "2025" },
  { id: 6, title: "POSTER DESIGN", client: "Black Basket", image: "/ov6.webp", year: "2026" },
  { id: 7, title: "ALBUM ART DESIGN", client: "BIRRRR", image: "/ov7.webp", year: "2026" },
  { id: 8, title: "ALBUM ART DESIGN", client: "Ctrl", image: "/ov8.webp", year: "2026" },
  { id: 9, title: "ALBUM ART DESIGN", client: "Ctrl", image: "/ov9.webp", year: "2026" }
];
