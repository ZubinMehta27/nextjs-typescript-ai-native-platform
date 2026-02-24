"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
            AI Engineer
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
            Building Intelligent Systems
            <br />
            That Scale.
          </h1>

          <p className="text-lg text-neutral-600 max-w-xl mb-10 leading-relaxed">
            I design and deploy production-grade AI systems, LLM-powered
            applications, and intelligent automation pipelines that create
            measurable business impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
            >
              View Work
            </a>

            <a
              href="/resume.pdf"
              className="border border-neutral-300 px-6 py-3 rounded-xl text-sm font-medium hover:bg-neutral-100 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Zubin Mehta"
              width={600}
              height={700}
              priority
              quality={85}
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}