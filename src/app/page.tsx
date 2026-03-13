import { Navbar }     from "@/components/Navbar";
import { Hero }       from "@/components/Hero";
import { Diferentes } from "@/components/Diferentes";
import { Transicion } from "@/components/Transicion";
import { Economia }   from "@/components/Economia";
import { Turismo }    from "@/components/Turismo";
import { Innovacion } from "@/components/Innovacion";
import { Contacto }   from "@/components/Contacto";
import { Footer }     from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferentes />
        <Economia />
        <Transicion />
        <Turismo />
        <Innovacion />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}