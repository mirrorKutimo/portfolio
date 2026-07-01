import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Appeal from "./components/Appeal";
import Skills from "./components/Skills";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Appeal />
        <Skills />
        <Career />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
