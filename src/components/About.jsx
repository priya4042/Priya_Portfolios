import React from "react";
import { motion } from "framer-motion";

export default function About({ data }) {
  // Floating shapes for dynamic background
  const floatingShapes = Array.from({ length: 20 }).map((_, index) => ({
    size: Math.random() * 1.5 + 0.5,
    color: ["bg-pink-400/25", "bg-indigo-400/25", "bg-cyan-400/20", "bg-purple-400/20"][Math.floor(Math.random() * 4)],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 6,
  }));

  // Stats / highlights
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Happy Clients", value: "5+" },
    { label: "Technologies Learned", value: "15+" },
  ];

  // Key skills
  const skills = ["React", "Angular", "C#", ".NET Core", "SQL Server", "API Integration", "Azure Functions"];

  // Fun facts / personal touch
  const funFacts = [
    "Coffee Lover ☕",
    "Tech Enthusiast 💻",
    "Loves Minimal Design 🎨",
    "Always Learning 📚",
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-cyan-50 to-purple-50 overflow-hidden w-full">
      {/* Large background circles */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating small shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
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
            delay: index * 0.2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative w-full px-6 md:px-12 flex flex-col items-center gap-12 max-w-7xl mx-auto">
        {/* Heading with animated gradient */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center
                     bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x"
        >
          About Me
        </motion.h2>

        {/* About text card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
          className="bg-white/50 backdrop-blur-lg p-10 rounded-3xl shadow-2xl cursor-default
                     hover:shadow-3xl transition-transform duration-500 w-full md:max-w-4xl flex flex-col gap-6"
        >
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            {data.about}
          </p>

          {/* Stats / Highlights */}
          <div className="flex flex-wrap gap-6 mt-4 justify-center">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">{s.value}</div>
                <div className="text-gray-700 text-sm">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-medium shadow"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Fun Facts / Personal Touch */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {funFacts.map((fact, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm rounded-full bg-pink-200/50 text-pink-700 font-medium shadow"
              >
                {fact}
              </span>
            ))}
          </div>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={data.resume}
              download
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 font-semibold"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-cyan-500 text-cyan-600 rounded-xl hover:bg-cyan-50 transition-transform duration-300 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
