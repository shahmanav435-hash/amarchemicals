"use client";

import React, { useState, useEffect } from "react";
import { X, PhoneCall, Check } from "lucide-react";
import { companyDetails, products } from "../data/websiteData";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", product: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Prevent showing multiple times or in dev reload spam
    const dismissed = sessionStorage.getItem("exit-intent-dismissed");
    if (dismissed === "true") {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 20 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exit-intent-dismissed", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Exit intent lead captured:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  };

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("exit-intent-dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleDismiss}
          className="absolute right-3 top-3 p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors z-10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="p-6">
          {!isSubmitted ? (
            <div className="space-y-4">
              <div className="text-center">
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  Special Factory Offer
                </span>
                <h3 className="font-display font-bold text-xl text-gray-900">
                  Get Wholesale Rates Today!
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Compare our pricing before buying. Leave your number for an instant call back from our sales team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Your Contact Number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-white"
                    required
                  >
                    <option value="">Select chemical of interest</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm shadow-md"
                >
                  <PhoneCall size={16} />
                  Request Call Back
                </button>
              </form>

              <div className="pt-2 text-center text-xs text-gray-500 flex justify-center items-center gap-4">
                <span>⚡ response in 10 mins</span>
                <span>•</span>
                <span>📦 factory-direct prices</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                <Check size={24} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg text-gray-900">Request Received!</h4>
                <p className="text-sm text-gray-600 mt-1">
                  We will call you on <span className="font-semibold text-primary">{formData.mobile}</span> shortly.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
