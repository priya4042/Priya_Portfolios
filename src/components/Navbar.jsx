import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ data }) {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/50 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="font-bold text-lg text-accent hover:text-cyan-500 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {data.name}
        </motion.a>

        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className="hover:text-cyan-500 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          ))}

          <motion.a
            href={data.resume}
            download
            className="ml-2 px-3 py-1 border rounded-md hover:bg-cyan-50 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
