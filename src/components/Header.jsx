import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0F172A] border-b border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#F8FAFC]">
          Trust<span className="text-[#3B82F6]">Mall</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#CBD5E1]">
          <Link to="/" className="hover:text-[#3B82F6]">Home</Link>
          <Link to="/marketplace" className="hover:text-[#3B82F6]">Marketplace</Link>
          <Link to="/services" className="hover:text-[#3B82F6]">Services</Link>
          <Link to="/contracts" className="hover:text-[#3B82F6]">Contracts</Link>
          <Link to="/requests" className="hover:text-[#3B82F6]">Requests</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/escrow"
            className="bg-[#3B82F6] text-[#0F172A] px-5 py-2 rounded-lg text-sm font-semibold shadow-md hover:opacity-95 transition"
          >
            Use Escrow
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F8FAFC]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#020617] border-t border-gray-700 px-6 py-4 space-y-4 text-[#CBD5E1]">
          <Link onClick={() => setIsOpen(false)} to="/" className="block">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/marketplace" className="block">Marketplace</Link>
          <Link onClick={() => setIsOpen(false)} to="/services" className="block">Services</Link>
          <Link onClick={() => setIsOpen(false)} to="/contracts" className="block">Contracts</Link>
          <Link onClick={() => setIsOpen(false)} to="/requests" className="block">Requests</Link>

          <Link
            onClick={() => setIsOpen(false)}
            to="/escrow"
            className="block text-center bg-[#3B82F6] text-[#0F172A] py-2 rounded-lg font-semibold"
          >
            Use Escrow
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
