import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Clubs } from "@/components/sections/clubs";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Outro } from "@/components/sections/outro";

export default function Home() {
  return (
    <>
      {/* Top Navbar specifically tailored for Mobile (NavDock handles Desktop) */}
      <div className="lg:hidden">
        <Navbar />
      </div>

      <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 md:px-8 relative pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Clubs />
        <Certifications />
        <Contact />
      </main>
      
      <Outro />
    </>
  );
}
