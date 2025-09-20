import React from "react";
import { motion } from "framer-motion";

export default function Contact({ data }) {
  // Floating shapes for dynamic background
  const floatingShapes = Array.from({ length: 15 }).map((_, i) => ({
    size: Math.random() * 1.5 + 0.5,
    color: ["bg-pink-400/25", "bg-indigo-400/25", "bg-cyan-400/20", "bg-purple-400/20"][Math.floor(Math.random() * 4)],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 12 + 6,
  }));

  return (
    <section className="py-24 relative w-full bg-gradient-to-b from-cyan-50 via-white to-purple-50 overflow-hidden">
      {/* Large background circles */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating small shapes */}
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

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-16">
        {/* Animated gradient heading with glow */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold text-center
                     bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x
                     drop-shadow-xl"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 w-full">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            className="relative bg-white/40 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform duration-500 cursor-default overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-pulse"></div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-600">Get in Touch</h3>
            <p className="mb-4 text-gray-700 flex items-center gap-2">
              📧 <a href={`mailto:${data.email}`} className="text-cyan-500 underline">{data.email}</a>
            </p>
            <p className="mb-4 text-gray-700 flex items-center gap-2">
              🔗 <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-purple-500 underline">LinkedIn Profile</a>
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              💻 <a href={data.github} target="_blank" rel="noreferrer" className="text-cyan-500 underline">github.com/priya4042</a>
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            className="relative bg-white/40 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform duration-500 overflow-hidden"
            action={`mailto:${data.email}`}
            method="POST"
            encType="text/plain"
          >
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
            <label className="block mb-3 text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              className="w-full border border-gray-300 p-3 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 shadow-inner bg-white/60 backdrop-blur-sm"
              required
            />
            <label className="block mb-3 text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 shadow-inner bg-white/60 backdrop-blur-sm"
              required
            />
            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              Send Message
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Tip: Replace mailto with Formspree or server endpoint for a smoother experience.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
