import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

const products = [
  {
    id: 1,
    title: "Smart TV 55-inch",
    category: "Home & Living",
    sub: "Electronics",
    price: "650 USDC",
    location: "Kenya",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Sofa Set",
    category: "Home & Living",
    sub: "Furniture",
    price: "900 USDC",
    location: "Kenya",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Premium Maize Supply",
    category: "Agriculture",
    sub: "Farm Produce",
    price: "120 USDC",
    location: "Uganda",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Tractor for Lease",
    category: "Agriculture",
    sub: "Machinery",
    price: "300 USDC",
    location: "Tanzania",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Used Toyota Hilux",
    category: "Automotive",
    sub: "Vehicles",
    price: "18,000 USDC",
    location: "Kenya",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Men's Designer Jacket",
    category: "Fashion",
    sub: "Men",
    price: "150 USDC",
    location: "Kenya",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=300&fit=crop",
  },
  {
    id: 7,
    title: "Construction Cement Bags",
    category: "Construction",
    sub: "Materials",
    price: "500 USDC",
    location: "Uganda",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Import Electronics Package",
    category: "Cross-border Trade",
    sub: "Imports",
    price: "5,000 USDC",
    location: "Kenya",
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=300&fit=crop",
  },
];

// SVG Icons as components
const FilterIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon = ({ isOpen }) => (
  <svg 
    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Marketplace() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  const filteredProducts = products.filter((product) => {
    if (!activeCategory && !activeSub) return true;
    if (activeCategory && product.category !== activeCategory) return false;
    if (activeSub && product.sub !== activeSub) return false;
    return true;
  });

  const toggleCategory = (catName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

  const handleCategoryClick = (catName) => {
    setActiveCategory(catName);
    setActiveSub(null);
    setMobileFilterOpen(false);
  };

  const handleSubClick = (catName, sub) => {
    setActiveCategory(catName);
    setActiveSub(sub);
    setMobileFilterOpen(false);
  };

  const clearFilters = () => {
    setActiveCategory(null);
    setActiveSub(null);
    setMobileFilterOpen(false);
  };

  // Category Sidebar Component
  const CategorySidebar = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Categories</h3>
        {(activeCategory || activeSub) && (
          <button
            onClick={clearFilters}
            className="text-xs underline text-[#9CA3AF] hover:text-[#D4AF37] transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {categories.map((cat) => (
        <div key={cat.name} className="mb-4">
          <div className="flex items-center justify-between">
            <p
              onClick={() => handleCategoryClick(cat.name)}
              className={`font-medium cursor-pointer transition-colors ${
                activeCategory === cat.name ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
              }`}
            >
              {cat.name}
            </p>
            <button
              onClick={() => toggleCategory(cat.name)}
              className="p-1 hover:bg-[#1F2937] rounded transition-colors"
            >
              <ChevronDownIcon isOpen={expandedCategories[cat.name]} />
            </button>
          </div>

          <AnimatePresence>
            {expandedCategories[cat.name] && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-3 mt-2 space-y-2 text-sm overflow-hidden"
              >
                {cat.subs.map((sub) => (
                  <li
                    key={sub}
                    onClick={() => handleSubClick(cat.name, sub)}
                    className={`cursor-pointer transition-colors py-1 ${
                      activeSub === sub
                        ? "text-[#D4AF37]"
                        : "text-[#9CA3AF] hover:text-white"
                    }`}
                  >
                    {sub}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">
      {/* HEADER */}
      <section className="border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Marketplace</h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#9CA3AF] max-w-2xl">
            Browse escrow-protected products across trusted categories.
          </p>
        </div>
      </section>

      {/* MOBILE FILTER BUTTON - Sticky on mobile */}
      <div className="lg:hidden sticky top-0 z-30 bg-[#0B0B0B] border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#121212] border border-[#1F2937] rounded-xl hover:border-[#D4AF37] transition-all w-full sm:w-auto justify-center sm:justify-start"
          >
            <FilterIcon />
            <span className="text-sm font-medium">
              {activeCategory || activeSub ? "Filters Applied" : "Filter Products"}
            </span>
            {(activeCategory || activeSub) && (
              <span className="ml-auto w-2 h-2 bg-[#D4AF37] rounded-full"></span>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilterOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#0B0B0B] z-50 overflow-y-auto border-r border-[#1F2937] shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-2 hover:bg-[#1F2937] rounded-lg transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <CategorySidebar />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16 grid lg:grid-cols-4 gap-6 lg:gap-12">
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-6">
            <CategorySidebar />
          </div>
        </aside>

        {/* PRODUCTS */}
        <div className="lg:col-span-3">
          {/* Active Filter Badge */}
          {(activeCategory || activeSub) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex flex-wrap items-center gap-2"
            >
              <span className="text-sm text-[#9CA3AF]">Filtered by:</span>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#121212] border border-[#1F2937] rounded-lg">
                <span className="text-sm text-[#D4AF37]">
                  {activeSub || activeCategory}
                </span>
                <button
                  onClick={clearFilters}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  <XIcon />
                </button>
              </div>
            </motion.div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-16 sm:py-20">
                <div className="max-w-md mx-auto">
                  <p className="text-lg sm:text-xl text-[#9CA3AF] mb-4">
                    No products found in this category.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="text-sm sm:text-base text-[#D4AF37] hover:underline"
                  >
                    Clear filters to see all products
                  </button>
                </div>
              </div>
            )}

            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-[#121212] border border-[#1F2937] rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden group">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[#D4AF37] border border-[#D4AF37]/30">
                    Escrow
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg line-clamp-1 hover:text-[#D4AF37] transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm text-[#9CA3AF]">
                    {product.category} • {product.sub}
                  </p>
                  
                  <p className="mt-1 text-xs text-[#6B7280] flex items-center gap-1">
                    <span>📍</span> {product.location}
                  </p>

                  <div className="mt-4 sm:mt-6 flex items-center justify-between">
                    <span className="font-bold text-base sm:text-lg text-[#D4AF37]">
                      {product.price}
                    </span>

                    <Link
                      to={`/marketplace/${product.id}`}
                      className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] rounded-lg transition-all duration-200 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Marketplace;