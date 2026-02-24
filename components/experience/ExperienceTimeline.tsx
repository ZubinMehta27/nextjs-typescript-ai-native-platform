"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ============================= */
/* Animation Variants */
/* ============================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const verticalLineVariants = {
  hidden: { height: 0 },
  visible: { height: 110 },
};

const horizontalLineVariants = {
  hidden: { width: 0 },
  visible: { width: "65%" },
};

/* ============================= */
/* Main Component */
/* ============================= */

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative py-40 overflow-hidden"
    >
      {/* Subtle Background Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-neutral-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.035),_transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8">
            Experience
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Engineering enterprise AI systems built upon a foundation of
            analytics, business intelligence, and operational leadership.
          </p>
        </motion.div>

        {/* Tree Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Connector */}
          <motion.div
            variants={verticalLineVariants}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 top-40 w-px bg-neutral-200 -translate-x-1/2"
          />

          {/* Root Node — Virtusa */}
          <div className="flex justify-center mb-40">
            <TreeCard
              emphasize
              title="Lead – AI/ML Engineer"
              company="Virtusa"
              period="2025 – Present"
              description="Architecting a multi-agent AI value creation system for enterprise-scale decision intelligence."
              highlights={[
                "Designed collaborative LLM multi-agent orchestration",
                "Built LangGraph-based state execution pipelines",
                "Implemented deterministic validation guardrails",
                "Engineered evaluation frameworks for reliability & cost control",
              ]}
              logo="/company-logos/virtusa.png"
            />
          </div>

          {/* Horizontal Connector */}
          <motion.div
            variants={horizontalLineVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute left-1/2 top-[320px] h-px bg-neutral-200 -translate-x-1/2"
          />

          {/* Branch Nodes */}
          <div className="grid md:grid-cols-3 gap-16 mt-24">
            <TreeCard
              title="Senior Associate"
              company="alliantgroup"
              period="2021 – 2025"
              description="Led analytics-driven R&D tax intelligence engagements."
              highlights={[
                "$12M+ value identified via SQL-driven analysis",
                "100+ audit-ready analytical reports",
                "Led 15-member cross-functional team",
                "45% delivery efficiency improvement",
              ]}
              logo="/company-logos/alliantgroup.png"
            />

            <TreeCard
              title="Associate Editor"
              company="GlobalData"
              period="2020 – 2021"
              description="Produced data-driven intelligence across BFSI sectors."
              highlights={[
                "100+ analytical industry reports",
                "Financial & regulatory data analysis",
                "Editorial collaboration across UK teams",
              ]}
              logo="/company-logos/globaldata.png"
            />

            <TreeCard
              title="Selling Partner Support Associate"
              company="Amazon"
              period="2016 – 2019"
              description="Optimized merchant operations in high-volume environments."
              highlights={[
                "70+ merchants supported daily",
                "12% sales uplift contribution",
                "Root-cause process improvement initiatives",
              ]}
              logo="/company-logos/amazon.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================= */
/* Tree Card Component */
/* ============================= */

function TreeCard({
  title,
  company,
  period,
  description,
  highlights,
  logo,
  emphasize = false,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  logo: string;
  emphasize?: boolean;
}) {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        relative rounded-3xl border p-10
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl hover:scale-[1.015]
        ${
          emphasize
            ? `
              bg-gradient-to-br from-neutral-100 to-white
              border-neutral-300
              shadow-md
              ring-1 ring-neutral-200
              before:absolute before:inset-0
              before:-z-10
              before:rounded-3xl
              before:bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.05),_transparent_70%)]
            `
            : `
              bg-neutral-50
              border-neutral-200
              shadow-sm
            `
        }
      `}
    >
      <div className="flex items-center justify-between flex-wrap gap-6 mb-8">
        <div className="flex items-center gap-5">
          {logo && (
            <div className="w-12 h-12 relative rounded-xl overflow-hidden border border-neutral-200 bg-white">
              <Image
                src={logo}
                alt={company}
                fill
                className="object-contain p-2"
              />
            </div>
          )}

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {title}
            </h3>
            <p className="text-neutral-600 text-sm mt-1">
              {company}
            </p>
          </div>
        </div>

        <span className="text-sm text-neutral-500 font-medium tracking-wide">
          {period}
        </span>
      </div>

      <p className="text-neutral-700 mb-8 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3 text-neutral-600">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 bg-black rounded-full" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}