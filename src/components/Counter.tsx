"use client";

import React, { useEffect, useState, useRef } from "react";

interface CounterProps {
  value: string; // e.g. "35+", "1000+"
  label: string;
}

export default function Counter({ value, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Extract number from string (e.g. "35+" -> 35, "1000+" -> 1000)
  const targetNumber = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let start = 0;
          const duration = 1500; // 1.5s
          const end = targetNumber;
          const stepTime = Math.max(Math.floor(duration / end), 10);
          
          const timer = setInterval(() => {
            start += Math.ceil(end / 100);
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [targetNumber]);

  return (
    <div
      ref={elementRef}
      className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-center shadow-lg hover:bg-white/10 transition-colors duration-300"
    >
      <div className="font-display font-extrabold text-4xl lg:text-5xl text-accent tracking-tight mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">
        {label}
      </div>
    </div>
  );
}
