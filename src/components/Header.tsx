"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Clock, ShieldCheck, Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { companyDetails } from "../data/websiteData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Tools & RFQ", href: "/tools" },
    { label: "Industries", href: "/industries" },
    { label: "Quality & Infra", href: "/infrastructure" },
    { label: "Certifications", href: "/certifications" },
    { label: "Downloads", href: "/downloads" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  const whatsappMessage = encodeURIComponent("Hello Amar Chemicals, I would like to get a quotation.");
  const whatsappUrl = `https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <header className="w-full z-40">
      {/* Top Utility Bar - Hidden on mobile for conversion focus */}
      <div className="bg-[#051e47] text-white/90 text-xs py-2 px-4 sm:px-6 md:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <a href={`tel:${companyDetails.phone}`} className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone size={12} className="text-secondary" />
              <span>{companyDetails.phoneDisplay}</span>
            </a>
            <a href={`mailto:${companyDetails.email}`} className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Mail size={12} className="text-secondary" />
              <span>{companyDetails.email}</span>
            </a>
            <span className="flex items-center gap-1.5 text-white/70">
              <Clock size={12} className="text-secondary" />
              <span>{companyDetails.hours}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white/80 bg-white/5 px-2 py-0.5 rounded border border-white/10 text-[11px]">
              <ShieldCheck size={11} className="text-accent" />
              <span>GSTIN: {companyDetails.gst}</span>
            </span>
            <span className="text-white/60">Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <div
        className={`w-full transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 py-3"
            : "relative bg-white border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary group-hover:bg-secondary transition-colors p-2.5 rounded-xl text-white shadow-md shadow-primary/20 flex items-center justify-center">
              <svg
                className="w-6 h-6"
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
              <span className="font-display font-bold text-xl sm:text-2xl text-primary tracking-tight block leading-none">
                AMAR
              </span>
              <span className="font-sans font-semibold text-[10px] sm:text-xs text-secondary tracking-widest block uppercase">
                Chemicals
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs xl:text-sm font-semibold tracking-wide hover:text-secondary transition-colors relative py-1 ${
                    isActive ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyDetails.phone}`}
              className="border border-primary/20 hover:border-primary text-primary hover:bg-primary/5 transition-all text-xs font-semibold py-2 px-3 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Phone size={14} />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageSquare size={14} />
              WhatsApp
            </a>
            <button
              onClick={openQuoteModal}
              className="bg-accent hover:bg-accent-dark text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-1.5 shadow-md shadow-accent/15 cursor-pointer transition-transform hover:-translate-y-0.5"
            >
              Request Quote
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={openQuoteModal}
              className="bg-accent text-white p-2 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer sm:hidden"
            >
              Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col space-y-6 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <span className="font-display font-bold text-lg text-primary">Navigation</span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500">
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold py-1.5 border-b border-gray-50 transition-colors ${
                      isActive ? "text-primary border-primary/20" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 pt-6 border-t border-gray-100">
              <a
                href={`tel:${companyDetails.phone}`}
                className="w-full justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 text-sm font-semibold py-2.5 rounded-lg flex items-center gap-2"
              >
                <Phone size={16} />
                Call {companyDetails.phoneDisplay}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 rounded-lg flex items-center gap-2"
              >
                <MessageSquare size={16} />
                Chat on WhatsApp
              </a>
              <button
                onClick={openQuoteModal}
                className="w-full justify-center bg-accent hover:bg-accent-dark text-white text-sm font-bold py-2.5 rounded-lg flex items-center gap-2 shadow-md"
              >
                Request Quote
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="text-center text-[10px] text-gray-400 pt-6">
              <p>GSTIN: {companyDetails.gst}</p>
              <p className="mt-1">© {new Date().getFullYear()} {companyDetails.name}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
