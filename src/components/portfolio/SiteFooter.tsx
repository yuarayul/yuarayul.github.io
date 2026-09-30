import { Link } from "@tanstack/react-router";

const actionClass = "flex min-h-24 flex-1 items-center justify-center border-2 border-ink-black p-5 text-center text-2xl font-black transition-colors duration-300 hover:bg-ink-black hover:text-brutalist-pink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-black md:text-4xl";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center border-t-2 border-ink-black bg-brutalist-pink p-8 text-off-white sm:p-12 md:p-24">
      <h2 className="text-center text-7xl font-black italic leading-none sm:text-8xl md:text-[12rem]">LET&apos;S<br />CHAT</h2>
      <div className="mt-12 flex w-full max-w-4xl flex-col flex-wrap justify-center gap-6 md:flex-row md:gap-12">
        <a href="https://www.instagram.com/opiumvisuals" target="_blank" rel="noopener noreferrer" className={actionClass}>MY INSTAGRAM</a>
        <Link to="/contact" className={actionClass}>CONTACT ME</Link>
      </div>
      <div className="mt-20 flex flex-col items-center gap-2 text-center text-xs font-bold opacity-60">
        <p>LOCATED IN NAIROBI, KENYA</p>
        <p>© 2026 OPIUM VISUALS. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
