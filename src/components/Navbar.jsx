import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = ["about", "skills", "projects", "contact"];

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((id) => document.getElementById(id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/40 backdrop-blur-lg shadow-lg"
    >
      {/* Floating background circles */}
      <motion.div
        className="absolute top-0 left-1/4 w-36 h-36 bg-cyan-200/30 rounded-full blur-2xl animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-36 h-36 bg-purple-300/30 rounded-full blur-2xl animate-pulse"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo / Name */}
        <motion.a
          href="#hero"
          className="font-bold text-xl text-accent hover:text-cyan-500 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {data.name}
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          {navLinks.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className={`relative px-1 py-1 transition-colors duration-300 ${
                activeSection === section ? "text-cyan-500" : "text-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

              {/* Animated underline */}
              {activeSection === section && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-0.5 bg-cyan-500 w-full rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}

          {/* Resume Button */}
          <motion.a
            href={data.resume}
            download
            className="ml-2 px-4 py-1 border border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-700 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/50 backdrop-blur-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4 font-medium text-gray-700">
              {navLinks.map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setIsOpen(false)}
                  className={`transition-all duration-300 ${
                    activeSection === section ? "text-cyan-500" : "text-gray-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}

              {/* Resume Button */}
              <motion.a
                href={data.resume}
                download
                className="mt-2 px-4 py-2 border border-cyan-500 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
