import React from "react";
import { motion } from "framer-motion";

function Bar({ name, level, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-medium mb-1 text-gray-700">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
        <motion.div
          className={`h-3 rounded-full bg-gradient-to-r ${color}`}
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

  return (
    <section
      id="skills"
      className="py-20 relative bg-gradient-to-b from-cyan-50 to-purple-50 overflow-hidden"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-accent mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div className="bg-white/50 backdrop-blur-lg p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
            <h4 className="text-xl font-semibold mb-4 text-cyan-600">Frontend</h4>
            {data.skills.frontend.map((s, i) => (
              <Bar key={i} name={s.name} level={s.level} color={colors.frontend} />
            ))}
          </div>

          {/* Backend & Tools Skills */}
          <div className="bg-white/50 backdrop-blur-lg p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
            <h4 className="text-xl font-semibold mb-4 text-pink-600">Backend</h4>
            {data.skills.backend.map((s, i) => (
              <Bar key={i} name={s.name} level={s.level} color={colors.backend} />
            ))}

            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-gray-700">Tools</h5>
              <div className="flex flex-wrap gap-2">
                {data.skills.tools.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-green-400 to-cyan-500 text-white font-medium shadow"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
