import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#0F172A] border-b border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#F8FAFC]">
          Trust<span className="text-[#3B82F6]">Mall</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#CBD5E1]">          

          <Link 
            to="/" 
            className="hover:text-[#3B82F6] transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/marketplace" 
            className="hover:text-[#3B82F6] transition-colors duration-200"
          >
            Marketplace
          </Link>
          <Link 
            to="/services" 
            className="hover:text-[#3B82F6] transition-colors duration-200"
          >
            Services
          </Link>
          <Link 
            to="/contracts" 
            className="hover:text-[#3B82F6] transition-colors duration-200"
          >
            Contracts
          </Link>
          <Link 
            to="/requests" 
            className="hover:text-[#3B82F6] transition-colors duration-200"
          >
            Requests
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Escrow CTA */}
          <Link
            to="/escrow"
            className="bg-[#3B82F6] text-[#0F172A] px-5 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
          >
            Use Escrow
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Header;
