import React from "react";
import { motion } from "framer-motion";

export default function Projects({ data }) {
  // Floating particles for background
  const floatingShapes = Array.from({ length: 18 }).map((_, i) => ({
    size: Math.random() * 1.5 + 0.5,
    color: ["bg-pink-400/25", "bg-indigo-400/25", "bg-cyan-400/20", "bg-purple-400/20"][Math.floor(Math.random() * 4)],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 6,
  }));

  return (
    <section className="py-24 relative bg-gradient-to-b from-purple-50 via-cyan-50 to-pink-50 overflow-hidden w-full">
      {/* Big background circles */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small floating particles */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color} rounded-full shadow-lg`}
          style={{
            width: `${shape.size}rem`,
            height: `${shape.size}rem`,
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            y: [0, 10, -10, 0],
            x: [0, 8, -8, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="relative w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center gap-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center
                     bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 animate-gradient-x"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col cursor-pointer hover:shadow-3xl transition-transform duration-500"
            >
              {/* Keep project image as is */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm flex-grow mb-3">{project.desc}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full font-medium shadow"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Optional highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                {/* Buttons */}
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

        {/* Extra content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center text-gray-700 max-w-3xl"
        >
          <p className="mb-3">
            These projects showcase my full-stack expertise, including frontend, backend, API integrations, and modern design practices.
          </p>
          <p className="mb-3">
            Each project is crafted with attention to detail, responsive design, and user-friendly interfaces.
          </p>
          <p>
            More exciting projects are coming soon. Stay tuned for live demos and updated repositories!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
