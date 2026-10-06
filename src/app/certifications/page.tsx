"use client";

import React from "react";
import Link from "next/link";
import { certifications, companyDetails } from "@/data/websiteData";
import { FileText, Award, ShieldCheck, CheckCircle2, FileDown } from "lucide-react";

export default function CertificationsPage() {
  const handleOpenQuote = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  return (
    <div className="w-full bg-light-grey min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#051e47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Company Credentials & Certifications
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
            Amar Chemicals operates in full compliance with government laws, tax codes, and industrial safety regulations.
          </p>
          <div className="text-xs text-white/50 space-x-2">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <span className="text-white">Certifications</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Verification banner */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-sm text-left max-w-3xl space-y-4">
          <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
            <ShieldCheck size={24} className="text-secondary" />
            Verified B2B Status
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            As a registered manufacturer, we are fully tax-compliant and cataloged under the Ministry of MSME, Government of India. This allows industrial procurement departments to claim full GST input credits and engage in friction-free contracts.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold pt-2">
            <div className="p-3 bg-light-grey rounded-xl flex justify-between items-center border border-gray-200">
              <span className="text-gray-500">GSTIN Status:</span>
              <span className="text-primary font-mono font-bold">{companyDetails.gst}</span>
            </div>
            <div className="p-3 bg-light-grey rounded-xl flex justify-between items-center border border-gray-200">
              <span className="text-gray-500">MSME Udyam:</span>
              <span className="text-primary font-mono font-bold">{companyDetails.msme}</span>
            </div>
          </div>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-gray-900">{cert.name}</h3>
                    <span className="text-[10px] text-gray-400 font-semibold block mt-0.5">Issue: {cert.issueDate}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="text-[10px] text-gray-400 font-mono">PDF DOCUMENT</span>
                <button
                  onClick={handleOpenQuote}
                  className="bg-primary hover:bg-primary-dark text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileDown size={14} />
                  Request Download
                </button>
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
              Request Specimen Certificates
            </button>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-white text-white bg-white/5 hover:bg-white/10 transition-colors font-semibold px-8 py-3 rounded-lg text-xs"
            >
              Contact Legal Desk
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
