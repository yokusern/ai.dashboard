"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { 
  Briefcase, 
  Code, 
  Share2, 
  Search, 
  Zap,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const promptCategories = [
  { 
    name: "Sales Force", 
    description: "Cold outreach, negotiation scripts, and contract analysis.", 
    icon: Briefcase, 
    color: "bg-orange-50",
    iconColor: "text-orange-500"
  },
  { 
    name: "Dev Architect", 
    description: "System design, SQL optimization, and React component generators.", 
    icon: Code, 
    color: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  { 
    name: "Social Media", 
    description: "Post ideation, trend tagging, and caption polishing.", 
    icon: Share2, 
    color: "bg-pink-50",
    iconColor: "text-pink-500"
  },
];

export default function PromptsPage() {
  return (
    <div className="flex h-screen w-full bg-[#fcfcfc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Prompt Library" />
        <main className="flex-1 overflow-y-auto px-8 py-10 scroll-smooth animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mx-auto max-w-5xl w-full flex flex-col gap-12">
            
            {/* Library Search */}
            <div className="flex flex-col gap-6">
              <header className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wider text-black/40 uppercase">
                  <Zap className="h-4 w-4" />
                  AI Knowledge Repository
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  Elite Prompt Arsenal
                </h2>
              </header>

              <div className="relative glass-card flex items-center gap-4 rounded-2xl px-6 py-4 shadow-sm">
                <Search className="h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search thousands of vetted AI prompts..."
                  className="bg-transparent text-lg outline-none w-full"
                />
                <button className="bg-black text-xs font-bold text-white px-3 py-1.5 rounded-lg push-action">
                  Quick Search
                </button>
              </div>
            </div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {promptCategories.map((category) => (
                <div 
                  key={category.name}
                  className="glass-card flex flex-col gap-4 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white group cursor-pointer"
                >
                  <div className={cn("p-4 rounded-2xl w-fit", category.color)}>
                    <category.icon className={cn("h-6 w-6", category.iconColor)} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Prompts
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
