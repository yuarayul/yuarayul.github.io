import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageShell } from "@/components/portfolio/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 0piumvisuals" },
      { name: "description", content: "Start a visual identity, event direction, album artwork, or apparel project with 0piumvisuals." },
      { property: "og:title", content: "Contact — 0piumvisuals" },
      { property: "og:description", content: "Tell 0piumvisuals about your next creative project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass = "h-auto rounded-none border-0 border-b-2 border-ink-black bg-transparent px-0 py-4 text-lg font-black text-off-white shadow-none placeholder:text-off-white/60 focus-visible:ring-0 focus-visible:border-off-white md:text-xl";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <main>
        <header className="border-b-2 border-ink-black px-4 py-10 sm:px-8 md:px-12 md:py-16">
          <p className="mb-5 text-sm font-black text-ink-black">AVAILABLE FOR SELECT PROJECTS — 2026</p>
          <h1 className="max-w-6xl text-7xl font-black italic leading-[0.82] sm:text-8xl md:text-[10rem]">LET&apos;S<br />CHAT.</h1>
        </header>

        <section className="grid md:grid-cols-[0.8fr_1.5fr]">
          <aside className="border-b-2 border-ink-black p-6 md:border-b-0 md:border-r-2 md:p-12">
            <p className="max-w-md text-lg font-black leading-snug">TELL ME WHAT YOU&apos;RE MAKING, WHERE IT NEEDS TO LIVE, AND WHEN YOU NEED IT.</p>
            <div className="mt-12 space-y-8 text-sm font-black">
              <div><p className="mb-2 text-ink-black">EMAIL</p><a className="contact-link" href="mailto:yuarfrank@gmail.com">YUARFRANK@GMAIL.COM</a></div>
              <div><p className="mb-2 text-ink-black">BASED IN</p><p>NAIROBI, KENYA</p></div>
              <div><p className="mb-3 text-ink-black">SOCIAL</p><a className="contact-link inline-flex items-center gap-1" href="https://www.instagram.com/opiumvisuals" target="_blank" rel="noopener noreferrer">INSTAGRAM <ArrowUpRight className="size-4" aria-hidden="true" /></a></div>
            </div>
          </aside>

          <div className="p-6 md:p-12">
            {sent ? (
              <div className="flex min-h-[32rem] flex-col justify-center" role="status" aria-live="polite">
                <p className="text-sm font-black text-ink-black">MESSAGE READY</p>
                <h2 className="mt-5 max-w-3xl text-5xl font-black leading-none sm:text-7xl">THANK YOU. I&apos;LL BE IN TOUCH.</h2>
                <a href="mailto:yuarfrank@gmail.com" className="contact-link mt-10 w-fit text-lg font-black">SEND VIA EMAIL <ArrowUpRight className="inline size-5" aria-hidden="true" /></a>
              </div>
            ) : (
              <form action="https://formspree.io/f/xeaodpqj" method="POST" className="space-y-10">
                <div><label htmlFor="name" className="text-xs font-black text-ink-black">01 / YOUR NAME</label><Input id="name" name="name" autoComplete="name" required placeholder="NAME" className={fieldClass} /></div>
                <div><label htmlFor="email" className="text-xs font-black text-ink-black">02 / YOUR EMAIL</label><Input id="email" name="email" type="email" autoComplete="email" required placeholder="EMAIL@ADDRESS.COM" className={fieldClass} /></div>
                <div><label htmlFor="project" className="text-xs font-black text-ink-black">03 / PROJECT TYPE</label><Input id="project" name="project" required placeholder="IDENTITY, EVENT, APPAREL..." className={fieldClass} /></div>
                <div><label htmlFor="message" className="text-xs font-black text-ink-black">04 / TELL ME ABOUT IT</label><Textarea id="message" name="message" required placeholder="THE IDEA, SCOPE, TIMELINE, BUDGET..." className={`${fieldClass} min-h-40 resize-y`} /></div>
                <Button type="submit" variant="brutalist" size="brutalist" className="w-full sm:w-auto">SEND INQUIRY <ArrowUpRight aria-hidden="true" /></Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <footer className="border-t-2 border-ink-black p-6 text-center text-xs font-black opacity-60">© 2026 OPIUM VISUALS. ALL RIGHTS RESERVED.</footer>
    </PageShell>
  );
}
