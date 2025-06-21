"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = {
  "Web Development": {
    description: "Custom web applications built with modern technologies",
    items: [
      "Responsive React.js applications",
      "Python backend (Django/Flask)",
      "PostgreSQL database integration",
      "User authentication and CMS",
      "SEO optimization",
    ],
  },
  "Automated Marketing Campaigns": {
    description: "Streamline your marketing efforts with automation",
    items: [
      "Email marketing integration (Mailchimp/SendGrid)",
      "Social media scheduling (Hootsuite/Buffer)",
      "Campaign performance analytics",
      "Lead nurturing automation",
      "Custom marketing workflows",
    ],
  },
  "Data Solutions": {
    description: "Transform your data into actionable insights",
    items: [
      "Customer behavior tracking",
      "Google Analytics 4 integration",
      "Predictive analytics with Python",
      "Custom data pipelines",
      "Real-time analytics dashboards",
    ],
  },
  "Workflow Automation": {
    description: "Automate repetitive tasks and streamline operations",
    items: [
      "n8n/Zapier workflow integration",
      "CRM automation (HubSpot/Salesforce)",
      "Invoice generation automation",
      "Payment reminder systems",
      "Custom workflow solutions",
    ],
  },
} as const;

// 👇 Create a type that represents the keys of the services object
type ServiceCategory = keyof typeof services;

export default function ServicesPage() {
  const [selected, setSelected] = useState<ServiceCategory>("Web Development");

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-4 py-20 flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our AI Automation Services
      </motion.h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {(Object.keys(services) as ServiceCategory[]).map((service) => (
          <button
            key={service}
            onClick={() => setSelected(service)}
            className={`px-6 py-3 rounded-full font-medium text-sm transition ${
              selected === service
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Animated Service Content */}
      <div className="w-full max-w-3xl bg-gray-800/90 rounded-xl p-8 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">{selected}</h2>
            <p className="text-gray-300 mb-6">{services[selected].description}</p>
            <ul className="space-y-2 text-gray-200">
              {services[selected].items.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-indigo-400 mr-2 mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
