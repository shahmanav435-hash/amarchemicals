"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogs } from "@/data/websiteData";
import { ArrowRight, BookOpen, Clock, Calendar, Search } from "lucide-react";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Industrial Chemical Guide", "Chemical Applications", "Chemical Safety", "Industry Trends", "Product Comparisons"];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-light-grey min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#051e47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Technical Blogs & Resources
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
            Industrial guides, safety protocols, and product comparisons written by chemical manufacturing experts.
          </p>
          <div className="text-xs text-white/50 space-x-2">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        
        {/* Search & Categories Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-150 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap items-center w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                  selectedCategory === cat 
                    ? "bg-primary text-white border-primary" 
                    : "bg-light-grey text-gray-700 border-gray-200 hover:bg-gray-150"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-250 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xs"
            />
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div 
                key={blog.id} 
                className="bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                    <span className="text-secondary">{blog.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-gray-900 text-lg leading-snug hover:text-primary transition-colors">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  
                  <p className="text-xs text-gray-650 leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>
                </div>

                <div className="p-6 pt-0 mt-auto border-t border-gray-50 flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-medium flex items-center gap-1">
                    <Calendar size={11} />
                    {blog.date}
                  </span>
                  <Link href={`/blog/${blog.slug}`} className="text-primary hover:text-secondary font-bold flex items-center gap-1 group">
                    Read Article
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-150 max-w-sm mx-auto space-y-4">
            <BookOpen size={40} className="text-gray-300 mx-auto" />
            <h4 className="font-display font-bold text-base text-gray-900">No Articles Found</h4>
            <p className="text-xs text-gray-600">
              We couldn't find any resources matching your search queries. Try removing keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs text-primary font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>
    </div>
  );
}
