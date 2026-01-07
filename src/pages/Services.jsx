import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const serviceCategories = [
  "Freelancers",
  "Online Workers",
  "Consultants",
  "Contractors",
];

const services = [
  {
    id: 1,
    name: "John Mwangi",
    title: "Fullstack Web Developer",
    category: "Freelancers",
    rate: "25 USDC / hr",
    location: "Kenya",
  },
  {
    id: 2,
    name: "Aisha Noor",
    title: "Graphic Designer",
    category: "Freelancers",
    rate: "15 USDC / hr",
    location: "Remote",
  },
  {
    id: 3,
    name: "Global VA Hub",
    title: "Virtual Assistants",
    category: "Online Workers",
    rate: "12 USDC / hr",
    location: "Remote",
  },
  {
    id: 4,
    name: "BuildRight Ltd",
    title: "Construction Contracting",
    category: "Contractors",
    rate: "Project-based",
    location: "East Africa",
  },
];

function Services() {
  const [activeCategory, setActiveCategory] = useState("Freelancers");

  const filteredServices = services.filter(
    (service) => service.category === activeCategory
  );

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">
            Services Marketplace
          </h1>
          <p className="mt-4 max-w-2xl text-[#9CA3AF]">
            Hire freelancers, online workers, and professionals with payments
            secured through escrow. Pay only when work is delivered.
          </p>
        </div>
      </section>

      {/* ================= CATEGORY TABS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "border-[#1F2937] text-[#9CA3AF] hover:border-[#D4AF37]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -6 }}
            className="bg-[#121212] border border-[#1F2937] rounded-2xl p-6 hover:border-[#D4AF37] transition"
          >
            {/* Avatar placeholder */}
            <div className="w-14 h-14 rounded-full bg-black border border-[#1F2937]" />

            <h3 className="mt-4 font-semibold text-lg">
              {service.name}
            </h3>

            <p className="mt-1 text-[#9CA3AF]">
              {service.title}
            </p>

            <p className="mt-3 text-sm text-[#9CA3AF]">
              📍 {service.location}
            </p>

            <div className="mt-4 inline-block text-xs px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
              Escrow Protected
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-bold text-[#D4AF37]">
                {service.rate}
              </span>

              <Link
                to={`/services/${service.id}`}
                className="text-sm underline hover:text-[#D4AF37]"
              >
                View Profile
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-black py-20 border-t border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Need a service instead?
          </h2>

          <p className="mt-6 text-[#9CA3AF]">
            Post a service request and receive escrow-backed proposals from
            verified professionals.
          </p>

          <Link
            to="/requests/create"
            className="inline-block mt-10 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Request a Service
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
