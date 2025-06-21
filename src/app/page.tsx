"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type StatProps = {
  value: string | number;
  label: string;
  delay?: number;
};

function Stat({ value, label, delay = 0 }: StatProps) {
  return (
    <motion.div
      className="flex flex-col items-center p-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, type: "spring" }}
    >
      <motion.span
        className="text-4xl md:text-5xl font-extrabold text-indigo-400"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.2, type: "spring" }}
      >
        {value}
      </motion.span>
      <span className="text-lg text-gray-300 mt-2">{label}</span>
    </motion.div>
  );
}



export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden px-4">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-600 opacity-30 rounded-full blur-3xl z-0"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-pink-500 opacity-20 rounded-full blur-3xl z-0"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 text-center z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Flow6 Solutions
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-center text-gray-300 max-w-2xl mb-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Automate your workflows. Empower your business with AI.
      </motion.p>
      <motion.a
        href="/contact"
        className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform mb-10 z-10"
        whileHover={{ scale: 1.08 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Get a Free Consultation
      </motion.a>

      {/* Stats Section */}
      <section className="w-full max-w-4xl flex flex-wrap justify-center gap-8 mb-10 z-10">
        <Stat value="35%" label="Productivity Boost with AI" delay={0.1} />
        <Stat value="60%" label="Faster Project Delivery" delay={0.2} />
        <Stat value="$120K+" label="Avg. Annual Savings" delay={0.3} />
        <Stat value="99.9%" label="Workflow Accuracy" delay={0.4} />
      </section>

      {/* Logos + Features Section */}
      <section className="w-full bg-gray-800/90 py-12 rounded-2xl mt-4 shadow-lg z-10">
  <h2 className="text-center text-2xl font-semibold mb-8">
    Trusted by innovators from:
  </h2>
  <div className="flex flex-wrap justify-center items-center gap-10 px-4 mb-8">
    {["mit", "princeton", "stanford", "harvard", "upenn"].map((school) => (
      <div
        key={school}
        className="flex items-center justify-center"
        style={{ width: 100, height: 100 }}
      >
        <Image
          src={`/logos/${school}.png`}
          alt={`${school} logo`}
          width={100}
          height={100}
          className="object-contain transition-transform hover:scale-110 duration-300"
          priority
        />
      </div>
    ))}
  </div>
  {/* Example AI Automation Projects */}
  <section className="w-full max-w-5xl mx-auto mt-10">
    <h3 className="text-center text-2xl font-bold mb-6">AI Automation Projects We Deliver</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        {
          title: "Customer Support Chatbot",
          desc: "24/7 intelligent support that reduces response time and boosts satisfaction.",
        },
        {
          title: "Invoice & Document Processing",
          desc: "Automate extraction and entry of data from emails, PDFs, and forms.",
        },
        {
          title: "Sales Lead Scoring",
          desc: "AI-powered prioritization of leads for higher conversion rates.",
        },
        {
          title: "HR Resume Screening",
          desc: "Automated candidate matching and shortlisting using AI.",
        },
        {
          title: "Workflow Automation",
          desc: "Connect tools and automate repetitive tasks across your business.",
        },
        {
          title: "Predictive Analytics",
          desc: "Forecast sales, demand, and customer churn with machine learning.",
        },
      ].map((proj, i) => (
        <div
          key={proj.title}
          className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start transition hover:-translate-y-1 hover:shadow-2xl duration-300"
        >
          <h4 className="font-bold text-lg mb-2 text-indigo-400">{proj.title}</h4>
          <p className="text-gray-300">{proj.desc}</p>
        </div>
      ))}
    </div>
  </section>
</section>


    </main>
  );
}
