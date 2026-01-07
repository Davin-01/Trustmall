import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Home & Living",
    subs: ["Electronics", "Furniture", "Appliances"],
  },
  {
    name: "Agriculture",
    subs: ["Farm Produce", "Livestock", "Machinery"],
  },
  {
    name: "Automotive",
    subs: ["Vehicles", "Spare Parts", "Accessories"],
  },
  {
    name: "Construction",
    subs: ["Materials", "Tools", "Contractors"],
  },
  {
    name: "Fashion",
    subs: ["Men", "Women", "Children"],
  },
  {
    name: "Cross-border Trade",
    subs: ["Imports", "Exports", "Logistics"],
  },
];

// Enhanced product list with images
const products = [
  {
    id: 1,
    title: "Smart TV 55-inch",
    category: "Home & Living",
    sub: "Electronics",
    price: "650 USDC",
    location: "Kenya",
    img: "https://via.placeholder.com/400x240?text=Smart+TV",
  },
  {
    id: 2,
    title: "Luxury Sofa Set",
    category: "Home & Living",
    sub: "Furniture",
    price: "900 USDC",
    location: "Kenya",
    img: "https://via.placeholder.com/400x240?text=Sofa+Set",
  },
  {
    id: 3,
    title: "Premium Maize Supply",
    category: "Agriculture",
    sub: "Farm Produce",
    price: "120 USDC",
    location: "Uganda",
    img: "https://via.placeholder.com/400x240?text=Maize",
  },
  {
    id: 4,
    title: "Tractor for Lease",
    category: "Agriculture",
    sub: "Machinery",
    price: "300 USDC",
    location: "Tanzania",
    img: "https://via.placeholder.com/400x240?text=Tractor",
  },
  {
    id: 5,
    title: "Used Toyota Hilux",
    category: "Automotive",
    sub: "Vehicles",
    price: "18,000 USDC",
    location: "Kenya",
    img: "https://via.placeholder.com/400x240?text=Toyota+Hilux",
  },
  {
    id: 6,
    title: "Men's Designer Jacket",
    category: "Fashion",
    sub: "Men",
    price: "150 USDC",
    location: "Kenya",
    img: "https://via.placeholder.com/400x240?text=Jacket",
  },
  {
    id: 7,
    title: "Construction Cement Bags",
    category: "Construction",
    sub: "Materials",
    price: "500 USDC",
    location: "Uganda",
    img: "https://via.placeholder.com/400x240?text=Cement",
  },
  {
    id: 8,
    title: "Import Electronics Package",
    category: "Cross-border Trade",
    sub: "Imports",
    price: "5,000 USDC",
    location: "Kenya",
    img: "https://via.placeholder.com/400x240?text=Electronics",
  },
];

function Marketplace() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  const filteredProducts = products.filter((product) => {
    if (!activeCategory && !activeSub) return true;
    if (activeCategory && product.category !== activeCategory) return false;
    if (activeSub && product.sub !== activeSub) return false;
    return true;
  });

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">

      {/* HEADER */}
      <section className="border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="mt-4 text-[#9CA3AF] max-w-2xl">
            Browse escrow-protected products across trusted categories.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-12">

        {/* SIDEBAR */}
        <aside className="lg:col-span-1 space-y-10">
          <div>
            <h3 className="font-semibold text-lg mb-6">Categories</h3>

            {categories.map((cat) => (
              <div key={cat.name} className="mb-6">
                <p
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setActiveSub(null);
                  }}
                  className={`font-medium cursor-pointer ${
                    activeCategory === cat.name
                      ? "text-[#D4AF37]"
                      : "text-white"
                  }`}
                >
                  {cat.name}
                </p>

                <ul className="ml-3 mt-2 space-y-1 text-sm">
                  {cat.subs.map((sub) => (
                    <li
                      key={sub}
                      onClick={() => {
                        setActiveCategory(cat.name);
                        setActiveSub(sub);
                      }}
                      className={`cursor-pointer transition ${
                        activeSub === sub
                          ? "text-[#D4AF37]"
                          : "text-[#9CA3AF] hover:text-white"
                      }`}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {(activeCategory || activeSub) && (
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setActiveSub(null);
                }}
                className="mt-4 text-sm underline text-[#9CA3AF] hover:text-[#D4AF37]"
              >
                Clear filters
              </button>
            )}
          </div>
        </aside>

        {/* PRODUCTS */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length === 0 && (
            <p className="text-[#9CA3AF]">
              No products found in this category.
            </p>
          )}

          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6 }}
              className="bg-[#121212] border border-[#1F2937] rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-all duration-200"
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover border-b border-[#1F2937]"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">
                  {product.category} • {product.sub}
                </p>

                <div className="mt-3 inline-block text-xs px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                  Escrow Protected
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-bold text-[#D4AF37]">
                    {product.price}
                  </span>

                  <Link
                    to={`/marketplace/${product.id}`}
                    className="text-sm underline hover:text-[#D4AF37]"
                  >
                    View
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Marketplace;
