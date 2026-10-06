"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/websiteData";
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from "lucide-react";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPageProps) {
  // Use React's use hook to unwrap params in client component
  const resolvedParams = use(params);
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs
  const relatedBlogs = blogs
    .filter((b) => b.id !== blog.id)
    .slice(0, 2);

  const handleOpenQuote = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  // Simple, robust helper to render mock Markdown content into rich HTML
  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, index) => {
      const trimmedBlock = block.trim();
      
      // Headers
      if (trimmedBlock.startsWith("###")) {
        return (
          <h3 key={index} className="font-display font-bold text-lg text-primary pt-4 pb-2 border-b border-gray-100 mb-4">
            {trimmedBlock.replace("###", "").trim()}
          </h3>
        );
      }
      
      // Bullet lists
      if (trimmedBlock.startsWith("*") || trimmedBlock.startsWith("-")) {
        return (
          <ul key={index} className="list-disc pl-5 space-y-2 text-xs text-gray-700 my-4">
            {trimmedBlock.split("\n").map((line, lIdx) => (
              <li key={lIdx}>
                {line.replace(/^[*-\s]+/, "").trim()}
              </li>
            ))}
          </ul>
        );
      }

      // Render simple markdown tables if present
      if (trimmedBlock.includes("|") && trimmedBlock.includes("---")) {
        const rows = trimmedBlock.split("\n").filter(r => r.trim() !== "");
        const headers = rows[0].split("|").map(h => h.trim()).filter(h => h !== "");
        const bodyRows = rows.slice(2); // Skip header and separator rows

        return (
          <div key={index} className="overflow-x-auto my-6 border border-gray-200 rounded-xl">
            <table className="min-w-full divide-y divide-gray-200 text-[11px] text-gray-700">
              <thead className="bg-gray-50 text-gray-500 font-bold uppercase">
                <tr>
                  {headers.map((h, idx) => (
                    <th key={idx} className="px-4 py-2.5 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bodyRows.map((r, rIdx) => {
                  const cells = r.split("|").map(c => c.trim()).filter(c => c !== "");
                  return (
                    <tr key={rIdx} className="hover:bg-gray-50">
                      {cells.map((c, cIdx) => (
                        <td key={cIdx} className="px-4 py-2.5">{c}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }

      // Standard paragraphs
      return (
        <p key={index} className="text-xs sm:text-sm text-gray-700 leading-relaxed my-4" 
           dangerouslySetInnerHTML={{ 
             __html: trimmedBlock
               .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Parse bold
               .replace(/\*(.*?)\*/g, "<em>$1</em>") // Parse italics
           }} 
        />
      );
    });
  };

  return (
    <div className="w-full bg-light-grey min-h-screen pb-16">
      {/* breadcrumbs */}
      <div className="bg-white border-b border-gray-150 py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Articles
          </Link>
          <div className="text-[10px] text-gray-400 font-semibold space-x-1">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <span className="text-gray-600 truncate max-w-[100px] inline-block align-bottom">{blog.title}</span>
          </div>
        </div>
      </div>

      {/* Main post container */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Article Body (8 Cols) */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm space-y-6">
            
            {/* Meta */}
            <div className="flex flex-wrap gap-4 items-center text-xs text-gray-400 font-semibold border-b border-gray-100 pb-4">
              <span className="bg-primary/5 text-primary px-2.5 py-1 rounded text-[10px] uppercase tracking-wide">
                {blog.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {blog.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User size={12} />
                By {blog.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-primary leading-tight">
              {blog.title}
            </h1>

            {/* Body content parsed */}
            <div className="prose max-w-none text-left">
              {renderContent(blog.content)}
            </div>

            {/* Author box */}
            <div className="mt-8 pt-6 border-t border-gray-100 bg-light-grey rounded-2xl p-4 flex gap-3 items-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-sm">
                JP
              </div>
              <div className="text-left text-xs">
                <h5 className="font-bold text-gray-900">Jitendra Prajapati</h5>
                <p className="text-gray-500">Founder & Managing Director, Amar Chemicals. Experienced in industrial chemical processing since 1990.</p>
              </div>
            </div>
          </article>

          {/* RIGHT: Sidebar CTAs (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Quote Widget */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-md space-y-4">
              <h4 className="font-display font-bold text-base text-gray-900 leading-snug">
                Request Specifications
              </h4>
              <p className="text-xs text-gray-650">
                Discuss your raw material parameters and request competitive wholesale pricing directly from our Ahmedabad factory.
              </p>
              <button
                onClick={handleOpenQuote}
                className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer text-center"
              >
                Request Quote
              </button>
            </div>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-md space-y-4">
                <h4 className="font-display font-bold text-sm text-primary uppercase tracking-wider border-b border-gray-100 pb-2">
                  Related Articles
                </h4>
                <div className="space-y-4">
                  {relatedBlogs.map((rBlog) => (
                    <div key={rBlog.id} className="space-y-1">
                      <span className="text-[9px] text-secondary font-bold uppercase">{rBlog.category}</span>
                      <h5 className="font-semibold text-xs text-gray-900 leading-snug hover:text-primary hover:underline transition-all">
                        <Link href={`/blog/${rBlog.slug}`}>{rBlog.title}</Link>
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
