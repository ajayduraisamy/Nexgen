import About from "@/components/About";
import Enquery from "@/components/Enquery";
import Hero from "@/components/Hero";
import Services from "@/components/ServiceCard";
import Slidebar from "@/components/Slidebar";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Enquery />
      <Slidebar />
    </main>
  );
}
