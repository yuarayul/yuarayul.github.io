import Ticker from './components/Ticker';
import Project from './components/Project';
import { projects } from './data';

function App() {
  return (
    <div className="bg-brutalist-pink min-h-screen text-off-white selection:bg-ink-black selection:text-brutalist-pink">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between p-6 bg-brutalist-pink border-b-2 border-ink-black">
        <h1 className="text-2xl font-black text-off-white tracking-tighter">OPIUM VISUALS®</h1>
        <div className="flex gap-8 text-sm font-bold text-off-white">
          <a href="#work" className="hover:text-ink-black transition-colors">WORK</a>
          <a href="#contact" className="hover:text-ink-black transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Hero Ticker */}
      <section className="pt-4">
        <Ticker text="EVENTS VISUALS DIRECTION • ALBUM VISUALS DIRECTION • BRAND IDENTITY DIRECTION" />
      </section>

      {/* Vertical Project Stack */}
      <section id="work" className="flex flex-col">
        {projects.map((item) => (
          <Project 
            key={item.id}
            title={item.title}
            image={item.image}
            client={item.client}
            year={item.year}
          />
        ))}
      </section>

      {/* Footer Ticker */}
      <Ticker text="AVAILABLE FOR PROJECTS 2026 • LATEST CATALOGUE" />

      {/* Brutalist Footer */}
     {/* BRUTALIST FOOTER */}
<footer id="contact" className="p-12 md:p-24 flex flex-col items-center bg-brutalist-pink border-t-2 border-ink-black text-off-white">
  
  <h2 className="text-7xl md:text-[12rem] font-black leading-none italic tracking-tighter text-center">
    LET'S <br/> CHAT
  </h2>

  <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-12 mt-12 w-full max-w-4xl">
    
    {/* INSTAGRAM LINK */}
    <a 
      href="https://www.instagram.com/opiumvisuals" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex-1 border-2 border-ink-black p-6 text-center text-2xl md:text-4xl font-black hover:bg-ink-black hover:text-brutalist-pink transition-all duration-300"
    >
      MY INSTAGRAM
    </a>

    {/* EMAIL LINK */}
    <a 
      href="mailto:yuarfrank@gmail.com" 
      className="flex-1 border-2 border-ink-black p-6 text-center text-2xl md:text-4xl font-black hover:bg-ink-black hover:text-brutalist-pink transition-all duration-300"
    >
      EMAIL ME
    </a>

  </div>

  <div className="mt-20 flex flex-col items-center gap-2 opacity-60 text-xs font-bold">
    <p>LOCATED IN NAIROBI, KENYA</p>
    <p>© 2026 OPIUM VISUALS. ALL RIGHTS RESERVED.</p>
  </div>
</footer>
    </div>
  );
}

export default App;
