import { Navbar }     from "@/components/Navbar";
import { Hero }       from "@/components/Hero";
import { Diferentes } from "@/components/Diferentes";
import { Servicios }  from "@/components/Servicios";
import { Contacto }   from "@/components/Contacto";
import { Footer }     from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* id="inicio" está dentro del propio Hero */}
        <Hero />

        {/* Lo que nos hace diferentes */}
        <div id="diferentes">
          <Diferentes />
        </div>

        {/* Servicios: cada bloque tiene su propio id en site.ts */}
        <div id="transicion">
          {/* Transición Energética — primer bloque de Servicios */}
        </div>
        <Servicios />

        <Contacto />
        {/* id="contacto" está dentro del propio Contacto */}
      </main>
      <Footer />
    </>
  );
}