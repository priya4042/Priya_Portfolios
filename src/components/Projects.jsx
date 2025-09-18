import React from "react";
import { motion } from "framer-motion";

export default function Projects({ data }) {
  return (
    <section
      id="projects"
      className="py-20 relative bg-gradient-to-b from-purple-50 via-cyan-50 to-pink-50 overflow-hidden"
    >
      {/* Subtle animated background circles */}
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
          className="text-4xl sm:text-5xl font-extrabold text-center text-accent mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 text-sm border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition transform hover:scale-105"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transition transform"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
