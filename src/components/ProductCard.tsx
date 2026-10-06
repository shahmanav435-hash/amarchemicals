"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Tag, HelpCircle, FileText, ShoppingBag } from "lucide-react";
import { Product } from "../data/websiteData";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleInquire = () => {
    window.dispatchEvent(
      new CustomEvent("open-quote-modal", {
        detail: { product: product.name },
      })
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden">
      {/* Product Chemical Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white relative">
        <div className="absolute top-4 right-4 bg-white/10 text-white backdrop-blur-md text-[10px] font-mono font-semibold px-2 py-0.5 rounded border border-white/10">
          CAS: {product.casNo}
        </div>
        <span className="text-secondary font-mono text-xs font-semibold uppercase tracking-wider block mb-1">
          {product.formula}
        </span>
        <h3 className="font-display font-bold text-lg leading-snug group-hover:text-secondary transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-white/60 text-xs mt-1 font-mono font-medium">{product.grade}</p>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        {/* Description */}
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Specifications Snippet */}
        <div className="bg-light-grey rounded-xl p-3 text-[11px] space-y-1.5 font-sans border border-gray-100">
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold">Purity:</span>
            <span className="text-gray-900 font-bold">{product.purity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold">Form:</span>
            <span className="text-gray-900 font-medium truncate max-w-[150px]">{product.appearance}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold">Packaging:</span>
            <span className="text-gray-900 font-medium truncate max-w-[150px]">{product.packing}</span>
          </div>
        </div>

        {/* Key Applications Tags */}
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
            Top Applications
          </span>
          <div className="flex flex-wrap gap-1.5">
            {product.applications.slice(0, 2).map((app, idx) => (
              <span
                key={idx}
                className="bg-primary/5 text-primary text-[10px] font-semibold px-2.5 py-1 rounded-full border border-primary/5 truncate max-w-[130px]"
                title={app}
              >
                {app.split("in ")[1] || app.split("for ")[1] || app}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 border-t border-gray-50 grid grid-cols-2 gap-3 mt-auto">
        <Link
          href={`/products/${product.slug}`}
          className="w-full text-center border border-gray-200 hover:border-primary text-gray-700 hover:text-primary transition-all text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-1 group-hover:bg-primary/5 cursor-pointer"
        >
          View Specs
          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <button
          onClick={handleInquire}
          className="w-full bg-accent hover:bg-accent-dark text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-sm shadow-accent/10"
        >
          <ShoppingBag size={12} />
          Inquire Now
        </button>
      </div>
    </div>
  );
}
