"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import OmniInput from "@/components/OmniInput";
import { Sparkles, ArrowUpRight, Code, MessageCircle, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden text-[#111111]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Neural Dashboard" />
        <main className="flex-1 overflow-y-auto px-12 py-12 scroll-smooth">
            <div className="mx-auto max-w-5xl w-full flex flex-col">
            <header className="mb-16 flex flex-col gap-4">
              <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-black/20 uppercase">
                <Sparkles className="h-4 w-4" />
                Intelligence Active
              </span>
              <h2 className="text-6xl font-black tracking-tighter text-black leading-none max-w-2xl">
                Ready to <br/>Synchronize.
              </h2>
            </header>

            <OmniInput />

            <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: MessageCircle, title: "SES Strategy", desc: "Analyze candidates and projects with high-precision matching." },
                { icon: Code, title: "Dev Copilot", desc: "Generate secure, type-safe components and solve logic complex issues." },
                { icon: Zap, title: "Sales Automation", desc: "Automate high-context email outreach and executive proposal drafts." }
              ].map((card, i) => (
                <div key={i} className="group relative bg-white border border-black/[0.03] rounded-[40px] p-10 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white shadow-xl shadow-black/10">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-200 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.2em] mb-3">{card.title}</h3>
                    <p className="text-[14px] font-light text-gray-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
