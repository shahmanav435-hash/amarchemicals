"use client";

import React from "react";
import Link from "next/link";
import { companyDetails } from "@/data/websiteData";
import { CheckCircle2, User, Building2, Calendar, Target, ShieldCheck, HeartHandshake, Truck } from "lucide-react";

export default function About() {
  const handleOpenQuote = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  const values = [
    {
      title: "Quality Assurance",
      desc: "We test every raw material and product batch in our GIDC Vatva testing lab to ensure standard-setting purity levels.",
      icon: <ShieldCheck className="text-secondary" size={24} />
    },
    {
      title: "Advanced Manufacturing",
      desc: "Utilizing modern glass-lined and stainless-steel reactors, drying plants, and automated packaging lines.",
      icon: <Building2 className="text-secondary" size={24} />
    },
    {
      title: "Timely Delivery",
      desc: "Our proximity to Gujarat's national highway networks and port systems enables fast dispatch times.",
      icon: <Truck className="text-secondary" size={24} />
    },
    {
      title: "Competitive Pricing",
      desc: "Bulk sourcing and lean operations allow us to transfer price advantages directly to our procurement partners.",
      icon: <HeartHandshake className="text-secondary" size={24} />
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#051e47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            About Amar Chemicals
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
            A trusted name in high-purity industrial chemical manufacturing since 1990.
          </p>
          <div className="text-xs text-white/50 space-x-2">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Detailed text */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary">
                Our Heritage: 35+ Years of Trust & Purity
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Founded in 1990 by <strong>Jitendra Prajapati</strong>, Amar Chemicals began as a specialized chemical unit in Vatva GIDC, Ahmedabad, Gujarat. Over three decades, we have scaled our production facilities to supply bulk industrial chemicals to pharmaceutical, food processing, water treatment, and textile industries across India.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe that premium B2B partnerships are built on consistency. That's why we control the entire lifecycle of our chemical compounds—from raw material testing to batch processing, purification, and multi-layered packaging. Our facility operates in strict alignment with Material Safety Data Sheets (MSDS) guidelines and national industrial safety standards.
              </p>

              {/* Vision / Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-light-grey rounded-2xl p-5 border border-gray-150 space-y-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Target size={20} />
                  </div>
                  <h4 className="font-display font-bold text-gray-900 text-sm">Our Mission</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To supply industry-leading high-purity chemical compounds with zero defect margins, providing domestic and export buyers with reliable raw materials.
                  </p>
                </div>
                <div className="bg-light-grey rounded-2xl p-5 border border-gray-150 space-y-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Target size={20} />
                  </div>
                  <h4 className="font-display font-bold text-gray-900 text-sm">Our Vision</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To become India's most trusted partner for sulfite and bisulfite compounds, expanding our manufacturing horizons while maintaining ethical and eco-friendly standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Corporate Fact sheet & info */}
            <div className="lg:col-span-5 bg-light-grey rounded-2xl border border-gray-150 p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-bold text-lg text-primary border-b border-gray-200 pb-3">
                Corporate Credentials
              </h3>

              <div className="space-y-4">
                {[
                  { label: "Nature of Business", value: companyDetails.businessNature, icon: <Building2 className="text-primary shrink-0" size={16} /> },
                  { label: "Year Established", value: companyDetails.established, icon: <Calendar className="text-primary shrink-0" size={16} /> },
                  { label: "Founder / Proprietor", value: companyDetails.founder, icon: <User className="text-primary shrink-0" size={16} /> },
                  { label: "Legal Status", value: companyDetails.legalStatus, icon: <ShieldCheck className="text-primary shrink-0" size={16} /> },
                  { label: "Annual Turnover", value: companyDetails.turnover, icon: <CheckCircle2 className="text-primary shrink-0" size={16} /> },
                  { label: "Primary Factory Location", value: "Vatva GIDC, Ahmedabad", icon: <Building2 className="text-primary shrink-0" size={16} /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs border-b border-gray-200/60 pb-3 last:border-b-0 last:pb-0">
                    {item.icon}
                    <div className="flex-1 flex justify-between">
                      <span className="text-gray-500 font-semibold">{item.label}:</span>
                      <span className="text-gray-900 font-bold text-right">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={handleOpenQuote}
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg text-xs tracking-wider uppercase transition-colors shadow-md shadow-accent/15 cursor-pointer text-center"
                >
                  Request Corporate Specimen
                </button>
                <Link
                  href="/contact"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg text-xs transition-colors block text-center"
                >
                  Contact Factory Desk
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-light-grey border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-extrabold text-3xl text-primary">
              Core Organizational Values
            </h2>
            <p className="text-sm text-gray-600">
              Our growth over the last three decades is guided by four foundational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  {val.icon}
                </div>
                <h4 className="font-display font-bold text-gray-900 text-sm">{val.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Callout */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary">
            Ready to Partner with Amar Chemicals?
          </h3>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our founder, Jitendra Prajapati, or request custom chemical grade pricing directly from our Vatva GIDC manufacturing unit.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleOpenQuote}
              className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-accent/15"
            >
              Get Bulk Pricing Quote
            </button>
            <Link
              href="/products"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg text-xs transition-colors"
            >
              Explore Chemical Range
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
