"use client";

import React, { useState } from "react";
import Link from "next/link";
import { products } from "@/data/websiteData";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, HelpCircle, FileDown } from "lucide-react";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const handleOpenQuote = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  // Extract all unique industries for filtering
  const allIndustries = ["All", ...Array.from(new Set(products.flatMap(p => p.industries)))];

  const filteredProducts = products.filter((prod) => {
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.casNo.includes(searchQuery) ||
      prod.formula.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesIndustry = selectedIndustry === "All" || prod.industries.includes(selectedIndustry);

    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="w-full bg-light-grey min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#051e47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Our Chemical Products
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
            Browse our complete line of high-purity sulfites, bisulfites, and bicarbonate powders. Laboratory tested for industrial perfection.
          </p>
          <div className="text-xs text-white/50 space-x-2">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        
        {/* Search and Filter bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-150 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3.5 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search by chemical name, CAS, or molecular formula..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
            />
          </div>

          {/* Industry Filter dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-xs font-semibold text-gray-500 flex items-center gap-1 shrink-0">
              <Filter size={14} />
              Filter by Industry:
            </span>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full md:w-48 px-3 py-2 border border-gray-250 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs text-gray-700 font-semibold"
            >
              {allIndustries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-150 space-y-4 max-w-lg mx-auto">
            <HelpCircle size={48} className="text-gray-300 mx-auto" />
            <h3 className="font-display font-bold text-lg text-gray-900">No Chemicals Found</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We couldn't find any products matching your search term. Try checking for spelling or select a different industry filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedIndustry("All");
              }}
              className="text-xs text-primary font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Brochure CTA block */}
        <div className="bg-[#051e47] rounded-3xl text-white p-8 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-6 mt-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1470&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center" />
          <div className="space-y-2 relative z-10 text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl">Download Technical Data Catalog</h3>
            <p className="text-xs text-white/70 max-w-xl">
              Get immediate offline access to all our chemical compound grades, chemical formulas, physical forms, and packaging specifications in one PDF brochure.
            </p>
          </div>
          <div className="flex gap-4 shrink-0 relative z-10 w-full md:w-auto">
            <Link
              href="/downloads"
              className="w-full md:w-auto bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <FileDown size={14} />
              Brochure Downloads
            </Link>
            <button
              onClick={handleOpenQuote}
              className="w-full md:w-auto border border-white/20 hover:border-white text-white bg-white/5 hover:bg-white/10 transition-colors font-semibold px-6 py-3 rounded-lg text-xs cursor-pointer"
            >
              Request Custom Batch Spec
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
