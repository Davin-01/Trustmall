import React, { useState } from "react";
import { motion } from "framer-motion";

function Requests() {
  const [type, setType] = useState("Product");

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">

      {/* ================= INTRO ================= */}
      <section className="border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">
            Request a Product or Service
          </h1>
          <p className="mt-4 max-w-2xl text-[#9CA3AF]">
            Post your demand and receive escrow-backed offers from verified
            sellers, freelancers, and contractors.
          </p>
        </div>
      </section>

      {/* ================= REQUEST TYPE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-4">
          {["Product", "Service", "Contract"].map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              className={`px-6 py-2 rounded-full border transition ${
                type === item
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "border-[#1F2937] text-[#9CA3AF] hover:border-[#D4AF37]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#121212] border border-[#1F2937] rounded-2xl p-8 space-y-6"
        >
          <h2 className="text-xl font-semibold">
            {type} Request Details
          </h2>

          {/* Title */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder={`Briefly describe the ${type.toLowerCase()} you need`}
              className="w-full bg-black border border-[#1F2937] rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-2">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Provide more details, requirements, timelines..."
              className="w-full bg-black border border-[#1F2937] rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-2">
              Budget (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. 500 USDC"
              className="w-full bg-black border border-[#1F2937] rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-2">
              Expected Timeline
            </label>
            <input
              type="text"
              placeholder="e.g. 2 weeks"
              className="w-full bg-black border border-[#1F2937] rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Escrow Notice */}
          <div className="bg-black border border-[#1F2937] rounded-lg p-4 text-sm text-[#9CA3AF]">
            🔒 Funds will be locked in escrow and only released when the
            {type.toLowerCase()} is delivered as agreed.
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Submit Request
          </button>
        </motion.form>
      </section>
    </div>
  );
}

export default Requests;
