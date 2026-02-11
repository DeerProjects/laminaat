import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";
import Process from "./sections/Process";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
