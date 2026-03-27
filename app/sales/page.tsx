"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { 
  Building2, 
  Send, 
  FileText, 
  HelpCircle, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import { ResponseSkeleton } from "@/components/Skeleton";

export default function SalesPage() {
  return (
    <div className="flex h-screen w-full bg-[#fcfcfc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="SES Sales Hub" />
        <main className="flex-1 overflow-y-auto px-8 py-10 scroll-smooth animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mx-auto max-w-5xl w-full flex flex-col gap-10">
            
            {/* Project Input Section */}
            <section className="glass-card rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-black/40 uppercase tracking-wider mb-6">
                <Building2 className="h-4 w-4" />
                Project Requirements
              </div>
              <h2 className="text-2xl font-bold mb-6">Master Your Next Proposal</h2>
              <div className="relative">
                <textarea 
                  placeholder="Paste project requirements or candidate profile here..."
                  className="w-full min-h-[160px] bg-[#f9f9f9] border border-gray-100 rounded-2xl p-6 text-lg outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
                <button className="absolute bottom-4 right-4 bg-black text-white px-6 py-2.5 rounded-full flex items-center gap-2 font-semibold push-action shadow-lg">
                  Generate Proposal
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </section>

            {/* AI Analysis Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Expected Questions */}
              <div className="glass-card rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-black/40 uppercase tracking-wider">
                    <HelpCircle className="h-4 w-4 text-indigo-500" />
                    Simulated Interview
                  </div>
                  <Sparkles className="h-4 w-4 text-indigo-500 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold">Anticipated Questions</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 rounded-xl border border-gray-100 bg-[#fbfbfb] text-sm text-gray-600">
                      Processing AI analysis of the requirements...
                    </div>
                  ))}
                  <ResponseSkeleton />
                </div>
              </div>

              {/* Proposal Preview */}
              <div className="glass-card rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-black/40 uppercase tracking-wider">
                  <FileText className="h-4 w-4 text-green-500" />
                  Draft Output
                </div>
                <h3 className="text-xl font-bold">Proposal Preview</h3>
                <div className="flex-1 rounded-2xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center p-8 text-center bg-[#fdfdfd]">
                  <MessageSquare className="h-10 w-10 text-gray-200 mb-4" />
                  <p className="text-sm text-gray-400 max-w-[200px]">
                    Your AI-generated proposal will appear here.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
