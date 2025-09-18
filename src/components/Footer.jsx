import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer({ data }) {
  return (
    <footer className="mt-12 relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} {data.name} • Built with React & ❤️
        </div>

        <div className="flex gap-4 text-xl">
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${data.email}`}
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
