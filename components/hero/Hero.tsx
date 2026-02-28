"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialIcons from "@/components/ui/SocialIcons";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-36 pb-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
            Lead AI / ML Engineer
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
            Production-Grade
            <br />
            Multi-Agent AI Systems
          </h1>

          <p className="text-lg text-neutral-600 max-w-xl mb-6 leading-relaxed">
            Designing and deploying LLM orchestration frameworks,
            deterministic validation pipelines, and enterprise-scale
            intelligent systems built for reliability.
          </p>

          <p className="text-sm text-neutral-500 mb-10 leading-relaxed">
            Leading multi-agent system development at Virtusa.
            Delivered $12M+ in analytics-driven enterprise value.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="/projects"
              className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
            >
              View Projects
            </Link>
          </div>

          {/* Social Icons */}
          <SocialIcons />
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl">
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

          {/* Subtle Depth Layer */}
          <div className="absolute -z-10 top-8 left-8 w-full h-full bg-neutral-200/40 rounded-3xl blur-2xl" />
        </motion.div>

      </div>
    </section>
  );
}