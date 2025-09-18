import React from "react";
import { motion } from "framer-motion";

export default function Contact({ data }) {
  return (
    <section
      id="contact"
      className="py-20 relative bg-gradient-to-b from-cyan-50 to-purple-50 overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse"
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
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-600">Get in Touch</h3>
            <p className="mb-3 text-gray-700">
              Email:{" "}
              <a href={`mailto:${data.email}`} className="text-cyan-500 underline">
                {data.email}
              </a>
            </p>
            <p className="mb-3 text-gray-700">
              LinkedIn:{" "}
              <a
                className="text-cyan-500 underline"
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Profile
              </a>
            </p>
            <p className="text-gray-700">
              GitHub:{" "}
              <a
                className="text-cyan-500 underline"
                href={data.github}
                target="_blank"
                rel="noreferrer"
              >
                github.com/priya4042
              </a>
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            action={`mailto:${data.email}`}
            method="POST"
            encType="text/plain"
          >
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              name="name"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Send Message
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Tip: Replace mailto form with Formspree or server endpoint for better UX.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
