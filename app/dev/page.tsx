"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { 
  Code2, 
  Terminal, 
  Bug, 
  Settings2, 
  RefreshCcw, 
  BookOpen,
  ClipboardCopy
} from "lucide-react";
import { cn } from "@/lib/utils";

const devActions = [
  { name: "Refactor", icon: RefreshCcw, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Debug", icon: Bug, color: "text-red-500", bg: "bg-red-50" },
  { name: "Docs", icon: BookOpen, color: "text-green-500", bg: "bg-green-50" },
  { name: "Optimize", icon: Terminal, color: "text-indigo-500", bg: "bg-indigo-50" },
];

export default function DevPage() {
  return (
    <div className="flex h-screen w-full bg-[#fcfcfc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Developer Support AI" />
        <main className="flex-1 overflow-y-auto px-8 py-10 scroll-smooth animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mx-auto max-w-5xl w-full flex flex-col gap-8">
            
            {/* Main Interactive Section */}
            <div className="flex flex-col gap-6">
              <header className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wider text-black/40 uppercase">
                  <Code2 className="h-4 w-4" />
                  Code Intelligence
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  Accelerate Your Development
                </h2>
              </header>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {devActions.map((action) => (
                  <button
                    key={action.name}
                    className={cn(
                      "flex items-center justify-center gap-3 rounded-2xl p-4 transition-all duration-300 push-action-intense border border-gray-100 hover:border-black/5 hover:bg-white hover:shadow-lg",
                      "group"
                    )}
                  >
                    <div className={cn("p-2 rounded-xl", action.bg)}>
                      <action.icon className={cn("h-5 w-5", action.color)} />
                    </div>
                    <span className="font-bold text-sm text-gray-700 group-hover:text-black">
                      {action.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Editor Section */}
              <div className="relative glass-card rounded-3xl overflow-hidden shadow-sm border border-black/5 bg-zinc-950">
                <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-xs font-mono text-zinc-500">editor.tsx</span>
                  </div>
                  <button className="text-zinc-500 hover:text-white transition-colors">
                    <ClipboardCopy className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6">
                  <textarea 
                    className="w-full min-h-[400px] bg-transparent text-zinc-300 font-mono text-sm leading-relaxed outline-none resize-none placeholder:text-zinc-700"
                    placeholder="// Paste your code here for AI analysis..."
                    spellCheck={false}
                  />
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
