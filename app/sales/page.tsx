"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { 
  Building2, 
  Target, 
  Zap, 
  ShieldAlert, 
  Trophy, 
  MessageCircle, 
  FileText,
  ChevronDown,
  Loader2,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "@/components/Skeleton";

type Tab = "battle-plan" | "roleplay" | "proposal";

const roles = [
  "Software Engineer (Full-stack)",
  "Frontend Developer",
  "Backend Developer",
  "DevOps Engineer",
  "Project Manager / Leader",
  "IT Sales Executive"
];

export default function SalesPage() {
  const [projectDetails, setProjectDetails] = useState("");
  const [targetRole, setTargetRole] = useState(roles[0]);
  const [activeTab, setActiveTab] = useState<Tab>("battle-plan");
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = async () => {
    if (!projectDetails.trim()) return;
    
    setIsLoading(true);
    setIsGenerated(false);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsGenerated(true);
  };

  return (
    <div className="flex h-screen w-full bg-[#fdfdfd] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="SES Interview Simulator" />
        <main className="flex-1 overflow-y-auto px-8 py-10 scroll-smooth animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mx-auto max-w-5xl w-full flex flex-col gap-6">
            
            <header className="mb-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#111111]">AI Sales Copilot</h2>
              <p className="text-gray-500 mt-1 text-[13px]">Convert complex requirements into winning strategies and mock interviews.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Pane: Input Section */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <section className="bg-white border border-black/[0.05] shadow-sm rounded-xl p-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">
                    <Building2 className="h-3.5 w-3.5" />
                    Input Parameters
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Project Details</label>
                      <textarea 
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        placeholder={"Skills: React, Node.js\nUnit Price: $8,000/mo\nDuration: 6 months...\nPaste requirement details here."}
                        className="w-full min-h-[280px] bg-gray-50/30 border border-black/[0.03] rounded-lg p-4 text-[13px] outline-none focus:border-black/10 transition-all resize-none placeholder:text-gray-300"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Target Role</label>
                      <div className="relative">
                        <select 
                          value={targetRole}
                          onChange={(e) => setTargetRole(e.target.value)}
                          className="w-full appearance-none bg-gray-50/30 border border-black/[0.03] rounded-lg px-4 py-2.5 text-[13px] outline-none focus:border-black/10 transition-all cursor-pointer font-medium"
                        >
                          {roles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleGenerate}
                    disabled={isLoading || !projectDetails.trim()}
                    className={cn(
                      "w-full bg-black text-white py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 interactive-button shadow-sm",
                      (isLoading || !projectDetails.trim()) && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Zap className="h-4 w-4" />
                        Generate Strategy
                      </>
                    )}
                  </button>
                </section>
              </div>

              {/* Right Pane: AI Insights Section */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <section className="bg-white border border-black/[0.05] shadow-sm rounded-xl flex flex-col h-full min-h-[600px] overflow-hidden">
                  
                  {/* Tabs Header */}
                  <div className="flex items-center border-b border-black/[0.05] relative px-6">
                    {(["battle-plan", "roleplay", "proposal"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "relative px-4 py-4 text-[11px] font-bold tracking-widest transition-colors duration-200 uppercase",
                          activeTab === tab ? "text-black" : "text-gray-400 hover:text-gray-600"
                        )}
                      >
                        {tab.replace("-", " ")}
                        {activeTab === tab && (
                          <motion.div 
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1 p-8 relative overflow-y-auto">
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div 
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-6"
                        >
                          <div className="space-y-4">
                            <Skeleton className="h-4 w-1/4" />
                            <div className="space-y-2">
                              <Skeleton className="h-16 w-full" />
                              <Skeleton className="h-16 w-full" />
                            </div>
                          </div>
                          <div className="space-y-4">
                            <Skeleton className="h-4 w-1/5" />
                            <div className="space-y-2">
                              <Skeleton className="h-3 w-full" />
                              <Skeleton className="h-3 w-[85%]" />
                            </div>
                          </div>
                        </motion.div>
                      ) : isGenerated ? (
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-8"
                        >
                          {activeTab === "battle-plan" && (
                            <div className="flex flex-col gap-8">
                              <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-black/30 text-[10px] font-bold uppercase tracking-[0.2em]">
                                  <ShieldAlert className="h-3.5 w-3.5" />
                                  Potential Challenges
                                </div>
                                <ul className="space-y-2">
                                  {["Competitive React ecosystem", "Strict unit price caps", "Short timeline constraints"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 rounded-lg border border-black/[0.03] bg-gray-50/50 text-[13px] font-medium text-gray-600">
                                      <span className="text-red-500">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-black/30 text-[10px] font-bold uppercase tracking-[0.2em]">
                                  <Trophy className="h-3.5 w-3.5" />
                                  Strategic Edges
                                </div>
                                <ul className="space-y-2">
                                  {["Proven remote expertise", "Technical leadership background", "Ready-to-deploy component sets"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 rounded-lg border border-black/[0.03] bg-gray-50/50 text-[13px] font-medium text-gray-600">
                                      <span className="text-green-500">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {activeTab === "roleplay" && (
                            <div className="flex flex-col gap-5">
                              {[1, 2].map((i) => (
                                <div key={i} className="flex flex-col gap-3 p-5 rounded-xl border border-black/[0.05] bg-white hover:border-black/10 transition-colors">
                                  <div className="flex items-center gap-2 text-[10px] font-bold text-black/20 uppercase tracking-widest" >
                                    <MessageCircle className="h-3.5 w-3.5" />
                                    Mock Question #{i}
                                  </div>
                                  <p className="text-[14px] font-bold text-black leading-snug">
                                    {i === 1 
                                      ? "How do you ensure state management efficiency in large-scale React projects?"
                                      : "Tell us about a time you had to handle a critical production bug."}
                                  </p>
                                  <div className="mt-1 p-3 rounded-lg bg-gray-50/80 border border-black/[0.02]">
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Model Answer</span>
                                    <p className="text-xs text-gray-500 leading-relaxed italic">
                                      {i === 1
                                        ? "I prioritize memoization and selective updates using Context or specialized stores..."
                                        : "I follow a strict triage process: isolate, reproduce, and fix while maintaining communication..."}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {activeTab === "proposal" && (
                            <div className="flex flex-col gap-6">
                              <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2 text-[10px] font-bold text-black/30 uppercase tracking-widest">
                                    <FileText className="h-3.5 w-3.5" />
                                    Draft Output
                                  </div>
                                  <button className="text-[9px] font-bold text-black uppercase tracking-widest hover:underline interactive-button">Copy</button>
                                </div>
                                <div className="p-6 rounded-xl bg-[#0a0a0a] text-zinc-400 font-numeric text-[12px] leading-relaxed border border-black/10">
                                  <p className="mb-2 text-zinc-200">Subject: Technical Proposal for {targetRole}</p>
                                  <p className="mb-4">Dear Client,</p>
                                  <p className="mb-4 text-zinc-300">I am writing to express strong interest in your project. My technical background aligns perfectly with your requirements...</p>
                                  <p>Best regards,</p>
                                  <p>Agent #01</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center gap-4 opacity-10 select-none">
                          <Zap className="h-12 w-12" />
                          <p className="text-xs font-bold uppercase tracking-widest">Awaiting Analysis</p>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
