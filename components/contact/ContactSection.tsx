"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-40 overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-neutral-50 to-white" />

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-semibold tracking-tight mb-10"
        >
          Let’s Build Intelligent Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-600 leading-relaxed mb-16"
        >
          If your organization is exploring AI transformation,
          automation systems, or multi-agent architectures —
          let’s discuss how to architect it properly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          <a
            href="mailto:zubin.mehta11@gmail.com"
            className="bg-black text-white px-10 py-5 rounded-xl text-lg font-medium hover:opacity-90 transition"
          >
            Email Directly
          </a>

          <a
            href="https://www.linkedin.com/in/iamzubinmehta/"
            target="_blank"
            className="border border-neutral-300 px-10 py-5 rounded-xl text-lg font-medium hover:bg-neutral-100 transition"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

      </div>
    </section>
  );
}