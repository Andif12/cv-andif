import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Organization from "./components/Organization";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-white text-black dark:bg-gray-950 dark:text-white min-h-screen">

        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="organization">
          <Organization />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />

      </div>
    </LanguageProvider>
  );
}

export default App;