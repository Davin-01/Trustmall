import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Services from "./pages/Services";
import Contracts from "./pages/Contracts";
import Requests from "./pages/Requests";
import Escrow from "./pages/Escrow";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-white">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/escrow" element={<Escrow />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
