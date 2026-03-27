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
    <div className="flex h-screen w-full bg-[#fcfcfc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="SES Interview Simulator" />
        <main className="flex-1 overflow-y-auto px-8 py-10 scroll-smooth animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mx-auto max-w-6xl w-full flex flex-col gap-6">
            
            <header className="mb-4">
              <h2 className="text-3xl font-bold tracking-tight text-[#111111]">AI Sales Copilot</h2>
              <p className="text-gray-500 mt-1 text-sm">Convert complex requirements into winning strategies and mock interviews.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Pane: Input Section */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <section className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-xs font-bold text-black/40 uppercase tracking-widest">
                    <Building2 className="h-4 w-4" />
                    Input Parameters
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">Project Details</label>
                      <textarea 
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        placeholder={"Skills: React, Node.js\nUnit Price: $8,000/mo\nDuration: 6 months...\nPaste requirement details here."}
                        className="w-full min-h-[300px] bg-gray-50/50 border border-gray-100 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none placeholder:text-gray-300"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">Target Role</label>
                      <div className="relative">
                        <select 
                          value={targetRole}
                          onChange={(e) => setTargetRole(e.target.value)}
                          className="w-full appearance-none bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/5 transition-all cursor-pointer font-medium"
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
                      "w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-200 push-action-intense shadow-lg",
                      (isLoading || !projectDetails.trim()) && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Generating Intelligence...
                      </>
                    ) : (
                      <>
                        <Zap className="h-5 w-5" />
                        Generate Strategy
                      </>
                    )}
                  </button>
                </section>
              </div>

              {/* Right Pane: AI Insights Section */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <section className="bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col h-full min-h-[600px] overflow-hidden">
                  
                  {/* Tabs Header */}
                  <div className="flex items-center border-b border-gray-100 relative pt-2 px-6">
                    {(["battle-plan", "roleplay", "proposal"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "relative px-6 py-4 text-sm font-bold tracking-tight transition-colors duration-200 uppercase",
                          activeTab === tab ? "text-black" : "text-gray-400 hover:text-gray-600"
                        )}
                      >
                        {tab.replace("-", " ")}
                        {activeTab === tab && (
                          <motion.div 
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
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
                          className="space-y-8"
                        >
                          <div className="space-y-4">
                            <Skeleton className="h-6 w-1/3" />
                            <div className="space-y-2">
                              <Skeleton className="h-20 w-full" />
                              <Skeleton className="h-20 w-full" />
                            </div>
                          </div>
                          <div className="space-y-4">
                            <Skeleton className="h-6 w-1/4" />
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-full" />
                              <Skeleton className="h-4 w-[90%]" />
                            </div>
                          </div>
                        </motion.div>
                      ) : isGenerated ? (
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-8"
                        >
                          {activeTab === "battle-plan" && (
                            <div className="flex flex-col gap-10">
                              <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                                  <ShieldAlert className="h-4 w-4" />
                                  Potential Bottlenecks
                                </div>
                                <ul className="space-y-3">
                                  {["High competition for React/Node.js stack", "Remote coordination overhead", "Strict deadlines requiring senior oversight"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100/50">
                                      <span className="text-red-600 font-bold mt-0.5">•</span>
                                      <p className="text-sm font-medium text-gray-700">{item}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest">
                                  <Trophy className="h-4 w-4" />
                                  Competitive Edges
                                </div>
                                <ul className="space-y-3">
                                  {["Solid background in similar 6-month scale projects", "Expertise in specialized middleware", "Ready-to-deploy component library access"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-green-50/50 border border-green-100/50">
                                      <span className="text-green-600 font-bold mt-0.5">•</span>
                                      <p className="text-sm font-medium text-gray-700">{item}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {activeTab === "roleplay" && (
                            <div className="flex flex-col gap-6">
                              <div className="flex items-start gap-3 p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                                <Sparkles className="h-5 w-5 text-indigo-500 mt-1 shrink-0" />
                                <p className="text-sm text-indigo-700 font-medium leading-relaxed">
                                  I&apos;ve prepared 3 challenging questions based on the technical stack and duration specified. Focus on your contribution to the team velocity for these.
                                </p>
                              </div>
                              {[1, 2].map((i) => (
                                <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-500 uppercase tracking-widest" >
                                    <MessageCircle className="h-4 w-4" />
                                    Mock Question #{i}
                                  </div>
                                  <p className="font-bold text-gray-800">
                                    {i === 1 
                                      ? "How do you ensure state management efficiency in large-scale React projects under tight timelines?"
                                      : "Tell us about a time you had to handle a critical bug right before a production release."}
                                  </p>
                                  <div className="mt-2 p-4 rounded-xl bg-gray-50 border border-gray-200">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Model Answer</span>
                                    <p className="text-sm text-gray-600 leading-relaxed italic">
                                      {i === 1
                                        ? "I prioritize memoization and selective updates using Context or specialized stores, ensuring minimum re-renders..."
                                        : "I follow a strict triage process: isolate, reproduce, and fix while maintaining clear communication with the stakeholder..."}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {activeTab === "proposal" && (
                            <div className="flex flex-col gap-6">
                              <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2 text-xs font-bold text-black/40 uppercase tracking-widest">
                                    <FileText className="h-4 w-4" />
                                    Dynamic Draft
                                  </div>
                                  <button className="text-[10px] font-bold text-black uppercase tracking-widest hover:underline">Copy Text</button>
                                </div>
                                <div className="p-8 rounded-3xl bg-zinc-950 text-zinc-300 font-mono text-xs leading-relaxed border border-zinc-800 shadow-inner">
                                  <p className="mb-4 text-zinc-500">// AI-Generated Proposal Draft</p>
                                  <p className="mb-2 text-zinc-400">Subject: Technical Proposal for {targetRole} - [{projectDetails.substring(0, 15)}...]</p>
                                  <p className="mb-2 text-zinc-400">Dear Client,</p>
                                  <p className="mb-4 text-zinc-100">I am writing to express strong interest in the project. My background in React development aligns perfectly with your requirements...</p>
                                  <p className="mb-4 text-zinc-100">Key Value Propositions:</p>
                                  <p className="mb-2 text-zinc-200">- Full familiarity with the required tech stack</p>
                                  <p className="mb-2 text-zinc-200">- Proven track record in delivery efficiency</p>
                                  <p className="mb-4 text-zinc-200">- Flexible collaboration hours</p>
                                  <p className="text-zinc-400">Thank you for your consideration.</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center gap-4 opacity-30 select-none">
                          <Zap className="h-16 w-16" />
                          <div>
                            <p className="text-xl font-bold">Waiting for input</p>
                            <p className="text-sm">Generate intelligence to see the battle plan.</p>
                          </div>
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
