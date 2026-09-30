import { Link } from "@tanstack/react-router";

const navClass =
  "relative py-2 text-xs font-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-ink-black after:transition-transform after:duration-300 hover:text-ink-black hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-black sm:text-sm";

export function SiteHeader() {
  return (
    <nav aria-label="Primary navigation" className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b-2 border-ink-black bg-brutalist-pink px-4 py-5 sm:px-6">
      <Link to="/" className="shrink-0 text-lg font-black text-off-white sm:text-2xl">
        OPIUM VISUALS®
      </Link>
      <div className="flex items-center gap-4 text-off-white sm:gap-8">
        <Link to="/" hash="work" className={navClass}>WORK</Link>
        <Link to="/about" className={navClass} activeProps={{ className: `${navClass} text-ink-black after:scale-x-100` }}>ABOUT</Link>
        <Link to="/contact" className={navClass} activeProps={{ className: `${navClass} text-ink-black after:scale-x-100` }}>CONTACT</Link>
      </div>
    </nav>
  );
}
