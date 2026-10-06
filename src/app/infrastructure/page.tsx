"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldAlert, Award, FileText, ArrowRight } from "lucide-react";

export default function InfrastructurePage() {
  const handleOpenQuote = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  const sections = [
    {
      title: "Manufacturing Unit",
      desc: "Our primary manufacturing unit in Phase-2 Vatva GIDC houses stainless steel (SS-316) and glass-lined chemical reactors, centrifugal filtration units, and rotary dryers. The facility is automated for temperature and pH regulation, ensuring uniform batch consistency.",
      highlights: ["Stainless Steel (SS-316) reactors", "Rotary hot-air drying plants", "Automated temperature controllers"]
    },
    {
      title: "Testing Laboratory",
      desc: "We maintain a fully-equipped in-house analytical laboratory. Every raw material and finished product batch is analyzed for active content percentage (assay), insoluble matter, moisture levels, pH, heavy metals, and physical appearance parameters.",
      highlights: ["Calibrated pH meters & balances", "Volumetric titration stations", "Sample retention archive room"]
    },
    {
      title: "Quality Assurance",
      desc: "Quality assurance at Amar Chemicals follows a strict triple-check protocol. First, raw materials are sampled on arrival. Second, reactor batches are tested during crystallization. Third, final packaging lots are verified and issued a Certificate of Analysis (COA).",
      highlights: ["Triple-check batch protocol", "COA (Analysis Certificate) with every batch", "MSDS compliance checks"]
    },
    {
      title: "Packaging Facility",
      desc: "Industrial reducing agents are highly sensitive to moisture and oxidation. Our semi-automated packaging unit seals powders in heavy-duty HDPE bags with airtight LDPE inner liners. We also supply chemicals in moisture-proof drums and 1-ton jumbo bags.",
      highlights: ["25kg & 50kg double-lined HDPE bags", "Iron & HDPE drums for sulphide flakes", "1-Ton bulk jumbo bags with liners"]
    },
    {
      title: "Warehouse Safety",
      desc: "Our warehouse is designed with safety as top priority. We implement segregation protocols, keeping sulfites/bisulfites isolated from acidic compounds. The warehouse is highly ventilated and raised on pallets to prevent concrete dampness.",
      highlights: ["Strict acid-segregation zoning", "Dampness-proof pallet storage", "Safety ventilation systems"]
    },
    {
      title: "Logistics Network",
      desc: "Vatva GIDC offers superb connectivity to the National Highway network. We partner with reliable heavy transport agencies to guarantee prompt deliveries to industrial centers in Maharashtra, UP, Karnataka, and dispatch ports like Mundra/Kandla.",
      highlights: ["All-India heavy transport ties", "Proximity to Mundra/Kandla ports", "24-48 hours dispatch times"]
    }
  ];

  return (
    <div className="w-full bg-light-grey min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#051e47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Infrastructure & Quality
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
            A state-of-the-art Vatva GIDC facility dedicated to high-purity chemical manufacturing and testing.
          </p>
          <div className="text-xs text-white/50 space-x-2">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <span className="text-white">Infrastructure</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Quality commitment callout */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-center text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block bg-primary/5 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Quality Assurance Policy
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-primary">
              Laboratory-Verified Purity in Every Batch
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              "At Amar Chemicals, we understand that our products are the key raw ingredients for critical pharmaceutical, food, and water treatment processes. We commit to delivering chemical salts that meet our stated purity percentages with zero exceptions. Our analytical records are open to client audits."
            </p>
            <p className="text-xs font-semibold text-gray-800">— Jitendra Prajapati, Proprietor</p>
          </div>
          <div className="bg-primary/5 text-primary border border-primary/10 rounded-2xl p-5 shrink-0 w-full md:w-64 flex flex-col justify-center items-center text-center space-y-2">
            <Award size={36} />
            <h4 className="font-display font-bold text-xs">Laboratory Tested</h4>
            <p className="text-[10px] text-gray-500">Every batch is checked and certified before leaving our dispatch gates.</p>
          </div>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-base text-primary border-b border-gray-100 pb-2">
                  {section.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {section.desc}
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="space-y-1.5 pt-2 border-t border-gray-50">
                {section.highlights.map((high, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-gray-700">
                    <CheckCircle2 size={13} className="text-secondary shrink-0" />
                    <span>{high}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lead Quote Callout */}
        <div className="bg-[#051e47] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl space-y-6">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1470&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center" />
          <h3 className="font-display font-bold text-xl sm:text-2xl relative z-10">
            Request Specimen Certificates of Analysis (COA)
          </h3>
          <p className="text-xs text-white/70 max-w-xl mx-auto relative z-10 leading-relaxed">
            Verify our chemical purity specs before ordering. Leave your contact details to receive our laboratory spec sheets, TDS sheets, and certificates.
          </p>
          <div className="pt-2 relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleOpenQuote}
              className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-accent/15"
            >
              Request Sample COA
            </button>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-white text-white bg-white/5 hover:bg-white/10 transition-colors font-semibold px-8 py-3 rounded-lg text-xs"
            >
              Contact Laboratory
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
