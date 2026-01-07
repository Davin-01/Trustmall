import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-sm text-[#CBD5E1]">

        {/* Brand */}
        <div>
          <h3 className="text-[#F8FAFC] font-semibold text-lg">
            Trust<span className="text-[#3B82F6]">Mall</span>
          </h3>
          <p className="mt-4 text-[#94A3B8] leading-relaxed">
            A decentralized escrow-powered marketplace enabling secure and
            transparent trade across borders.
          </p>
        </div>

        {/* Marketplace */}
        <div>
          <h4 className="text-[#F8FAFC] font-semibold mb-4">Marketplace</h4>
          <ul className="space-y-2">
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Products</li>
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Services</li>
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Contracts</li>
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Requests</li>
          </ul>
        </div>

        {/* Trust & Safety */}
        <div>
          <h4 className="text-[#F8FAFC] font-semibold mb-4">Trust & Safety</h4>
          <ul className="space-y-2">
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">How Escrow Works</li>
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Report a Dispute</li>
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Buyer Protection</li>
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Seller Guidelines</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[#F8FAFC] font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Terms of Service</li>
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Privacy Policy</li>
            <li className="hover:text-[#3B82F6] cursor-pointer transition-colors duration-200">Compliance</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-center text-xs text-[#94A3B8]">
        © {new Date().getFullYear()} TrustMall. Secured by Escrow.
      </div>
    </footer>
  );
}

export default Footer;
