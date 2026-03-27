"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import OmniInput from "@/components/OmniInput";
import { Sparkles, ArrowUpRight, Code, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-[#fcfcfc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="SES & Dev AI Dashboard" />
        <main className="flex-1 overflow-y-auto px-8 py-10 scroll-smooth">
            <div className="mx-auto max-w-5xl w-full flex flex-col">
            <header className="mb-12 flex flex-col gap-2 fade-in-up">
              <span className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-black/30 uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                System initialized
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-black">
                How can we accelerate your workflow?
              </h2>
            </header>

            <OmniInput />

            <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">
              <div className="glass-card flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-black/10 interactive-button">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white shadow-sm">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold">SES Matching</h3>
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                    AI-powered candidate to project matching based on resumes and requirements.
                  </p>
                </div>
              </div>

              <div className="glass-card flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-black/10 interactive-button">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white shadow-sm">
                    <Code className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold">Dev Copilot</h3>
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                    Instantly generate component code or debug logic with context-aware AI.
                  </p>
                </div>
              </div>

              <div className="glass-card flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-black/10 interactive-button">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white shadow-sm font-bold text-[10px]">
                    SES
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold">Sales Assistant</h3>
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                    Automate proposal drafts and email outreach with personalized SES context.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
