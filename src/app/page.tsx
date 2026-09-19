import { AmbientOrbs } from "@/components/AmbientOrbs";
import { Navbar } from "@/components/Navbar";
import { RevealObserver } from "@/components/RevealObserver";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative mx-auto min-h-[900px] w-full max-w-[1440px]">
      <AmbientOrbs />
      <Navbar />
      <RevealObserver />

      <main className="relative z-1 px-[120px] max-lg:px-[clamp(32px,6vw,80px)] max-sm:px-6">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
