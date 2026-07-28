import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Why from "./components/Why";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <About />

      <Solutions />

      <Why />

      <Products />

      <Contact />

      <Footer />

    </main>
  );
}