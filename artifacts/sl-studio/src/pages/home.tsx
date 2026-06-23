import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
