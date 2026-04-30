import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white min-h-screen">
      <LanguageProvider>
        <Navbar />
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="Work"><Work/></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;