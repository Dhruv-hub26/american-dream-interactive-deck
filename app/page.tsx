import Hero from "@/components/sections/Hero";
import Scale from "@/components/sections/Scale";
import Attractions from "@/components/sections/Attractions";
import LeasingTeaser from "@/components/sections/LeasingTeaser";
import Dining from "@/components/sections/Dining";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";
import DotNavigation from "@/components/ui/DotNavigation";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-background relative scroll-smooth">
      <DotNavigation />
      <Hero />
      <Scale />
      <Attractions />
      <LeasingTeaser />
      <Dining />
      <Events />
      <Contact />
    </main>
  );
}