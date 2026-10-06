"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyDetails, certifications } from "@/data/websiteData";
import { FileText, FileDown, CheckCircle2, ShieldCheck, Mail, Phone, Send } from "lucide-react";

export default function DownloadsPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
  });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [downloadTarget, setDownloadTarget] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured for downloads:", formData);
    setIsUnlocked(true);
    
    // Simulate auto-trigger download if target is set
    if (downloadTarget) {
      const link = document.createElement("a");
      link.href = downloadTarget;
      link.setAttribute("download", downloadTarget.split("/").pop() || "document.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDownloadClick = (fileUrl: string) => {
    if (isUnlocked) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", fileUrl.split("/").pop() || "document.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setDownloadTarget(fileUrl);
      // Scroll to form
      document.getElementById("lead-capture-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-light-grey min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#051e47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Technical Downloads & Leaflets
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
            Get instant access to chemical specification brochures, safety guidelines, and registration certificates.
          </p>
          <div className="text-xs text-white/50 space-x-2">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <span className="text-white">Downloads</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Documents List (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-bold text-xl text-primary">
              Available Corporate Documents
            </h2>
            
            <div className="space-y-4">
              {certifications.map((doc) => (
                <div 
                  key={doc.id}
                  className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                      <FileText size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-sm text-gray-900">{doc.name}</h4>
                      <p className="text-[11px] text-gray-500 max-w-[320px] truncate">{doc.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownloadClick(doc.fileUrl)}
                    className={`shrink-0 px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                      isUnlocked 
                        ? "bg-green-500 hover:bg-green-600 text-white" 
                        : "bg-primary hover:bg-primary-dark text-white"
                    }`}
                  >
                    <FileDown size={14} />
                    {isUnlocked ? "Download" : "Unlock & Download"}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-150 text-xs text-gray-500 flex items-start gap-2.5">
              <ShieldCheck className="text-primary shrink-0" size={18} />
              <span>
                All downloads are subject to intellectual property rights. By downloading, you agree to utilize specifications for legal procurement evaluation purposes only. For MSDS sheets, please consult safety guidelines before physical chemical handling.
              </span>
            </div>
          </div>

          {/* RIGHT: Lead Capture Form (5 Cols) */}
          <div id="lead-capture-form" className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-lg space-y-6">
            {!isUnlocked ? (
              <>
                <div>
                  <h3 className="font-display font-bold text-lg text-primary leading-snug">
                    Unlock All B2B Downloads
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill in your professional contact details below to immediately unlock and download all PDF documents.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shah Chem Distributors"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh@shahchem.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">WhatsApp / Contact Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98250 12345"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md shadow-accent/15 cursor-pointer flex justify-center items-center gap-1.5"
                  >
                    <Send size={12} />
                    Unlock PDF Files
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-950">Downloads Unlocked!</h3>
                  <p className="text-xs text-gray-600 mt-2 max-w-xs mx-auto leading-relaxed">
                    Thank you, {formData.name}. You can now click any <strong>"Download"</strong> button in the left panel to retrieve your file directly.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2 text-xs">
                  <p className="text-gray-400 font-semibold">Need printed catalog copies?</p>
                  <a
                    href={`tel:${companyDetails.phone}`}
                    className="text-primary font-bold hover:underline"
                  >
                    Call factory: {companyDetails.phoneDisplay}
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
