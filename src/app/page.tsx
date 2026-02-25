import { Navbar }     from "@/components/Navbar";
import { Hero }       from "@/components/Hero";
import { Diferentes } from "@/components/Diferentes";
import { Servicios }  from "@/components/Servicios";
import { Contacto }   from "@/components/Contacto";
import { Footer }   from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferentes />
        <Servicios />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}