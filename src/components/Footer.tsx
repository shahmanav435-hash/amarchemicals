"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Shield, CheckCircle, ArrowUpRight } from "lucide-react";
import { companyDetails, products, industries } from "../data/websiteData";

export default function Footer() {
  const handleOpenQuote = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  return (
    <footer className="bg-[#051e47] text-white/90 pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Column 1: Company Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-white text-primary p-2 rounded-lg flex items-center justify-center shadow-md">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5s1 4.24 2.5 5.5" />
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white block leading-none">AMAR</span>
              <span className="font-sans font-semibold text-[10px] text-secondary tracking-widest block uppercase">Chemicals</span>
            </div>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            Leading industrial chemical manufacturer and supplier since 1990. Specializing in high-purity sulfites, bisulfites, and bicarbonate powders.
          </p>
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <Shield size={14} className="text-secondary" />
              <span>GSTIN: {companyDetails.gst}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <CheckCircle size={14} className="text-secondary" />
              <span>MSME: {companyDetails.msme}</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-white/70">
            {[
              { label: "Home Page", href: "/" },
              { label: "About Our Company", href: "/about" },
              { label: "Chemical Tools & RFQ", href: "/tools" },
              { label: "Our Infrastructure", href: "/infrastructure" },
              { label: "Certifications", href: "/certifications" },
              { label: "Downloads & TDS", href: "/downloads" },
              { label: "Blogs & Resources", href: "/blog" },
              { label: "Contact Us Today", href: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-secondary hover:underline transition-colors flex items-center gap-1 group">
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Featured Products */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
            Chemical Range
          </h4>
          <ul className="space-y-2 text-xs text-white/70">
            {products.slice(0, 7).map((prod) => (
              <li key={prod.slug}>
                <Link href={`/products/${prod.slug}`} className="hover:text-secondary hover:underline transition-colors">
                  {prod.name}
                </Link>
              </li>
            ))}
            {products.length > 7 && (
              <li>
                <Link href="/products" className="text-secondary hover:underline font-semibold text-[11px] block mt-1">
                  View All Products ({products.length}) →
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
            Get In Touch
          </h4>
          <ul className="space-y-3 text-xs text-white/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
              <span>{companyDetails.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-secondary shrink-0" />
              <a href={`tel:${companyDetails.phone}`} className="hover:text-secondary transition-colors">
                {companyDetails.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-secondary shrink-0" />
              <a href={`mailto:${companyDetails.email}`} className="hover:text-secondary transition-colors">
                {companyDetails.email}
              </a>
            </li>
            <li className="pt-2">
              <button
                onClick={handleOpenQuote}
                className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-2 rounded-lg transition-colors cursor-pointer text-center text-xs shadow-md shadow-accent/10"
              >
                Send Direct Inquiry
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.</p>
        <p className="flex items-center gap-2">
          <span>Factory Outlet: Vatva GIDC, Ahmedabad</span>
          <span>•</span>
          <span>Designed with Premium UX</span>
        </p>
      </div>
    </footer>
  );
}
