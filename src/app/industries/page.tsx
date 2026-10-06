"use client";

import React from "react";
import Link from "next/link";
import { industries, products } from "@/data/websiteData";
import { CheckCircle2, ArrowRight, Sparkles, Flame, Droplet, Settings, FileText } from "lucide-react";

export default function IndustriesPage() {
  const handleOpenQuote = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  const getIndustryIcon = (id: string) => {
    switch(id) {
      case "pharma": return <Sparkles size={24} className="text-primary" />;
      case "textile": return <Flame size={24} className="text-primary" />;
      case "water-treatment": return <Droplet size={24} className="text-primary" />;
      case "food-processing": return <CheckCircle2 size={24} className="text-primary" />;
      case "chemical-processing": return <Settings size={24} className="text-primary" />;
      case "paper-industry": return <FileText size={24} className="text-primary" />;
      case "leather-industry": return <Sparkles size={24} className="text-primary" />;
      case "agriculture": return <CheckCircle2 size={24} className="text-primary" />;
      default: return <Settings size={24} className="text-primary" />;
    }
  };

  return (
    <div className="w-full bg-light-grey min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#051e47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Industries We Serve
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
            Providing industry-specific chemical grades that comply with national safety and purity standards.
          </p>
          <div className="text-xs text-white/50 space-x-2">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <span className="text-white">Industries</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Intro */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-sm text-left max-w-3xl space-y-4">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-primary">
            Custom Grades for Precision Manufacturing
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Industrial chemical performance depends heavily on particle size, purity levels, solubility, and pH stability. At Amar Chemicals, we work closely with procurement engineers to synthesize and pack chemical salts that align exactly with raw material specifications for various industries.
          </p>
        </div>

        {/* Detailed Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind) => {
            // Find products serving this industry
            const matchingProducts = products.filter((p) => p.industries.includes(ind.name));

            return (
              <div 
                key={ind.id} 
                className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      {getIndustryIcon(ind.id)}
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary">{ind.name}</h3>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {ind.description}
                  </p>

                  {/* Supporting chemicals */}
                  {matchingProducts.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                        Supplied Chemical Products
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {matchingProducts.map((prod) => (
                          <Link
                            key={prod.slug}
                            href={`/products/${prod.slug}`}
                            className="bg-light-grey hover:bg-primary/5 text-gray-700 hover:text-primary transition-colors text-[10px] font-semibold px-2.5 py-1 rounded border border-gray-200"
                          >
                            {prod.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xs">
                  <span className="text-gray-400">Ahmedabad Factory Despatched</span>
                  <button
                    onClick={handleOpenQuote}
                    className="text-primary hover:text-secondary font-bold flex items-center gap-1 group cursor-pointer"
                  >
                    Inquire for this Industry
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Quote Callout */}
        <div className="bg-[#051e47] rounded-3xl text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl space-y-6">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1470&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center" />
          <h3 className="font-display font-bold text-xl sm:text-2xl relative z-10">
            Request Custom Grade Chemical Synthesis
          </h3>
          <p className="text-xs text-white/70 max-w-xl mx-auto relative z-10 leading-relaxed">
            Need chemical specifications tailored to your manufacturing process? Consult with Jitendra Prajapati regarding custom assay values, mesh parameters, and specialized packing bags.
          </p>
          <div className="pt-2 relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleOpenQuote}
              className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-accent/15"
            >
              Consult Technical Team
            </button>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-white text-white bg-white/5 hover:bg-white/10 transition-colors font-semibold px-8 py-3 rounded-lg text-xs"
            >
              Contact Factory Desk
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
