import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-gray-950 text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background gradient glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent blur-3xl"
        />

        {/* Floating accent */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* ===== HERO TEXT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="inline-block bg-black mb-6 px-4 py-2 text-sm rounded-full border border-[#1F2937] text-[#D4AF37]">
              Escrow-secured marketplace
            </span>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
              Trade without
              <span className="block mt-3 text-[#D4AF37]">
                trust issues
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl max-w-xl text-[#9CA3AF]">
              TrustMall secures payments for products, services, and contracts by
              locking funds in escrow until delivery is confirmed.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                to="/escrow/create"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
              >
                Use Escrow
              </Link>

              <Link
                to="/marketplace"
                className="px-8 py-4 rounded-xl border border-[#1F2937] hover:border-[#D4AF37] transition"
              >
                Explore Marketplace
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#9CA3AF]">
              <span>✔ Buyer Protection</span>
              <span>✔ Dispute Resolution</span>
              <span>✔ Cross-border Ready</span>
            </div>
          </motion.div>

          {/* ===== HERO IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Image glow */}
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full" />

            <img
              src="/src/assets/pic1.jpg"
              alt="Secure escrow trade"
              className="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl border border-[#1F2937]"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= HOW ESCROW WORKS ================= */}
      <section className="py-28 border-t border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            How TrustMall Escrow Works
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Buyer Pays Escrow",
                desc: "Funds are locked securely and held until delivery.",
              },
              {
                title: "Seller Delivers",
                desc: "Goods or services are delivered as agreed.",
              },
              {
                title: "Funds Released",
                desc: "Payment is released once delivery is confirmed.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-[#121212] p-10 rounded-2xl border border-[#1F2937] hover:border-[#D4AF37] transition"
              >
                <h3 className="text-[#D4AF37] font-semibold text-xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-[#9CA3AF]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MARKETPLACE CATEGORIES ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Explore the Marketplace
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Home & Living",
              "Agriculture",
              "Automotive",
              "Construction",
              "Fashion",
              "Cross-border Trade",
            ].map((category, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group bg-[#121212] p-8 rounded-2xl border border-[#1F2937] hover:border-[#D4AF37] cursor-pointer transition"
              >
                <h3 className="text-lg font-semibold group-hover:text-[#D4AF37] transition">
                  {category}
                </h3>
                <p className="mt-3 text-sm text-[#9CA3AF]">
                  Secure escrow-backed trading
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEMAND CTA ================= */}
      <section className="py-28 border-t border-[#1F2937] bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Make the market come to you
          </h2>

          <p className="mt-6 text-[#9CA3AF] text-lg">
            Request a product or service and receive escrow-protected offers
            from verified sellers.
          </p>

          <Link
            to="/requests"
            className="inline-block mt-12 bg-[#D4AF37] text-black px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Request a Product or Service
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
