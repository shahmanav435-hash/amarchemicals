"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Calculator, Scale, Compass, Ship, ArrowRight, CheckCircle2, 
  Send, Sparkles, Box, Truck, ShieldCheck, Download, 
  Layers, ChevronRight, HelpCircle, FileText, FlaskConical, MessageSquare, Phone
} from "lucide-react";
import { products, industries, companyDetails } from "@/data/websiteData";

export default function ChemicalToolsPage() {
  const [activeTab, setActiveTab] = useState<"calculator" | "compare" | "recommender" | "export">("calculator");

  // ================= CALCULATOR STATE =================
  const [selectedProductSlug, setSelectedProductSlug] = useState(products[0].slug);
  const [quantityValue, setQuantityValue] = useState<number>(5);
  const [quantityUnit, setQuantityUnit] = useState<"MT" | "KG" | "BAGS_25" | "BAGS_50">("MT");
  const [packagingType, setPackagingType] = useState<"25kg_hdpe" | "50kg_hdpe" | "1000kg_jumbo" | "palletized">("25kg_hdpe");
  const [destination, setDestination] = useState<"gujarat" | "west_india" | "pan_india" | "export_mundra">("gujarat");
  const [buyerName, setBuyerName] = useState("");
  const [buyerCompany, setBuyerCompany] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");

  const currentCalcProduct = useMemo(() => {
    return products.find(p => p.slug === selectedProductSlug) || products[0];
  }, [selectedProductSlug]);

  // Derived calculations
  const totalWeightInKg = useMemo(() => {
    if (quantityUnit === "MT") return quantityValue * 1000;
    if (quantityUnit === "KG") return quantityValue;
    if (quantityUnit === "BAGS_25") return quantityValue * 25;
    if (quantityUnit === "BAGS_50") return quantityValue * 50;
    return quantityValue * 1000;
  }, [quantityValue, quantityUnit]);

  const totalMetricTons = (totalWeightInKg / 1000).toFixed(2);
  const bags25kgCount = Math.ceil(totalWeightInKg / 25);
  const bags50kgCount = Math.ceil(totalWeightInKg / 50);
  const jumboBagsCount = Math.ceil(totalWeightInKg / 1000);
  const palletsCount = Math.ceil(bags25kgCount / 40); // 40 bags of 25kg (1 MT) per standard wooden pallet
  const fclUtilization = Math.min(100, Math.round((totalWeightInKg / 25000) * 100)); // 25 MT per 20ft container

  const handleSendCalcQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const pkgLabel = packagingType === "25kg_hdpe" ? "25kg HDPE Bags with Liner" 
      : packagingType === "50kg_hdpe" ? "50kg HDPE Bags" 
      : packagingType === "1000kg_jumbo" ? "1-Ton Jumbo Bags (FIBC)" 
      : "Palletized & Shrink-Wrapped (Export Standard)";

    const destLabel = destination === "gujarat" ? "Gujarat (Vatva / Ankleshwar / Dahej / Surat / Vapi)"
      : destination === "west_india" ? "Western India (Maharashtra / MP / Rajasthan)"
      : destination === "pan_india" ? "Pan-India Industrial Destination"
      : "Export CIF / FOB (Mundra / Kandla Port)";

    const msg = `📦 *BULK CHEMICAL RFQ ESTIMATE - AMAR CHEMICALS*
----------------------------------------
*Product:* ${currentCalcProduct.name}
*Required Quantity:* ${quantityValue} ${quantityUnit} (≈ ${totalMetricTons} MT / ${totalWeightInKg.toLocaleString()} KG)
*Packaging Format:* ${pkgLabel}
*Delivery Destination:* ${destLabel}
*Estimated Bags:* ${packagingType === "50kg_hdpe" ? bags50kgCount + " (50kg bags)" : bags25kgCount + " (25kg bags)"}
*Estimated Pallets:* ${palletsCount} Pallet(s)
----------------------------------------
*Buyer Details:*
*Name:* ${buyerName || "Procurement Manager"}
*Company:* ${buyerCompany || "Enterprise Buyer"}
*Contact:* ${buyerPhone || "Provided on chat"}
----------------------------------------
_Generated via Amar Chemicals Interactive Procurement Calculator_`;

    const url = `https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  // ================= COMPARISON STATE =================
  const [compareSlug1, setCompareSlug1] = useState(products[0]?.slug || "");
  const [compareSlug2, setCompareSlug2] = useState(products[1]?.slug || products[0]?.slug);
  const [compareSlug3, setCompareSlug3] = useState(products[2]?.slug || "");

  const prod1 = useMemo(() => products.find(p => p.slug === compareSlug1) || products[0], [compareSlug1]);
  const prod2 = useMemo(() => products.find(p => p.slug === compareSlug2) || products[1] || products[0], [compareSlug2]);
  const prod3 = useMemo(() => products.find(p => p.slug === compareSlug3), [compareSlug3]);

  // ================= RECOMMENDER STATE =================
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedApplicationTerm, setSelectedApplicationTerm] = useState<string>("all");

  const commonFunctions = [
    { id: "all", label: "All Functions" },
    { id: "dechlorination", label: "Dechlorination / Water Treatment" },
    { id: "bleaching", label: "Bleaching & Color Reduction" },
    { id: "reducing", label: "Reducing Agent / Dyeing" },
    { id: "preservative", label: "Antioxidant & Preservative" },
    { id: "gold", label: "Cyanide Destruction / Mining" },
    { id: "tanning", label: "Leather Tanning" },
    { id: "synthesis", label: "Organic Synthesis / API" },
  ];

  const filteredRecommenderProducts = useMemo(() => {
    return products.filter(p => {
      const matchIndustry = selectedIndustry === "all" || p.industries.some(ind => ind.toLowerCase().includes(selectedIndustry.toLowerCase()));
      const matchFunction = selectedApplicationTerm === "all" || p.applications.some(app => app.toLowerCase().includes(selectedApplicationTerm.toLowerCase())) || p.description.toLowerCase().includes(selectedApplicationTerm.toLowerCase());
      return matchIndustry && matchFunction;
    });
  }, [selectedIndustry, selectedApplicationTerm]);

  const triggerSampleModal = (productName: string) => {
    window.dispatchEvent(new CustomEvent("open-sample-modal", { detail: { productName } }));
  };

  const triggerQuoteModal = (productName: string) => {
    window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: { product: productName } }));
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-20">
      
      {/* Top Hero Banner */}
      <section className="bg-gradient-to-br from-[#051e47] via-primary to-[#003882] text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles size={14} />
            <span>Interactive Procurement Suite</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
            Chemical Tools & RFQ Estimator
          </h1>
          
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Empower your procurement decisions with our instant bulk packaging calculator, technical chemical comparison matrix, and sample dispatch workflow.
          </p>

          {/* Navigation Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3 bg-white/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/15 w-fit">
            <button
              onClick={() => setActiveTab("calculator")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "calculator"
                  ? "bg-white text-primary shadow-lg"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Calculator size={16} />
              <span>Bulk RFQ Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab("compare")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "compare"
                  ? "bg-white text-primary shadow-lg"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Scale size={16} />
              <span>Chemical Comparator</span>
            </button>

            <button
              onClick={() => setActiveTab("recommender")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "recommender"
                  ? "bg-white text-primary shadow-lg"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Compass size={16} />
              <span>Industry Recommender</span>
            </button>

            <button
              onClick={() => setActiveTab("export")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "export"
                  ? "bg-white text-primary shadow-lg"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Ship size={16} />
              <span>Export & Port Hub</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        
        {/* ================= TAB 1: BULK RFQ & PACKAGING CALCULATOR ================= */}
        {activeTab === "calculator" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Config Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">Step 1 of 2</span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mt-1">
                  Configure Your Chemical Requirement
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Select your product, exact tonnage or bag count, packaging standard, and destination.
                </p>
              </div>

              {/* Chemical Selector */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Select Chemical Product
                </label>
                <select
                  value={selectedProductSlug}
                  onChange={(e) => setSelectedProductSlug(e.target.value)}
                  className="w-full text-sm font-semibold px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-gray-900"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.slug}>
                      {p.name} — ({p.grade} | Purity: {p.purity})
                    </option>
                  ))}
                </select>
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-[11px]">CAS: {currentCalcProduct.casNo}</span>
                  <span className="font-mono bg-blue-50 text-primary px-2 py-0.5 rounded text-[11px] font-semibold">{currentCalcProduct.formula}</span>
                </div>
              </div>

              {/* Quantity & Unit */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-7">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Quantity Required
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    value={quantityValue}
                    onChange={(e) => setQuantityValue(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full text-base font-bold px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div className="sm:col-span-5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Unit
                  </label>
                  <select
                    value={quantityUnit}
                    onChange={(e) => setQuantityUnit(e.target.value as any)}
                    className="w-full text-sm font-bold px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-gray-900"
                  >
                    <option value="MT">Metric Tons (MT)</option>
                    <option value="KG">Kilograms (KG)</option>
                    <option value="BAGS_25">25 KG Bags</option>
                    <option value="BAGS_50">50 KG Bags</option>
                  </select>
                </div>
              </div>

              {/* Packaging Standards */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Packaging Specification
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "25kg_hdpe", title: "25kg HDPE Bags", desc: "With inner LDPE liner (Standard Domestic & Export)" },
                    { id: "50kg_hdpe", title: "50kg HDPE Bags", desc: "Heavy duty woven bags for industrial supply" },
                    { id: "1000kg_jumbo", title: "1000kg Jumbo Bags", desc: "FIBC Big Bags for bulk continuous processes" },
                    { id: "palletized", title: "Palletized & Shrink-Wrapped", desc: "Export ISPM-15 wooden pallets with corner guards" },
                  ].map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setPackagingType(pkg.id as any)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        packagingType === pkg.id
                          ? "border-primary bg-blue-50/50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900">{pkg.title}</span>
                        {packagingType === pkg.id && <CheckCircle2 size={16} className="text-primary" />}
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1 leading-snug">{pkg.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destination Zone */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Delivery Destination
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "gujarat", title: "Gujarat Industrial Clusters", desc: "Vatva, Naroda, Ankleshwar, Dahej, Surat, Vapi (Fastest Dispatch)" },
                    { id: "west_india", title: "Western India", desc: "Maharashtra, Madhya Pradesh, Rajasthan" },
                    { id: "pan_india", title: "Pan-India Hubs", desc: "North, South & Eastern manufacturing zones" },
                    { id: "export_mundra", title: "Export CIF / FOB", desc: "Mundra Port / Kandla Port / Nhava Sheva" },
                  ].map((dest) => (
                    <div
                      key={dest.id}
                      onClick={() => setDestination(dest.id as any)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        destination === dest.id
                          ? "border-secondary bg-teal-50/40 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900">{dest.title}</span>
                        {destination === dest.id && <CheckCircle2 size={16} className="text-secondary" />}
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1 leading-snug">{dest.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buyer info for 1-click RFQ */}
              <div className="border-t border-gray-100 pt-5 space-y-3">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Contact Information (For Instant WhatsApp / Email Quote)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="Company Name *"
                    value={buyerCompany}
                    onChange={(e) => setBuyerCompany(e.target.value)}
                    className="text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp *"
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    className="text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSendCalcQuote}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
                >
                  <Send size={16} />
                  <span>Send RFQ on WhatsApp</span>
                </button>
                <button
                  onClick={() => triggerSampleModal(currentCalcProduct.name)}
                  className="px-5 py-3.5 rounded-xl border-2 border-primary text-primary font-bold text-xs hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FlaskConical size={15} />
                  <span>Request Free Lab Sample</span>
                </button>
              </div>
            </div>

            {/* Live Calculation Summary Dashboard */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Summary Card */}
              <div className="bg-gradient-to-br from-[#051e47] to-primary text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Real-Time Procurement Breakdown</span>
                    <h3 className="text-xl font-display font-extrabold text-white mt-0.5">
                      {currentCalcProduct.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Box className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Key Metric Blocks */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                    <span className="text-[11px] text-white/70">Total Net Weight</span>
                    <div className="text-2xl font-display font-black text-white mt-1">
                      {totalMetricTons} <span className="text-xs font-semibold text-accent">MT</span>
                    </div>
                    <span className="text-[10px] text-white/60">({totalWeightInKg.toLocaleString()} KG)</span>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                    <span className="text-[11px] text-white/70">Standard Bags</span>
                    <div className="text-2xl font-display font-black text-white mt-1">
                      {bags25kgCount} <span className="text-xs font-semibold text-accent">Bags</span>
                    </div>
                    <span className="text-[10px] text-white/60">(25kg HDPE with liner)</span>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                    <span className="text-[11px] text-white/70">Pallets Required</span>
                    <div className="text-2xl font-display font-black text-white mt-1">
                      {palletsCount} <span className="text-xs font-semibold text-accent">Pallets</span>
                    </div>
                    <span className="text-[10px] text-white/60">(40 bags / 1 MT per pallet)</span>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                    <span className="text-[11px] text-white/70">20ft FCL Container</span>
                    <div className="text-2xl font-display font-black text-white mt-1">
                      {fclUtilization}% <span className="text-xs font-semibold text-accent">Load</span>
                    </div>
                    <span className="text-[10px] text-white/60">(Capacity: 25 MT FCL)</span>
                  </div>
                </div>

                {/* Dispatch & Logistics Perks */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <Truck size={14} className="text-accent flex-shrink-0" />
                    <span><strong>Dispatch Time:</strong> Ready stock available at Vatva GIDC warehouse (24–48h).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-secondary flex-shrink-0" />
                    <span><strong>Batch Quality:</strong> 100% test COA & MSDS included with delivery.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ship size={14} className="text-accent flex-shrink-0" />
                    <span><strong>Export Port Proximity:</strong> 340 km to Mundra / Kandla Ports (Low inland haulage).</span>
                  </div>
                </div>
              </div>

              {/* Direct Call / Inquiry Box */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3 text-center">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Prefer to speak directly with our Sales Engineer?</span>
                <div className="flex items-center justify-center gap-4 pt-1">
                  <a
                    href={`tel:${companyDetails.phone}`}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs font-bold text-gray-800 transition-colors"
                  >
                    <Phone size={14} className="text-primary" />
                    <span>{companyDetails.phoneDisplay}</span>
                  </a>
                  <a
                    href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl text-xs font-bold text-green-700 transition-colors"
                  >
                    <MessageSquare size={14} className="text-green-600" />
                    <span>WhatsApp Sales</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ================= TAB 2: CHEMICAL COMPARATOR ================= */}
        {activeTab === "compare" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-gray-100 pb-5">
              <div>
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Side-by-Side Comparison Matrix</span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mt-1">
                  Compare Chemical Specifications & Grades
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Compare purity %, CAS numbers, molecular formulas, application strengths, and standard packaging.
                </p>
              </div>

              {/* Selectors */}
              <div className="flex flex-wrap gap-2">
                <select
                  value={compareSlug1}
                  onChange={(e) => setCompareSlug1(e.target.value)}
                  className="text-xs font-bold px-3 py-2 rounded-xl border border-gray-300 bg-white text-gray-800"
                >
                  {products.map(p => <option key={p.id} value={p.slug}>Product 1: {p.name}</option>)}
                </select>

                <select
                  value={compareSlug2}
                  onChange={(e) => setCompareSlug2(e.target.value)}
                  className="text-xs font-bold px-3 py-2 rounded-xl border border-gray-300 bg-white text-gray-800"
                >
                  {products.map(p => <option key={p.id} value={p.slug}>Product 2: {p.name}</option>)}
                </select>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/80">
                    <th className="p-4 font-bold text-gray-600 uppercase tracking-wider w-1/4">Specification</th>
                    <th className="p-4 font-bold text-primary text-sm w-3/8 bg-blue-50/40 rounded-t-xl">
                      {prod1.name}
                    </th>
                    <th className="p-4 font-bold text-secondary text-sm w-3/8 bg-teal-50/40 rounded-t-xl">
                      {prod2.name}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">Chemical Formula</td>
                    <td className="p-4 font-mono font-bold text-primary bg-blue-50/20">{prod1.formula}</td>
                    <td className="p-4 font-mono font-bold text-secondary bg-teal-50/20">{prod2.formula}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">CAS Number</td>
                    <td className="p-4 font-mono text-gray-800 bg-blue-50/20">{prod1.casNo}</td>
                    <td className="p-4 font-mono text-gray-800 bg-teal-50/20">{prod2.casNo}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">Grade / Quality Standard</td>
                    <td className="p-4 font-semibold text-gray-900 bg-blue-50/20">{prod1.grade}</td>
                    <td className="p-4 font-semibold text-gray-900 bg-teal-50/20">{prod2.grade}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">Assay / Minimum Purity</td>
                    <td className="p-4 font-bold text-green-700 bg-blue-50/20">{prod1.purity}</td>
                    <td className="p-4 font-bold text-green-700 bg-teal-50/20">{prod2.purity}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">Physical Appearance</td>
                    <td className="p-4 text-gray-700 bg-blue-50/20">{prod1.appearance}</td>
                    <td className="p-4 text-gray-700 bg-teal-50/20">{prod2.appearance}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">Packaging Options</td>
                    <td className="p-4 text-gray-700 bg-blue-50/20">{prod1.packing}</td>
                    <td className="p-4 text-gray-700 bg-teal-50/20">{prod2.packing}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">Key Industrial Applications</td>
                    <td className="p-4 text-gray-700 bg-blue-50/20">
                      <ul className="list-disc list-inside space-y-1">
                        {prod1.applications.slice(0, 3).map((app, i) => (
                          <li key={i}>{app}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-4 text-gray-700 bg-teal-50/20">
                      <ul className="list-disc list-inside space-y-1">
                        {prod2.applications.slice(0, 3).map((app, i) => (
                          <li key={i}>{app}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">Industries Served</td>
                    <td className="p-4 bg-blue-50/20">
                      <div className="flex flex-wrap gap-1.5">
                        {prod1.industries.map((ind, i) => (
                          <span key={i} className="bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5 rounded">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 bg-teal-50/20">
                      <div className="flex flex-wrap gap-1.5">
                        {prod2.industries.map((ind, i) => (
                          <span key={i} className="bg-secondary/15 text-secondary text-[10px] font-semibold px-2 py-0.5 rounded">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">Action & Sample Order</td>
                    <td className="p-4 bg-blue-50/20">
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => triggerQuoteModal(prod1.name)}
                          className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-xs hover:bg-primary/90 transition-colors shadow-sm"
                        >
                          Request Quote
                        </button>
                        <button
                          onClick={() => triggerSampleModal(prod1.name)}
                          className="px-4 py-2 border border-primary text-primary rounded-lg font-bold text-xs hover:bg-primary/5 transition-colors"
                        >
                          Order 250g Sample
                        </button>
                      </div>
                    </td>
                    <td className="p-4 bg-teal-50/20">
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => triggerQuoteModal(prod2.name)}
                          className="px-4 py-2 bg-secondary text-white rounded-lg font-bold text-xs hover:bg-secondary/90 transition-colors shadow-sm"
                        >
                          Request Quote
                        </button>
                        <button
                          onClick={() => triggerSampleModal(prod2.name)}
                          className="px-4 py-2 border border-secondary text-secondary rounded-lg font-bold text-xs hover:bg-secondary/5 transition-colors"
                        >
                          Order 250g Sample
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 3: INDUSTRY RECOMMENDER ================= */}
        {activeTab === "recommender" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-8">
            <div>
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">Intelligent Product Matcher</span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mt-1">
                Find the Perfect Chemical for Your Manufacturing Process
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Filter by your industry sector and chemical action function to get instant recommendations.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Select Your Industry
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedIndustry("all")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedIndustry === "all"
                        ? "bg-primary text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Industries
                  </button>
                  {industries.map(ind => (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustry(ind.name)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedIndustry === ind.name
                          ? "bg-primary text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Required Chemical Function
                </label>
                <div className="flex flex-wrap gap-2">
                  {commonFunctions.map(fn => (
                    <button
                      key={fn.id}
                      onClick={() => setSelectedApplicationTerm(fn.id === "all" ? "all" : fn.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        (selectedApplicationTerm === "all" && fn.id === "all") || selectedApplicationTerm === fn.id
                          ? "bg-secondary text-white font-bold shadow-sm"
                          : "bg-teal-50/50 text-teal-800 hover:bg-teal-100/60 border border-teal-100"
                      }`}
                    >
                      {fn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              {filteredRecommenderProducts.length > 0 ? (
                filteredRecommenderProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-gray-50/50 rounded-2xl p-5 border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">
                          {product.formula}
                        </span>
                        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                          {product.purity}
                        </span>
                      </div>
                      
                      <h3 className="font-display font-bold text-base text-gray-900">
                        {product.name}
                      </h3>

                      <p className="text-xs text-gray-600 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="space-y-1 text-[11px] text-gray-600 pt-2 border-t border-gray-200">
                        <div><strong>Grade:</strong> {product.grade}</div>
                        <div><strong>Packing:</strong> {product.packing}</div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-200 flex gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex-1 text-center py-2 bg-white border border-gray-300 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        View Specs
                      </Link>
                      <button
                        onClick={() => triggerSampleModal(product.name)}
                        className="flex-1 text-center py-2 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm"
                      >
                        Get Sample
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">
                  <p className="text-sm">No exact match for the selected combination. Contact our chemical engineers for custom synthesis.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 4: EXPORT & PORT HUB ================= */}
        {activeTab === "export" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-[11px] font-bold text-accent uppercase tracking-wider">Global Supply Chain & Freight</span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mt-1">
                  Gujarat Port Logistics & Export Container Stuffing
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Amar Chemicals is strategically located in Vatva GIDC, Ahmedabad, enabling express multi-modal dispatch to India&apos;s leading sea ports.
                </p>
              </div>

              {/* Port Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <span className="text-xs font-bold text-primary">Mundra Port (INMUN)</span>
                  <div className="text-lg font-display font-extrabold text-gray-900 mt-1">340 KM</div>
                  <p className="text-[11px] text-gray-600 mt-0.5">Direct express highway transit (approx. 8–10 hours haulage).</p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100">
                  <span className="text-xs font-bold text-secondary">Kandla Port (INIXY)</span>
                  <div className="text-lg font-display font-extrabold text-gray-900 mt-1">310 KM</div>
                  <p className="text-[11px] text-gray-600 mt-0.5">Major bulk cargo & container hub with frequent vessel sailings.</p>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-bold text-gray-800">Nhava Sheva (INNSA)</span>
                  <div className="text-lg font-display font-extrabold text-gray-900 mt-1">520 KM</div>
                  <p className="text-[11px] text-gray-600 mt-0.5">JNPT Mumbai gateway for European & American destinations.</p>
                </div>
              </div>

              {/* Export Packing Standards */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-base text-gray-900">
                  Export Packaging & Stuffing Specifications
                </h3>
                
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="p-3 bg-gray-50 rounded-xl flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>20ft FCL Palletized Load:</strong> 20 to 22 Metric Tons (approx. 800 to 880 bags of 25kg on 20 heat-treated ISPM-15 wooden/plastic pallets with shrink wrap and heavy-duty strapping).
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>20ft FCL Loose Bag Load (Unpalletized):</strong> 25 to 26 Metric Tons (approx. 1,000 to 1,040 bags of 25kg) maximizing container cubic space.
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>FIBC Jumbo Bag Stuffing:</strong> 20 Metric Tons (20 Jumbo bags of 1,000 KG with bottom discharge spout and UV stabilization).
                    </div>
                  </div>
                </div>
              </div>

              {/* Export Documentation */}
              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-display font-bold text-base text-gray-900 mb-2">
                  Complete Export Documentation Provided
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Commercial Invoice & Packing List", "Certificate of Analysis (COA)", "Material Safety Data Sheet (MSDS)", "Certificate of Origin (COO)", "Fumigation / Phytosanitary Certificate", "Bill of Lading (B/L)"].map((doc, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-50 text-primary font-medium rounded-lg border border-blue-100 flex items-center gap-1.5">
                      <FileText size={12} />
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Export Inquiry Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-primary to-[#00275c] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">International Trade Desk</span>
                <h3 className="text-xl font-display font-extrabold text-white">
                  Request Export Price Quote (FOB / CIF)
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  We supply to Middle East, Southeast Asia, Africa, and European markets with strict compliance to REACH and international packaging norms.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => triggerQuoteModal("Export Inquiry (FOB/CIF)")}
                  className="w-full py-3.5 bg-accent text-gray-900 font-extrabold rounded-xl text-xs hover:bg-accent/90 transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Request Export Proforma Quote</span>
                </button>

                <a
                  href={`mailto:${companyDetails.email}?subject=International Export Inquiry - Amar Chemicals`}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText size={14} />
                  <span>Email Export Division</span>
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
