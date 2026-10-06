"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyDetails, products } from "@/data/websiteData";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, CheckCircle2, User, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Page Inquiry Received:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      companyName: "",
      email: "",
      mobile: "",
      product: "",
      quantity: "",
      message: "",
    });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Amar Chemicals, I would like to get a quote and check product specifications."
  );
  const whatsappUrl = `https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="w-full bg-light-grey min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#051e47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Contact Us & Request Quote
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
            Get in touch directly with our Vatva GIDC manufacturing plant. We reply to all inquiries within 2 hours.
          </p>
          <div className="text-xs text-white/50 space-x-2">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Contact Info & Maps (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Cards */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm space-y-5 text-left">
              <h3 className="font-display font-bold text-lg text-primary border-b border-gray-100 pb-3">
                Amar Chemicals Desk
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-xs">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-gray-800">Factory Address:</h5>
                    <p className="text-gray-600 mt-1 leading-relaxed">{companyDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <User size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-gray-800">Proprietor / Contact Person:</h5>
                    <p className="text-gray-600 mt-0.5 font-semibold">{companyDetails.founder}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Phone size={15} className="text-primary mt-0.5" />
                    <div>
                      <h5 className="font-bold text-gray-800">Direct Call:</h5>
                      <a href={`tel:${companyDetails.phone}`} className="text-gray-600 hover:text-primary font-medium">
                        {companyDetails.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail size={15} className="text-primary mt-0.5" />
                    <div>
                      <h5 className="font-bold text-gray-800">Email:</h5>
                      <a href={`mailto:${companyDetails.email}`} className="text-gray-600 hover:text-primary font-medium truncate block max-w-[120px]">
                        {companyDetails.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <Clock size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-gray-800">Operating Hours:</h5>
                    <p className="text-gray-600 mt-0.5">{companyDetails.hours}</p>
                  </div>
                </div>
              </div>

              {/* Direct Instant Action CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="bg-primary hover:bg-primary-dark text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone size={14} />
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-3xl p-4 border border-gray-150 shadow-sm space-y-4">
              <h4 className="font-display font-bold text-sm text-gray-900 px-2">Find Us on Google Maps</h4>
              <div className="rounded-2xl overflow-hidden h-72 border border-gray-100 relative bg-gray-50">
                <iframe
                  title="Amar Chemicals Plant Location Map"
                  src={companyDetails.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* RIGHT: Detailed Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-lg space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-primary leading-snug">
                Submit RFQ (Request for Quote)
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Fill in your chemical grade parameters and packaging preferences. We will email the quotation and TDS sheet to you within 2 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Prajapati"
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
                    placeholder="e.g. Acme Pharmaceuticals"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98250 12345"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Product Interested In *</label>
                  <select
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-255 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs text-gray-700 font-semibold"
                  >
                    <option value="">Select Chemical Product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Other">Other / Multiple Compounds</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Estimated Quantity Required *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 10 Metric Tons"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-255 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Message or Specific Specifications</label>
                <textarea
                  placeholder="Tell us about your assay requirements, particle dimensions, delivery timelines, or destination port details..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-255 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send size={14} />
                Submit B2B Inquiry
              </button>
            </form>

            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3 text-green-800 text-left">
                <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
                <div className="text-xs">
                  <h5 className="font-bold">Inquiry Sent Successfully!</h5>
                  <p className="mt-0.5">We have received your details. Jitendra Prajapati and the sales team will email you the Quotation, TDS sheets, and MSDS copies shortly.</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
