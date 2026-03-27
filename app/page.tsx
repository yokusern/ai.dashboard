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
              <span className="flex items-center gap-2 text-sm font-semibold tracking-wider text-black/40 uppercase">
                <Sparkles className="h-4 w-4" />
                Good Evening, Agent
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-black">
                How can we accelerate your workflow?
              </h2>
            </header>

            <OmniInput />

            <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">
              <div className="glass-card flex flex-col gap-4 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] push-action">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-300 hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">SES Matching</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    AI-powered candidate to project matching based on resumes and requirements.
                  </p>
                </div>
              </div>

              <div className="glass-card flex flex-col gap-4 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] push-action">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    <Code className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-300 hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Dev Copilot</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Instantly generate component code or debug logic with context-aware AI.
                  </p>
                </div>
              </div>

              <div className="glass-card flex flex-col gap-4 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] push-action">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white font-bold text-xs">
                    SES
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-300 hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Sales Assistant</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
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
