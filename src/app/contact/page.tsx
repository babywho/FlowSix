"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-4 py-20 flex flex-col items-center">
      <motion.h1
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Work Together
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 text-center max-w-xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Email us at <a href="mailto:contact@flow6.ai" className="text-indigo-400 hover:underline">contact@flow6.ai</a>  
        or schedule a free consultation with us below.
      </motion.p>

      <motion.div
        className="w-full max-w-3xl h-[700px] rounded-xl shadow-xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <iframe
          src="https://calendly.com/vincent-dangelo-gilmour"
          width="100%"
          height="100%"
          className="border-none"
          allow="camera; microphone; fullscreen; clipboard-write"
          title="Schedule a call"
        />
      </motion.div>
    </main>
  );
}
