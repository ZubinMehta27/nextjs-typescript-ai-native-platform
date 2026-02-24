"use client";

import { motion } from "framer-motion";

export default function AIZubinPlaceholder() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-neutral-50 to-white" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1000px] h-[500px] -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.05),_transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-semibold tracking-tight mb-10"
        >
          AI Zubin (In Development)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-600 leading-relaxed mb-16"
        >
          A voice-enabled, persona-trained AI system capable of
          explaining my work, architecture decisions, and AI strategies —
          in real-time.
        </motion.p>

        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-16">
          <p className="text-neutral-500 text-sm uppercase tracking-widest">
            Future Capabilities
          </p>

          <ul className="mt-10 space-y-4 text-neutral-700">
            <li>• Voice input & output (TTS/STT)</li>
            <li>• Persona-trained LLM</li>
            <li>• Multi-agent reasoning system</li>
            <li>• Real-time decision explanations</li>
            <li>• Lip-synced animated avatar</li>
          </ul>
        </div>

      </div>
    </section>
  );
}