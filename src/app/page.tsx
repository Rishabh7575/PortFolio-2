import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* Placeholder for Clubs and Certifications sections, you can add them similarly */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
