"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Metrics() {
  const metrics = [
    {
      value: 12,
      suffix: "M+",
      label: "Value Identified (USD)",
    },
    {
      value: 100,
      suffix: "+",
      label: "Analytical Reports Delivered",
    },
    {
      value: 15,
      suffix: "+",
      label: "Team Members Led",
    },
    {
      value: 45,
      suffix: "%",
      label: "Efficiency Improvement",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 text-center"
        >
          {metrics.map((metric, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                <CountUp
                  end={metric.value}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {metric.suffix}
              </h3>
              <p className="text-neutral-600 text-sm uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}