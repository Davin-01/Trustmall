import React, { useState } from "react";
import { Link } from "react-router-dom";

function Escrow() {
  const [formData, setFormData] = useState({
    buyer: "",
    seller: "",
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Escrow Created:", formData);
    alert("Escrow created successfully!");
    // Here, you can later integrate backend API to actually create escrow
  };

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
          Create a Secure Escrow
        </h1>
        <p className="mt-6 text-[#9CA3AF] max-w-2xl mx-auto">
          Lock funds securely until delivery is confirmed. TrustMall ensures safe
          transactions for products, services, and contracts.
        </p>
      </section>

      {/* ================= ESCROW FORM ================= */}
      <section className="max-w-3xl mx-auto px-6 py-16 bg-[#121212] rounded-2xl border border-[#1F2937] shadow-md">
        <h2 className="text-2xl font-bold text-[#D4AF37] mb-8 text-center">
          Escrow Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-[#CBD5E1]">Buyer Name</label>
            <input
              type="text"
              name="buyer"
              value={formData.buyer}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#1F2937] text-white focus:border-[#D4AF37] outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-[#CBD5E1]">Seller Name</label>
            <input
              type="text"
              name="seller"
              value={formData.seller}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#1F2937] text-white focus:border-[#D4AF37] outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-[#CBD5E1]">Amount (USD)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#1F2937] text-white focus:border-[#D4AF37] outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-[#CBD5E1]">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#1F2937] text-white focus:border-[#D4AF37] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-200"
          >
            Create Escrow
          </button>
        </form>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-12">
          Why Use TrustMall Escrow?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Secure Transactions",
              desc: "Funds are held safely until all parties fulfill their obligations.",
            },
            {
              title: "Transparent Process",
              desc: "Both buyer and seller can track the status of funds and delivery.",
            },
            {
              title: "Dispute Resolution",
              desc: "In case of conflict, our system ensures fair resolution.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#121212] p-8 rounded-2xl border border-[#1F2937] shadow-sm hover:scale-105 transition-transform duration-200">
              <h3 className="text-[#D4AF37] font-semibold text-xl">{item.title}</h3>
              <p className="mt-4 text-[#9CA3AF]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BACK TO MARKETPLACE ================= */}
      <section className="text-center py-12">
        <Link
          to="/marketplace"
          className="inline-block bg-[#3B82F6] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-200"
        >
          Back to Marketplace
        </Link>
      </section>

    </div>
  );
}

export default Escrow;
