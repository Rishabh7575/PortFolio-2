import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ResumeViewer } from "@/components/sections/resume";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Clubs } from "@/components/sections/clubs";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Outro } from "@/components/sections/outro";
import { AICoreOrb } from "@/components/ui/ai-core-orb";

export default function Home() {
  return (
    <>
      {/* Cinematic Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 noise-bg" />

      {/* Floating Background AI Core Orb Watermark System */}
      <AICoreOrb />

      {/* Top Navbar specifically tailored for Mobile (NavDock handles Desktop) */}
      <div className="lg:hidden">
        <Navbar />
      </div>

      <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 pb-20">
        <Hero />
        <ResumeViewer />
        <Skills />
        <Projects />
        <Experience />
        <Clubs />
        <Certifications />
        <Contact />
      </main>
      
      <div className="relative z-10">
        <Outro />
      </div>
    </>
  );
}
