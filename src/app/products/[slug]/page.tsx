"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/websiteData";
import { 
  ArrowLeft, CheckCircle2, FileText, ChevronRight, HelpCircle, 
  ShieldCheck, Package, ListChecks, Settings, Info, ShoppingBag 
} from "lucide-react";
import ProductCard from "@/components/ProductCard";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  // Use React's use hook to unwrap the params promise in client component
  const resolvedParams = use(params);
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Get related products (exclude current, take next 3)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleOpenSpecQuote = () => {
    window.dispatchEvent(
      new CustomEvent("open-quote-modal", {
        detail: { product: product.name }
      })
    );
  };

  return (
    <div className="w-full bg-light-grey min-h-screen pb-16">
      {/* Breadcrumbs / Back button */}
      <div className="bg-white border-b border-gray-150 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Products
          </Link>
          <div className="text-[11px] text-gray-400 font-semibold flex items-center gap-1">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={10} />
            <Link href="/products" className="hover:underline">Products</Link>
            <ChevronRight size={10} />
            <span className="text-gray-600 truncate max-w-[120px] sm:max-w-none">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: DETAILS & SPECS (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header info */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm space-y-4">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-primary/5 text-primary text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-primary/5">
                  Formula: {product.formula}
                </span>
                <span className="bg-secondary/10 text-secondary text-[10px] font-mono font-bold px-2.5 py-1 rounded">
                  CAS No: {product.casNo}
                </span>
                <span className="bg-gray-100 text-gray-700 text-[10px] font-semibold px-2.5 py-1 rounded">
                  {product.grade}
                </span>
              </div>
              
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-primary leading-snug">
                {product.name}
              </h1>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-lg text-primary flex items-center gap-2">
                <Settings size={20} className="text-secondary" />
                Technical Specifications Table
              </h3>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-xs">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                        Parameters
                      </th>
                      <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                        Typical Analysis Values
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                    <tr>
                      <td className="px-6 py-3 font-semibold bg-gray-50/50">Chemical Name</td>
                      <td className="px-6 py-3 font-mono">{product.name}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-semibold bg-gray-50/50">Chemical Formula</td>
                      <td className="px-6 py-3 font-mono">{product.formula}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-semibold bg-gray-50/50">CAS Registry No</td>
                      <td className="px-6 py-3 font-mono">{product.casNo}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-semibold bg-gray-50/50">Assay (Purity)</td>
                      <td className="px-6 py-3 font-bold text-primary">{product.purity}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-semibold bg-gray-50/50">Appearance / State</td>
                      <td className="px-6 py-3">{product.appearance}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-semibold bg-gray-50/50">Standard Packaging</td>
                      <td className="px-6 py-3">{product.packing}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-semibold bg-gray-50/50">Grade Availability</td>
                      <td className="px-6 py-3">{product.grade}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications & Industries */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Applications */}
              <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm space-y-4">
                <h3 className="font-display font-bold text-base text-primary flex items-center gap-2">
                  <ListChecks size={18} className="text-secondary" />
                  Key Applications
                </h3>
                <ul className="space-y-2.5 text-xs text-gray-600">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-secondary shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries Served */}
              <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm space-y-4">
                <h3 className="font-display font-bold text-base text-primary flex items-center gap-2">
                  <Package size={18} className="text-secondary" />
                  Industries Served
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.industries.map((ind, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg border border-primary/5"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
                <div className="pt-2 text-xs text-gray-500 flex items-start gap-1">
                  <Info size={14} className="shrink-0 mt-0.5" />
                  <span>Custom specifications available for specialized industry batches.</span>
                </div>
              </div>

            </div>

            {/* Benefits & Value Proposition */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-base text-primary flex items-center gap-2">
                <ShieldCheck size={18} className="text-secondary" />
                Product Benefits & Quality Safeguards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-750">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            {product.faqs && product.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm space-y-6">
                <h3 className="font-display font-bold text-lg text-primary flex items-center gap-2">
                  <HelpCircle size={20} className="text-secondary" />
                  Frequently Asked Questions (FAQ)
                </h3>
                <div className="space-y-4">
                  {product.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 bg-light-grey rounded-2xl border border-gray-200/60 space-y-2">
                      <h4 className="font-display font-bold text-sm text-gray-900 flex items-start gap-2">
                        <span className="text-accent">Q:</span>
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: STICKY INQUIRY & DOWNLOADS (4 Cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            {/* Lead Capture form specifically for this product */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-md space-y-4">
              <div>
                <h4 className="font-display font-bold text-lg text-primary leading-snug">
                  Request Factory Quote
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Request bulk pricing and specimen availability for <span className="font-bold text-accent">{product.name}</span>.
                </p>
              </div>

              {/* Direct Quick Form linking to window modal event */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleOpenSpecQuote}
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag size={14} />
                  Get Factory Quotation
                </button>

                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("open-sample-modal", {
                        detail: { productName: product.name }
                      })
                    );
                  }}
                  className="w-full bg-primary/5 hover:bg-primary/10 border border-primary/20 text-primary font-bold px-6 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>🧪</span>
                  Request Free Lab Sample (250g)
                </button>

                <Link
                  href="/tools"
                  className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-250 text-gray-700 font-semibold px-4 py-2 rounded-xl text-[11px] transition-colors flex items-center justify-center gap-2"
                >
                  <span>📊</span>
                  Bulk Packaging & Freight Calculator
                </Link>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-semibold">
                <span>🏭 Direct Vatva GIDC rates</span>
                <span>⏱️ Response: 2 Hrs</span>
              </div>
            </div>

            {/* TDS / MSDS Lead Downloads */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-md space-y-4">
              <h4 className="font-display font-bold text-base text-primary">
                Technical Documents
              </h4>
              <p className="text-xs text-gray-600">
                To download the Technical Data Sheet (TDS) and Material Safety Data Sheet (MSDS) for this batch, request a quote above. We will send the PDFs directly to your corporate inbox.
              </p>

              <div className="space-y-2">
                <button
                  onClick={handleOpenSpecQuote}
                  className="w-full bg-light-grey hover:bg-gray-100 border border-gray-250 text-gray-800 text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText size={14} className="text-red-500" />
                  Request TDS (Technical Data Sheet)
                </button>
                <button
                  onClick={handleOpenSpecQuote}
                  className="w-full bg-light-grey hover:bg-gray-100 border border-gray-250 text-gray-800 text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText size={14} className="text-red-500" />
                  Request MSDS (Safety Data Sheet)
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-16 space-y-8">
          <div className="border-t border-gray-200 pt-12 text-left">
            <h3 className="font-display font-extrabold text-2xl text-primary">
              Related Industrial Chemicals
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Explore other high-purity chemical powders manufactured at our Vatva GIDC facility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {relatedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
