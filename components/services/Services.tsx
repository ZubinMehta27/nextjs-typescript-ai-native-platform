"use client";

import { motion } from "framer-motion";

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

/* ============================= */
/* Services Data */
/* ============================= */

const services = [
  {
    title: "AI Architecture & System Design",
    description:
      "Enterprise-grade multi-agent systems engineered for scale, reliability, and measurable ROI.",
    points: [
      "Multi-agent orchestration frameworks",
      "LangGraph execution pipelines",
      "Guardrails & LLM evaluation systems",
      "Cost and latency optimization",
      "Deployment & production strategy",
    ],
  },
  {
    title: "Intelligent Automation & Decision Systems",
    description:
      "Transform internal workflows into AI-powered decision engines.",
    points: [
      "Internal AI copilots",
      "Research & knowledge agents",
      "Text-to-SQL intelligence systems",
      "Executive dashboards",
      "Automation pipelines",
    ],
  },
  {
    title: "AI Roadmap & Capability Building",
    description:
      "Strategic guidance to move from experimentation to operational AI maturity.",
    points: [
      "AI opportunity assessment",
      "ROI & cost modeling",
      "Governance & risk frameworks",
      "Tool & vendor selection",
      "Capability build strategy",
    ],
  },
];

const engagementModels = [
  {
    title: "Advisory & Strategy",
    description:
      "Executive-level AI advisory, architecture reviews, and roadmap design.",
    details: "Hourly or retainer-based engagement",
  },
  {
    title: "Project-Based Systems",
    description:
      "Fixed-scope AI system builds, automation pipelines, and LLM integrations.",
    details: "Defined scope, measurable delivery milestones",
  },
  {
    title: "Strategic AI Partnership",
    description:
      "Long-term collaboration for continuous AI capability development.",
    details: "Ongoing system evolution & business KPI alignment",
  },
];

/* ============================= */
/* Component */
/* ============================= */

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-40 overflow-hidden"
    >
      {/* Subtle Background Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-neutral-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.035),_transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8">
            Strategic AI Partnership
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Helping enterprises design, deploy, and scale intelligent systems
            aligned with measurable business outcomes.
          </p>
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-neutral-300"
            >
              <h3 className="text-2xl font-semibold tracking-tight mb-6">
                {service.title}
              </h3>

              <p className="text-neutral-700 leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-3 text-neutral-600">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 bg-black rounded-full" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Engagement Models */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-40"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-semibold text-center mb-16"
          >
            Engagement Models
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-12">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-neutral-300"
              >
                <h4 className="text-xl font-semibold mb-4">
                  {model.title}
                </h4>

                <p className="text-neutral-700 mb-6 leading-relaxed">
                  {model.description}
                </p>

                <p className="text-sm text-neutral-500 font-medium">
                  {model.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            AI transformation requires more than models — it requires systems,
            governance, and measurable business alignment.
          </p>

          <a
            href="#contact"
            className="inline-block bg-black text-white px-10 py-5 rounded-xl font-medium hover:opacity-90 transition text-lg"
          >
            Initiate a Strategic Conversation
          </a>
        </motion.div>

      </div>
    </section>
  );
}