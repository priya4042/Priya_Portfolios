import React from "react";
import { motion } from "framer-motion";

export default function Timeline({ data }) {
  return (
    <section
      id="experience"
      className="py-20 relative bg-gradient-to-b from-purple-50 via-cyan-50 to-pink-50 overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-accent mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 h-full border-l-2 border-cyan-300"></div>

          <div className="space-y-12 ml-12">
            {data.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-white/50 backdrop-blur-lg p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-8 top-6 w-5 h-5 bg-cyan-500 rounded-full border-2 border-white shadow-lg"></div>

                <div>
                  <h4 className="font-bold text-lg mb-1 text-cyan-700">
                    {exp.role} • {exp.company}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{exp.period}</p>
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
