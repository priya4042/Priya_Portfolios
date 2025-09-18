import React from "react";
import { motion } from "framer-motion";

export default function About({ data }) {
  return (
    <section
      id="about"
      className="py-20 relative bg-gradient-to-b from-cyan-50 to-purple-50 overflow-hidden"
    >
      {/* Subtle animated background shapes */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-accent mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
        >
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            {data.about}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
