"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, FileText, Send } from "lucide-react";
import { companyDetails, products } from "../data/websiteData";

interface QuoteModalProps {
  defaultProduct?: string;
}

export default function QuoteModal({ defaultProduct = "" }: QuoteModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    quantity: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ product?: string }>;
      if (customEvent.detail && customEvent.detail.product) {
        setSelectedProduct(customEvent.detail.product);
      } else {
        setSelectedProduct(defaultProduct);
      }
      setIsOpen(true);
      setIsSubmitted(false);
    };

    window.addEventListener("open-quote-modal", handleOpen);
    return () => window.removeEventListener("open-quote-modal", handleOpen);
  }, [defaultProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate CRM Integration / API call
    console.log("Submitting B2B lead to CRM:", {
      ...formData,
      product: selectedProduct,
      timestamp: new Date().toISOString(),
    });
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300 scale-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary px-6 py-4 text-white flex justify-between items-center">
          <div>
            <h3 className="font-display font-semibold text-lg">Request a Quote</h3>
            <p className="text-xs text-white/80">Get wholesale pricing & technical specs</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-white/10 transition-colors text-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Product Interested In *
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-gray-50"
                  required
                >
                  <option value="">Select a Product</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Other Chemicals">Other Chemicals / Custom Grade</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Company name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Quantity Required (e.g. 5 Tons) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g. 10 Tons, 500 Bags"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Specific Requirements or Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter grade requirements, delivery timelines, port of discharge etc."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm shadow-md"
              >
                <Send size={16} />
                Submit RFQ
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-2">
                <CheckCircle2 size={36} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-xl text-gray-950">Thank You, {formData.name}!</h4>
                <p className="text-gray-600 text-sm mt-2 max-w-sm mx-auto">
                  Your request for <span className="font-semibold text-primary">{selectedProduct}</span> has been received. Our sales engineer will contact you within 2 hours.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 max-w-sm mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 bg-red-50 text-red-500 rounded-lg">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-gray-800">Company Brochure.pdf</h5>
                    <p className="text-[10px] text-gray-500">Chemical specifications & catalog</p>
                  </div>
                </div>
                <a
                  href="/docs/amar_chemicals_brochure.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Download
                </a>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
