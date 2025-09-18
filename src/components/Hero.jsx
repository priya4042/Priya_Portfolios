import React from "react";
import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypewriter";

export default function Hero({ data }) {
  const { text, cursor } = useTypewriter(
    ["I build scalable APIs", "I integrate platforms", "I craft interactive UIs"],
    80,
    1200
  );

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center relative bg-gradient-to-br from-cyan-50 to-purple-50 overflow-hidden"
    >
      {/* Optional: animated background shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl w-full px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600"
          >
            {data.name}
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-lg md:text-xl text-slate-700"
          >
            {data.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 text-lg md:text-xl text-slate-700 font-medium"
          >
            <span>{text}</span>
            <span className="text-cyan-500">{cursor}</span>
          </motion.div>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href={data.resume}
              download
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-cyan-500 text-cyan-600 rounded-lg font-medium hover:bg-cyan-50 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right: Profile Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/50 backdrop-blur-lg p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-4 max-w-sm mx-auto"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-200">
            <img
              src="/assets/profile.jpg"
              alt="Priya"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg">Hello — I'm {data.name.split(" ")[0]}</h3>
          <p className="text-sm text-slate-700">{data.title}</p>
          <div className="mt-2 text-sm text-slate-600 flex flex-col items-center gap-1">
            <div>📍 Kangra, Himachal Pradesh</div>
            <div>✉️ {data.email}</div>
          </div>
          <div className="flex justify-between w-full mt-4 text-sm font-medium text-slate-700">
            <div className="text-center">
              <div className="text-lg font-bold">5+</div>
              Years Exp
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">20+</div>
              Projects
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">10+</div>
              Clients
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
