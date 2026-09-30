import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-brutalist-pink text-off-white selection:bg-ink-black selection:text-brutalist-pink">
      <SiteHeader />
      {children}
    </div>
  );
}
