import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Music } from "@/components/Music";
import { Members } from "@/components/Members";
import { Events } from "@/components/Events";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">      <Navigation />
      <Hero />
      <About />
      <Music />
      <Members />
      <Events />
      <Contact />
    </main>
  );
}
