import React from "react";
import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypewriter";
import profilePic from "../assets/profile.png";

export default function Hero({ data }) {
  const { text, cursor } = useTypewriter(
    ["I build scalable APIs", "I integrate platforms", "I craft interactive UIs"],
    80,
    1200
  );

  // Floating small circles configuration
  const floatingCircles = [
    { size: 2, color: "bg-pink-400/40", top: "10%", left: "25%", duration: 8 },
    { size: 1.5, color: "bg-indigo-400/30", top: "50%", left: "70%", duration: 10 },
    { size: 1.8, color: "bg-cyan-400/30", top: "30%", left: "50%", duration: 9 },
    { size: 2, color: "bg-purple-400/30", top: "70%", left: "20%", duration: 12 },
    { size: 1.5, color: "bg-pink-300/20", top: "80%", left: "60%", duration: 11 },
    { size: 1.2, color: "bg-cyan-300/20", top: "20%", left: "80%", duration: 13 },
    { size: 1.5, color: "bg-indigo-300/25", top: "40%", left: "10%", duration: 14 },
    { size: 2, color: "bg-purple-300/20", top: "60%", left: "85%", duration: 15 },
  ];

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center relative
                 bg-gradient-to-br from-cyan-50 to-purple-50 overflow-hidden"
    >
      {/* ====== Background Big Circles ====== */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ====== Floating Small Particles ====== */}
      {floatingCircles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute ${circle.color} rounded-full`}
          style={{
            width: `${circle.size}rem`,
            height: `${circle.size}rem`,
            top: circle.top,
            left: circle.left,
          }}
          animate={{
            y: [0, 15, -10, 0],
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
      ))}

      {/* ====== Hero Content ====== */}
      <div className="relative max-w-7xl w-full px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* ====== Left: Text Section ====== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col gap-4 z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text
                         bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x">
            {data.name}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-2xl text-slate-700 font-medium"
          >
            {data.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-2 text-lg md:text-xl text-cyan-600 font-semibold"
          >
            <span>{text}</span>
            <span>{cursor}</span>
          </motion.p>

          <div className="mt-2 text-sm md:text-base text-slate-700 flex flex-col gap-1">
            <div>📍 Kangra, Himachal Pradesh</div>
            <div>✉️ {data.email}</div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={data.resume}
              download
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium transition-transform"
            >
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 border border-cyan-500 text-cyan-600 rounded-lg font-medium hover:bg-cyan-50 transition"
            >
              View Projects
            </motion.a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-6 text-sm md:text-base font-medium text-slate-700 flex-wrap">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-600">3+</div>
              Years Exp
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">10+</div>
              Projects
            </div>
          </div>
        </motion.div>

        {/* ====== Right: Big Image ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ rotateY: 5, rotateX: 3, scale: 1.05 }}
          className="flex-1 flex justify-center md:justify-end perspective-1000"
        >
          <div className="w-80 md:w-[30rem] h-96 md:h-[36rem] rounded-3xl overflow-hidden">
            <img
              src={profilePic}
              alt="Priya"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Subtle Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/10 to-pink-300/10 rounded-3xl mix-blend-overlay pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
