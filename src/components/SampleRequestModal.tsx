"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, FlaskConical, ShieldCheck, Phone, Mail, Building2, MapPin, Package } from "lucide-react";
import { companyDetails, products } from "@/data/websiteData";

interface SampleRequestData {
  productName?: string;
}

export default function SampleRequestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [sampleSize, setSampleSize] = useState("250g (Lab Trial)");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [applicationUsage, setApplicationUsage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent<SampleRequestData>) => {
      if (event.detail && event.detail.productName) {
        setProductName(event.detail.productName);
      } else {
        setProductName(products[0]?.name || "");
      }
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("open-sample-modal" as any, handleOpenModal as any);
    return () => {
      window.removeEventListener("open-sample-modal" as any, handleOpenModal as any);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Format WhatsApp & Email payload
    const msg = `🧪 *NEW FREE SAMPLE REQUEST - AMAR CHEMICALS*
----------------------------------------
*Product:* ${productName}
*Sample Quantity:* ${sampleSize}
*Contact Person:* ${fullName}
*Company:* ${companyName}
*GST No:* ${gstNo || "Not provided"}
*Phone:* ${phone}
*Email:* ${email}
*Delivery Address:* ${deliveryAddress}
*Application / Use Case:* ${applicationUsage || "General Testing"}
----------------------------------------
_Sent via Amar Chemicals Website Sample Portal_`;

    const whatsappUrl = `https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Auto open WhatsApp for immediate dispatch
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-primary via-[#003882] to-secondary p-6 text-white relative">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-white/15 rounded-xl backdrop-blur-md">
              <FlaskConical className="w-6 h-6 text-accent" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-accent bg-accent/15 px-2.5 py-0.5 rounded-full">
                B2B Quality Assurance
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Request Free Lab Trial Sample
              </h2>
            </div>
          </div>
          <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-lg">
            Verify our chemical grade, purity, and solubility in your own laboratory before placing bulk commercial orders.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900">
              Sample Request Dispatched!
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{fullName}</strong>. Our quality control team will prepare the <strong>{sampleSize}</strong> sample of <strong>{productName}</strong> and dispatch it to your laboratory address.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-xs text-gray-600 text-left space-y-1.5 max-w-md mx-auto">
              <div className="font-semibold text-gray-800 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-primary" /> What happens next?
              </div>
              <p>• Certificate of Analysis (COA) & MSDS will be included with the batch.</p>
              <p>• Sample tracking courier details will be shared on WhatsApp / SMS.</p>
            </div>
            <div className="pt-2">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 bg-primary text-white font-semibold rounded-xl text-sm hover:bg-primary/90 transition-colors shadow-md"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
            
            {/* Row 1: Product & Sample Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Select Chemical Product *
                </label>
                <select
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                  className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-gray-800"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.grade})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Sample Quantity Required *
                </label>
                <select
                  value={sampleSize}
                  onChange={(e) => setSampleSize(e.target.value)}
                  className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-gray-800"
                >
                  <option value="100g (Standard Lab Test)">100g (Standard Lab Test)</option>
                  <option value="250g (Lab Trial)">250g (Lab Trial)</option>
                  <option value="500g (Pilot Batch Trial)">500g (Pilot Batch Trial)</option>
                  <option value="1 Kg (Pilot Production)">1 Kg (Pilot Production)</option>
                </select>
              </div>
            </div>

            {/* Row 2: Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Contact Person / Chemist Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Dr. Rajesh Patel"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Company / Organization Name *
                </label>
                <div className="relative">
                  <Building2 size={15} className="absolute left-3.5 top-3 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Pharma Pvt Ltd"
                    className="w-full text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp No *
                </label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3.5 top-3 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Official Email *
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-3 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="purchase@company.com"
                    className="w-full text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  GST Number (Optional)
                </label>
                <input
                  type="text"
                  value={gstNo}
                  onChange={(e) => setGstNo(e.target.value)}
                  placeholder="24AAAAA0000A1Z5"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary uppercase"
                />
              </div>
            </div>

            {/* Row 4: Lab / Delivery Address */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Lab / Factory Delivery Address *
              </label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3.5 top-3 text-gray-400" />
                <textarea
                  required
                  rows={2}
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Complete courier delivery address with Pincode and City..."
                  className="w-full text-xs pl-9 pr-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>

            {/* Row 5: Application / Use Case */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Target Application / Testing Purpose
              </label>
              <input
                type="text"
                value={applicationUsage}
                onChange={(e) => setApplicationUsage(e.target.value)}
                placeholder="e.g. Effluent Dechlorination trial, Sulfur dye reducing agent, API synthesis"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Guarantee Tag */}
            <div className="flex items-center gap-2 p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-primary">
              <ShieldCheck size={18} className="text-secondary flex-shrink-0" />
              <span>
                <strong>100% Free Lab Sample:</strong> Dispatched via reputed express courier with Manufacturer Batch COA & MSDS included.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit & Request Lab Sample</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={closeModal}
                className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-xs hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
