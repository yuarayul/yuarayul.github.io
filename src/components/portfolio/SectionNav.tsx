import { Link } from "@tanstack/react-router";

import { sections, type SectionKey } from "@/data/sections";

const itemClass =
  "flex flex-1 items-center justify-center border-r-2 border-ink-black px-2 py-4 text-center text-xs font-black transition-colors duration-300 last:border-r-0 hover:bg-ink-black hover:text-brutalist-pink focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-ink-black sm:text-sm md:py-5";
const activeClass = "bg-ink-black text-brutalist-pink";

/** Category strip shown above the work list on the home page and every identities page. */
export function SectionNav({ current }: { current?: SectionKey }) {
  return (
    <nav aria-label="Work categories" className="flex border-b-2 border-ink-black bg-brutalist-pink text-off-white">
      <Link to="/" hash="work" className={`${itemClass} ${current ? "" : activeClass}`} aria-current={current ? undefined : "page"}>
        ALL
      </Link>
      {sections.map((section) => {
        const isCurrent = section.key === current;
        return (
          <Link key={section.key} to={section.path} className={`${itemClass} ${isCurrent ? activeClass : ""}`} aria-current={isCurrent ? "page" : undefined}>
            {section.navLabel}
          </Link>
        );
      })}
    </nav>
  );
}
