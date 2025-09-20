import React from "react";
import { motion } from "framer-motion";

function Bar({ name, level, color }) {
  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between text-sm font-medium mb-1 text-gray-700">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200/40 h-4 rounded-full overflow-hidden">
        <motion.div
          className={`h-4 rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills({ data }) {
  const colors = {
    frontend: "from-cyan-400 to-purple-500",
    backend: "from-pink-400 to-red-500",
    tools: "from-green-400 to-cyan-500",
  };

  // Floating particles
  const floatingShapes = Array.from({ length: 12 }).map((_, i) => ({
    size: Math.random() * 1.5 + 0.5,
    color: ["bg-pink-400/25", "bg-indigo-400/25", "bg-cyan-400/20", "bg-purple-400/20"][Math.floor(Math.random() * 4)],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 6,
  }));

  return (
    <section className="py-20 relative bg-gradient-to-b from-cyan-50 to-purple-50 overflow-hidden w-full">
      {/* Background Big Circles */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small Floating Particles */}
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

      {/* Content */}
      <div className="relative w-full px-6 md:px-12 flex flex-col items-center gap-12">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center 
                     bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 w-full">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white/50 backdrop-blur-lg p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
          >
            <h4 className="text-xl font-semibold mb-4 text-cyan-600">Frontend</h4>
            {data.skills.frontend.map((s, i) => (
              <Bar key={i} name={s.name} level={s.level} color={colors.frontend} />
            ))}
          </motion.div>

          {/* Backend & Tools Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white/50 backdrop-blur-lg p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
          >
            <h4 className="text-xl font-semibold mb-4 text-pink-600">Backend</h4>
            {data.skills.backend.map((s, i) => (
              <Bar key={i} name={s.name} level={s.level} color={colors.backend} />
            ))}

            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-gray-700">Tools</h5>
              <div className="flex flex-wrap gap-2">
                {data.skills.tools.map((t, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-green-400 to-cyan-500 text-white font-medium shadow"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
