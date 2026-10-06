"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/websiteData";

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Rotate every 6s
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 lg:p-12 overflow-hidden">
      {/* Absolute background quote icon */}
      <Quote className="absolute right-8 top-8 w-36 h-36 text-gray-50 opacity-80 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        {/* Rating Stars */}
        <div className="flex gap-1 justify-center text-accent">
          {Array.from({ length: testimonials[activeIndex].rating }).map((_, idx) => (
            <Star key={idx} size={18} fill="currentColor" />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-gray-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
          "{testimonials[activeIndex].content}"
        </blockquote>

        {/* Client Profile */}
        <div>
          <cite className="not-italic font-display font-bold text-gray-900 text-sm sm:text-base block">
            {testimonials[activeIndex].name}
          </cite>
          <span className="text-xs text-primary font-semibold tracking-wide">
            {testimonials[activeIndex].designation}
          </span>
          <span className="text-xs text-gray-400 block mt-0.5">
            {testimonials[activeIndex].company}
          </span>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center w-full max-w-[120px] pt-4">
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-primary w-5" : "bg-gray-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
