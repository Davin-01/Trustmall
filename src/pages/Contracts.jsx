import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const contractTypes = [
  {
    name: "Service Contract",
    desc: "For freelancers, consultants, and online workers.",
  },
  {
    name: "Supply Agreement",
    desc: "For goods, raw materials, and bulk trade.",
  },
  {
    name: "Construction Contract",
    desc: "For contractors, milestones, and phased payments.",
  },
  {
    name: "Cross-border Trade Contract",
    desc: "For imports, exports, and logistics agreements.",
  },
];

const sampleContracts = [
  {
    id: 1,
    title: "Website Development Agreement",
    parties: "Client & Developer",
    escrow: "3 Milestones",
    status: "Draft",
  },
  {
    id: 2,
    title: "Maize Supply Agreement",
    parties: "Exporter & Buyer",
    escrow: "Single Release",
    status: "Active",
  },
  {
    id: 3,
    title: "Warehouse Construction Contract",
    parties: "Investor & Contractor",
    escrow: "5 Milestones",
    status: "Completed",
  },
];

function Contracts() {
  const [activeType, setActiveType] = useState(null);

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">

      {/* ================= INTRO ================= */}
      <section className="border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">
            Smart Contracts & Agreements
          </h1>
          <p className="mt-4 max-w-2xl text-[#9CA3AF]">
            Create legally structured agreements with escrow-backed payments,
            milestone releases, and dispute protection.
          </p>
        </div>
      </section>

      {/* ================= CONTRACT TYPES ================= */}
      కాగా
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10">
          Choose Contract Type
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contractTypes.map((type) => (
            <motion.div
              key={type.name}
              whileHover={{ y: -6 }}
              onClick={() => setActiveType(type.name)}
              className={`cursor-pointer bg-[#121212] border rounded-2xl p-6 transition ${
                activeType === type.name
                  ? "border-[#D4AF37]"
                  : "border-[#1F2937] hover:border-[#D4AF37]"
              }`}
            >
              <h3 className="font-semibold text-lg text-[#D4AF37]">
                {type.name}
              </h3>
              <p className="mt-3 text-sm text-[#9CA3AF]">
                {type.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTRACT LIST ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-10">
          Sample Contracts
        </h2>

        <div className="space-y-6">
          {sampleContracts.map((contract) => (
            <motion.div
              key={contract.id}
              whileHover={{ scale: 1.01 }}
              className="bg-[#121212] border border-[#1F2937] rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {contract.title}
                </h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">
                  {contract.parties}
                </p>
              </div>

              <div className="flex gap-6 text-sm text-[#9CA3AF]">
                <span>🔒 {contract.escrow}</span>
                <span
                  className={`font-medium ${
                    contract.status === "Active"
                      ? "text-[#D4AF37]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  {contract.status}
                </span>
              </div>

              <Link
                to={`/contracts/${contract.id}`}
                className="underline text-sm hover:text-[#D4AF37]"
              >
                View
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-black py-20 border-t border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Create a Secure Contract
          </h2>

          <p className="mt-6 text-[#9CA3AF]">
            Define terms, add milestones, lock funds in escrow, and trade with
            confidence.
          </p>

          <Link
            to="/contracts/create"
            className="inline-block mt-10 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Create Contract
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Contracts;
