import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FruitExplorer from "@/components/FruitExplorer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FruitExplorer />
      <Footer />
    </main>
  );
}