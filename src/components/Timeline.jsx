import React from "react";
import { motion } from "framer-motion";

export default function Timeline({ data }) {
  // Floating particles
  const floatingShapes = Array.from({ length: 12 }).map((_, i) => ({
    size: Math.random() * 1.5 + 0.5,
    color: ["bg-pink-400/25", "bg-indigo-400/25", "bg-cyan-400/20", "bg-purple-400/20"][Math.floor(Math.random() * 4)],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 6,
  }));

  return (
    <section className="py-20 relative bg-gradient-to-b from-purple-50 via-cyan-50 to-pink-50 overflow-hidden w-full">
      {/* Big background circles */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small floating particles */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color} rounded-full`}
          style={{
            width: `${shape.size}rem`,
            height: `${shape.size}rem`,
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            y: [0, 8, -8, 0],
            x: [0, 5, -5, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-12">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center 
                     bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 animate-gradient-x"
        >
          Experience
        </motion.h2>

        <div className="relative w-full">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-10 top-0 h-full border-l-2 border-cyan-300"></div>

          <div className="space-y-12 ml-12 md:ml-16">
            {data.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/50 backdrop-blur-lg p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform duration-500 relative cursor-default"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute -left-8 md:-left-10 top-6 w-5 h-5 rounded-full border-2 border-white shadow-lg bg-gradient-to-r from-cyan-400 to-purple-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                />

                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1 text-cyan-700">
                    {exp.role} • {exp.company}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 mb-3">{exp.period}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
