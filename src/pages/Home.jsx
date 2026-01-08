import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pic1 from "../assets/pic1.jpg";

function Home() {
  return (
    <div className="bg-gray-950 text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Animated gradient background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-purple-900/10 to-transparent blur-3xl"
        />

        {/* Multiple floating accents */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl"
        />
        
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-3xl"
        />

        {/* Particle grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">

          {/* ===== HERO TEXT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-[#D4AF37]/20 to-purple-900/20 backdrop-blur-sm mb-6 px-5 py-2.5 text-sm rounded-full border border-[#D4AF37]/30 text-[#D4AF37] shadow-lg"
            >
              🔒 Escrow-secured marketplace
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight"
            >
              Trade without
              <span className="block mt-3 bg-gradient-to-r from-[#D4AF37] via-yellow-400 to-[#D4AF37] bg-clip-text text-transparent animate-pulse">
                trust issues
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg md:text-xl max-w-xl text-gray-300 leading-relaxed"
            >
              TrustMall secures payments for products, services, and contracts by
              locking funds in escrow until delivery is confirmed.
            </motion.p>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <Link
                to="/escrow"
                className="group relative bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Use Escrow</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                to="/marketplace"
                className="relative px-8 py-4 rounded-xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:border-[#D4AF37] hover:bg-gray-800/50 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">Explore Marketplace</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex flex-wrap gap-6 text-sm"
            >
              {[
                { icon: "🛡️", text: "Buyer Protection" },
                { icon: "⚖️", text: "Dispute Resolution" },
                { icon: "🌍", text: "Cross-border Ready" }
              ].map((item, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-800 hover:border-[#D4AF37]/50 transition-all cursor-default"
                >
                  <span>{item.icon}</span>
                  <span className="text-gray-300">{item.text}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== HERO IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Animated glow rings */}
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 via-purple-500/20 to-[#D4AF37]/30 blur-3xl rounded-full"
            />
            
            <motion.div 
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-l from-[#D4AF37]/20 via-transparent to-purple-500/20 blur-2xl rounded-full"
            />

            <motion.img
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              src={pic1}
              alt="Secure escrow trade"
              className="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= HOW ESCROW WORKS ================= */}
      <section className="py-28 border-t border-gray-900 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              How TrustMall Escrow Works
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Simple, secure, and transparent process from start to finish
            </p>
          </motion.div>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Buyer Pays Escrow",
                desc: "Funds are locked securely and held until delivery.",
                icon: "💰"
              },
              {
                step: "02",
                title: "Seller Delivers",
                desc: "Goods or services are delivered as agreed.",
                icon: "📦"
              },
              {
                step: "03",
                title: "Funds Released",
                desc: "Payment is released once delivery is confirmed.",
                icon: "✅"
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 p-10 rounded-2xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-xl flex items-center justify-center font-bold text-black shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-[#D4AF37] font-semibold text-xl mb-3 group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.desc}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Connection line between steps */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-1">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent origin-left"
            />
          </div>
        </div>
      </section>

      {/* ================= MARKETPLACE CATEGORIES ================= */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore the Marketplace
            </h2>
            <p className="text-gray-400 text-lg mb-14">
              Browse categories with escrow-backed security
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Home & Living", icon: "🏠", color: "from-blue-500/20 to-cyan-500/20" },
              { name: "Agriculture", icon: "🌾", color: "from-green-500/20 to-emerald-500/20" },
              { name: "Automotive", icon: "🚗", color: "from-red-500/20 to-orange-500/20" },
              { name: "Construction", icon: "🏗️", color: "from-yellow-500/20 to-amber-500/20" },
              { name: "Fashion", icon: "👗", color: "from-pink-500/20 to-purple-500/20" },
              { name: "Cross-border Trade", icon: "🌍", color: "from-indigo-500/20 to-violet-500/20" },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-[#D4AF37] cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                <h3 className="relative text-lg font-semibold group-hover:text-[#D4AF37] transition-colors duration-300 mb-2">
                  {category.name}
                </h3>
                <p className="relative text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Secure escrow-backed trading
                </p>

                {/* Arrow indicator */}
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute bottom-6 right-6 text-[#D4AF37]"
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEMAND CTA ================= */}
      <section className="py-28 border-t border-gray-900 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#D4AF37]/10 via-purple-500/10 to-[#D4AF37]/10 blur-3xl rounded-full"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Make the market come to you
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Request a product or service and receive escrow-protected offers
              from verified sellers.
            </p>

            <Link
              to="/requests"
              className="group inline-block mt-12 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black px-12 py-5 rounded-xl font-semibold shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Product or Service
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>

          {/* Stats or trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "10k+", label: "Active Users" },
              { value: "99.8%", label: "Success Rate" },
              { value: "$5M+", label: "Secured" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default Home;