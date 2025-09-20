import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Footer({ data }) {
  // Floating particles
  const floatingShapes = Array.from({ length: 10 }).map((_, i) => ({
    size: Math.random() * 2 + 0.5,
    color: ["bg-white/10", "bg-white/20", "bg-white/15"][Math.floor(Math.random() * 3)],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 12 + 6,
  }));

  return (
    <footer className="mt-16 relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white overflow-hidden">
      {/* Floating background shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color} rounded-full`}
          style={{ width: `${shape.size}rem`, height: `${shape.size}rem`, top: shape.top, left: shape.left }}
          animate={{ y: [0, 10, -10, 0], x: [0, 8, -8, 0] }}
          transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        {/* Left Section: About */}
        <div className="md:w-1/3 space-y-2">
          <h3 className="text-xl font-bold">About Me</h3>
          <p className="text-sm text-white/90">
            I am a full-stack developer passionate about building beautiful and responsive web applications.
            Stay connected through my socials and feel free to reach out!
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="md:w-1/3 flex flex-col md:flex-row justify-center gap-8 md:gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Links</h4>
            <a href="#projects" className="hover:text-white/80 transition">Projects</a>
            <a href="#experience" className="hover:text-white/80 transition">Experience</a>
            <a href="#contact" className="hover:text-white/80 transition">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Contact</h4>
            <a href={`mailto:${data.email}`} className="hover:text-white/80 transition">{data.email}</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="hover:text-white/80 transition">LinkedIn</a>
            <a href={data.github} target="_blank" rel="noreferrer" className="hover:text-white/80 transition">GitHub</a>
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="md:w-1/3 flex flex-col items-start md:items-end gap-4">
          <h4 className="font-semibold text-white">Follow Me</h4>
          <div className="flex gap-4 text-2xl">
            <motion.a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              className="hover:text-gray-200 transition"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              className="hover:text-gray-200 transition"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={`mailto:${data.email}`}
              whileHover={{ scale: 1.2 }}
              className="hover:text-gray-200 transition"
            >
              <FaEnvelope />
            </motion.a>
            {data.twitter && (
              <motion.a
                href={data.twitter}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-gray-200 transition"
              >
                <FaTwitter />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} {data.name} • Built with React & ❤️
      </div>
    </footer>
  );
}
