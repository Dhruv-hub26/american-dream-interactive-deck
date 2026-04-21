import Hero from "@/components/sections/Hero";
import Scale from "@/components/sections/Scale";
import Attractions from "@/components/sections/Attractions";
import LeasingTeaser from "@/components/sections/LeasingTeaser";
import Dining from "@/components/sections/Dining";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background relative">
      {/* Navbar yahan se hata diya hai kyunki wo layout.tsx mein hai */}

      <Hero />
      <Scale />
      <Attractions />

      {/* ID sync: LeasingTeaser ke andar id="leasing" hona chahiye */}
      <LeasingTeaser />

      <Dining />
      <Events />
      <Contact />
    </main>
  );
}