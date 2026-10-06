"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";
import { companyDetails } from "../data/websiteData";

export default function FloatingCTAs() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Amar Chemicals, I am visiting your website and would like to inquire about industrial chemical pricing and grades."
  );
  const whatsappUrl = `https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="p-3 bg-white text-primary border border-gray-100 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-1 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Floating Call */}
      <a
        href={`tel:${companyDetails.phone}`}
        className="p-3 bg-accent text-white rounded-full shadow-lg hover:bg-accent-dark transition-all hover:-translate-y-1 flex items-center justify-center cursor-pointer md:hidden"
        aria-label="Call Us"
      >
        <Phone size={22} className="animate-pulse" />
      </a>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:-translate-y-1 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={22} />
      </a>
    </div>
  );
}
