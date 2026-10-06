"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Award, FileText, 
  MapPin, Phone, Mail, User, Send, Building2, Flame, Droplet, 
  Settings, Sparkles, BookOpen
} from "lucide-react";
import { 
  companyDetails, stats, products, industries, whyChooseUs, blogs 
} from "@/data/websiteData";
import Counter from "@/components/Counter";
import ProductCard from "@/components/ProductCard";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    product: "",
    quantity: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenQuote = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  const handleInquireProduct = (prodName: string) => {
    window.dispatchEvent(new CustomEvent("open-quote-modal", {
      detail: { product: prodName }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form inquiry sent:", formData);
    setIsSubmitted(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      companyName: "",
      email: "",
      mobile: "",
      product: "",
      quantity: "",
      message: ""
    });
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#051e47] text-white pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-10 bg-[url('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1470&auto=format&fit=crop')]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-secondary">
                <ShieldCheck size={14} className="text-secondary" />
                <span>GST Registered Manufacturer & Exporter</span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                Trusted Manufacturer of <span className="text-secondary">Industrial Chemicals</span> Since 1990
              </h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
                High-purity Sodium Metabisulfite, Sodium Sulfite, Sodium Bisulfite, and Sodium Bicarbonate engineered for pharmaceutical, textile, food, and water treatment industries.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={handleOpenQuote}
                  className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Get Instant Quote
                  <ArrowRight size={18} />
                </button>
                <Link
                  href="/products"
                  className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                >
                  View Products
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary shrink-0" />
                  <span>Est. 1990 (35+ Yrs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary shrink-0" />
                  <span>Direct Factory Rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary shrink-0" />
                  <span>97% Response Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary shrink-0" />
                  <span>Vatva GIDC, Gujarat</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Form Box */}
            <div className="lg:col-span-5 bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
              <h3 className="font-display font-bold text-xl text-primary leading-snug">
                Quick Quotation Form
              </h3>
              <p className="text-xs text-gray-500 mt-1">Get immediate pricing and TDS sheets directly in your inbox.</p>
              
              <form onSubmit={handleSubmit} className="space-y-3 mt-6">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  />
                </div>
                <div>
                  <select
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-white text-gray-700"
                  >
                    <option value="">Select Chemical Product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Other">Other / Custom Chemical</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Required Quantity (e.g. 10 Tons)"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Enter specs, packaging preference..."
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-2.5 rounded-lg text-xs tracking-wider uppercase transition-colors shadow shadow-accent/15 cursor-pointer flex justify-center items-center gap-1.5"
                >
                  <Send size={12} />
                  Submit Inquiry
                </button>
              </form>

              {isSubmitted && (
                <div className="absolute inset-0 bg-white rounded-2xl flex flex-col justify-center items-center p-6 text-center space-y-3 z-10 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="font-display font-bold text-gray-900 text-lg">Inquiry Submitted!</h4>
                  <p className="text-xs text-gray-600 max-w-[280px]">
                    Thank you. Jitendra Prajapati and team will reach out to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS/TRUST METRICS BAR */}
      <section className="bg-gradient-industrial py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Counter key={idx} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT TEASER SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphic mock */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-3 scale-95 opacity-5" />
              <div className="relative bg-light-grey border border-gray-100 rounded-3xl p-8 space-y-6 shadow-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-xl" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Headquarters</span>
                    <span className="font-semibold text-gray-900 text-sm">Vatva GIDC, Ahmedabad</span>
                  </div>
                </div>

                <div className="border-t border-gray-150 pt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gray-500 block">Established</span>
                      <span className="font-bold text-gray-900 text-sm">{companyDetails.established}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Business Nature</span>
                      <span className="font-bold text-gray-900 text-sm">Manufacturer</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs border-t border-gray-100 pt-4">
                    <div>
                      <span className="text-gray-500 block">Annual Turnover</span>
                      <span className="font-bold text-primary text-sm">{companyDetails.turnover}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Legal Structure</span>
                      <span className="font-bold text-gray-900 text-sm">{companyDetails.legalStatus}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-4 flex items-center gap-3">
                  <Award className="text-primary shrink-0" size={24} />
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">Founder & Proprietor</span>
                    <span className="font-bold text-gray-800 text-xs">{companyDetails.founder}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Who We Are
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary leading-tight">
                Pioneering Quality Chemical Manufacturing Since 1990
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {companyDetails.shortDesc} Over the last 35 years, we have built a reputation of trust and reliability under the leadership of Jitendra Prajapati. We focus on producing high-purity chemical salts to meet the rigorous quality parameters of pharmaceutical intermediates, textiles, and bulk food processing.
              </p>
              
              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "In-house testing laboratory for batch QA",
                  "Advanced chemical manufacturing processes",
                  "Strategically located in Vatva GIDC",
                  "Strict compliance with MSDS & TDS norms",
                  "Timely dispatch & robust logistics",
                  "Tailored bulk packaging choices"
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-primary/10 text-xs inline-flex items-center gap-1.5"
                >
                  Read Corporate Profile
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="text-gray-800 hover:text-primary font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  Talk to Jitendra Prajapati
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SECTION */}
      <section className="py-20 bg-light-grey border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Product Portfolio
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">
              Our Core Chemical Manufacturing Range
            </h2>
            <p className="text-sm text-gray-600">
              Explore our laboratory-tested industrial chemicals. Select any product below to download Technical Data Sheets (TDS) or submit a quote request.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/products"
              className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2 text-xs shadow-md shadow-primary/15"
            >
              Browse All 12 Products
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-block bg-accent/15 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Target Markets
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">
              Industries We Serve
            </h2>
            <p className="text-sm text-gray-600">
              Our chemicals are manufactured to meet the specific purity and particle characteristics needed in diverse industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <Link 
                key={ind.id}
                href="/industries"
                className="bg-light-grey rounded-2xl p-6 border border-gray-100 shadow-sm text-center card-hover flex flex-col items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {ind.id === "pharma" && <Sparkles size={22} />}
                  {ind.id === "textile" && <Flame size={22} />}
                  {ind.id === "water-treatment" && <Droplet size={22} />}
                  {ind.id === "food-processing" && <CheckCircle2 size={22} />}
                  {ind.id === "chemical-processing" && <Settings size={22} />}
                  {ind.id === "paper-industry" && <FileText size={22} />}
                  {ind.id === "leather-industry" && <Sparkles size={22} />}
                  {ind.id === "agriculture" && <CheckCircle2 size={22} />}
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm group-hover:text-primary transition-colors">
                    {ind.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-20 bg-light-grey border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">
              Why Choose Amar Chemicals?
            </h2>
            <p className="text-sm text-gray-600 font-normal">
              With 35+ years of chemical synthesis excellence, we are the preferred partners for domestic procurement managers and global distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4 className="font-display font-bold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INFRASTRUCTURE & QUALITY CALLOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#051e47] rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <span className="bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  State-of-the-art Infrastructure
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
                  Advanced Vatva GIDC Manufacturing Unit & Quality Control Labs
                </h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl font-normal">
                  Our manufacturing facility located at Vatva GIDC, Ahmedabad, is equipped with robust stainless-steel reactors, advanced filtration, drying units, and an in-house laboratory. Every batch undergoes testing for purity, pH, heavy metals, and insoluble residues before dispatch.
                </p>
                
                {/* Specs list */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold pt-2 text-white/90">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                    <span className="text-secondary text-[10px] uppercase block mb-1">Testing facility</span>
                    <span>In-House QA Lab</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                    <span className="text-secondary text-[10px] uppercase block mb-1">Logistics support</span>
                    <span>All-India Transport</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                    <span className="text-secondary text-[10px] uppercase block mb-1">Capacity</span>
                    <span>Bulk Tonnage Ready</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link
                  href="/infrastructure"
                  className="bg-white text-primary hover:bg-white/90 transition-all font-bold px-6 py-3.5 rounded-xl text-center text-xs shadow-lg"
                >
                  Tour Our Infrastructure
                </Link>
                <button
                  onClick={handleOpenQuote}
                  className="border border-white/30 hover:border-white text-white bg-white/5 hover:bg-white/10 transition-colors font-semibold px-6 py-3.5 rounded-xl text-center text-xs cursor-pointer"
                >
                  Request Sample Batch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 bg-light-grey border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="inline-block bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Client Reviews
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">
              Trusted by Leading Procurement Managers
            </h2>
            <p className="text-sm text-gray-600">
              Read how our focus on product purity and prompt deliveries helps chemical procurement managers achieve seamless manufacturing runs.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* 9. BLOG SECTION TEASER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Technical Resources
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">
              Industrial Chemical Guides & Safety Guidelines
            </h2>
            <p className="text-sm text-gray-600">
              Read chemical insights compiled by our experienced plant supervisors to optimize your chemical storage and processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {blogs.slice(0, 3).map((blog) => (
              <div 
                key={blog.id} 
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      <span>{blog.category}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h4 className="font-display font-bold text-gray-950 text-base leading-snug hover:text-primary transition-colors">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">{blog.summary}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-50 mt-4 flex justify-between items-center text-xs">
                    <span className="text-gray-400 font-medium">{blog.date}</span>
                    <Link href={`/blog/${blog.slug}`} className="text-primary hover:text-secondary font-bold flex items-center gap-1 group">
                      Read Full Article
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/blog"
              className="border border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold px-8 py-3.5 rounded-xl text-xs inline-flex items-center gap-1.5 shadow"
            >
              <BookOpen size={14} />
              View All Technical Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CONTACT & RFQ FORM SECTION */}
      <section id="contact-section" className="py-20 bg-light-grey border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Info & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <span className="inline-block bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Contact Information
                </span>
                <h2 className="font-display font-extrabold text-3xl text-primary tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our factory and offices are located in the Vatva GIDC industrial belt in Ahmedabad. Feel free to call us or write to us directly.
                </p>
              </div>

              {/* Quick info list */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                  <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <h5 className="font-bold text-gray-800">Factory & Registered Address:</h5>
                    <p className="text-gray-600 mt-1 leading-relaxed">{companyDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                  <User className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <h5 className="font-bold text-gray-800">Founder & Sales Head:</h5>
                    <p className="text-gray-600 mt-1 font-semibold">{companyDetails.founder} (Proprietor)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                    <Phone className="text-primary shrink-0" size={16} />
                    <div>
                      <h5 className="font-bold text-gray-800 text-[11px]">Direct Line:</h5>
                      <a href={`tel:${companyDetails.phone}`} className="text-xs text-gray-600 hover:text-primary font-medium">
                        {companyDetails.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                    <Mail className="text-primary shrink-0" size={16} />
                    <div>
                      <h5 className="font-bold text-gray-800 text-[11px]">Email Support:</h5>
                      <a href={`mailto:${companyDetails.email}`} className="text-xs text-gray-600 hover:text-primary font-medium truncate block max-w-[120px]">
                        {companyDetails.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-64 relative bg-gray-100">
                <iframe
                  title="Amar Chemicals Vatva GIDC Location Map"
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

            {/* Right Column: Direct RFP Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-150 shadow-xl space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900 leading-snug">
                  Request Quotation / Technical Specifications
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your chemical requirements below. Our technical sales team will email you the Quotation, MSDS, and TDS within 2 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Company / Organization Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Pharma Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Business Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. purchasing@acmepharma.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
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
                      className="w-full px-3.5 py-2.5 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
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
                      className="w-full px-3.5 py-2.5 border border-gray-250 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs text-gray-700"
                    >
                      <option value="">Select Chemical Product</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Other">Other / Multiple Products</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Monthly/Batch Quantity Required *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 5 Metric Tons"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Specific Grade, Packaging or Dispatch Port Requirements</label>
                  <textarea
                    placeholder="Describe purity specifications, mesh size, packaging requirements (HDPE bags vs Jumbo bags) or logistics destination..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg text-xs tracking-widest uppercase transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
                >
                  <Send size={14} />
                  Submit RfQ and Request Call Back
                </button>
              </form>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3 text-green-800">
                  <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
                  <div className="text-xs">
                    <p className="font-bold">Inquiry Sent Successfully!</p>
                    <p className="mt-0.5">We have received your RFQ and sent a copy to your email. Jitendra Prajapati or a sales rep will call you in a few minutes.</p>
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
