import React from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Fade from "react-reveal/Fade";

export default function App() {
  return (
    <main>
      <Navbar className="text-gray-400 bg-gray-900 body-font"/>
      <Fade top>
      <About />
      </Fade>
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
