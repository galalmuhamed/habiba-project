import About from "@/components/about";
import FinalSection from "@/components/final";
import Hero from "@/components/hero";
import { Spotlight } from "@/components/spotlight";
import Supervisor from "@/components/supervisor";
import Team from "@/components/team";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Spotlight
          gradientFirst="radial-gradient(75% 75% at 60% 25%, oklch(0.70 0.08 65 / 0.18) 0%, oklch(0.65 0.07 65 / 0.10) 40%, transparent 80%)"
          gradientSecond="radial-gradient(70% 70% at 45% 35%, oklch(0.78 0.10 70 / 0.20) 0%, oklch(0.68 0.08 68 / 0.12) 40%, transparent 80%)"
        />
      </div>
      <div>
        <Image
          src="/cairoUni.png"
          alt="Cairo Uni Logo"
          width={200}
          height={200}
          className="mx-auto py-6"
        />
      </div>
      <Hero />
      <Supervisor />
      <About />
      <Team />
      <FinalSection />
      <footer className="bg-background/80 border-t">
        <div className="text-muted-foreground container flex flex-col items-center gap-4 py-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} made with love ❤️ by Habiba Galal.
          </p>
        </div>
      </footer>
    </main>
  );
}
