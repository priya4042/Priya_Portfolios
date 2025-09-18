import React from "react";
import { siteData } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-b from-white via-cyan-50 to-purple-50 scroll-smooth">
      {/* Navbar */}
      <Navbar data={siteData} />

      {/* Main Content */}
      <main className="w-full">
        <section className="w-full min-h-screen flex flex-col justify-center items-center">
          <Hero data={siteData} />
        </section>

        <section className="w-full flex justify-center items-center">
          <About data={siteData} />
        </section>

        <section className="w-full flex justify-center items-center">
          <Skills data={siteData} />
        </section>

        <section className="w-full flex justify-center items-center">
          <Projects data={siteData} />
        </section>

        <section className="w-full flex justify-center items-center">
          <Timeline data={siteData} />
        </section>

        <section className="w-full flex justify-center items-center">
          <Contact data={siteData} />
        </section>
      </main>

      {/* Footer */}
      <Footer data={siteData} />
    </div>
  );
}
