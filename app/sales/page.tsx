"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Sparkles,
  ArrowRight,
  Send,
  User,
  Lightbulb,
  Mail,
  Mic2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { analyzeProject } from "@/app/actions/ai";
import Skeleton from "@/components/Skeleton";

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "DevOps Engineer",
  "Project Manager",
  "IT Sales"
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface AIResult {
  metrics: {
    complexity: string;
    matchProb: string;
    riskFactor: string;
  };
  strategy: {
    edge: string;
    mitigation: string;
    closing: string;
  };
  actions: {
    proposalDraft: string;
    interviewQuestion: string;
  };
}

export default function SalesPage() {
  const [projectDetails, setProjectDetails] = useState("");
  const [targetRole, setTargetRole] = useState(roles[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [aiResult, setAiResult] = useState<AIResult | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-sync logic
  useEffect(() => {
    if (projectDetails.trim().length > 10) {
      if (timerRef.current) clearTimeout(timerRef.current);
      
      setIsLoading(true);
      timerRef.current = setTimeout(async () => {
        const result = await analyzeProject(projectDetails, targetRole);
        if (result) {
          setAiResult(result);
          setIsGenerated(true);
        }
        setIsLoading(false);
      }, 1200);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [projectDetails, targetRole]);

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden text-[#111111]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Stealth Intelligence" />
        
        <main className="flex-1 overflow-y-auto px-12 py-12 scroll-smooth">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-6xl w-full grid grid-cols-12 lg:grid-rows-[repeat(2,minmax(300px,auto))] gap-6"
          >
            {/* Header Section */}
            <motion.header variants={item} className="col-span-12 mb-8">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-200 mb-3 block">
                SES Sales Intelligence / 01
              </span>
              <h1 className="text-6xl font-black tracking-tighter text-black leading-none">
                Strategic <br/>Analysis.
              </h1>
            </motion.header>

            {/* Hero Card: Input (XL) */}
            <motion.div 
              variants={item}
              className="col-span-12 lg:col-span-8 lg:row-span-2 group relative bg-white border border-black/[0.03] rounded-[40px] p-10 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.03)]"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Instruction Engine</span>
                </div>
                <div className="flex items-center gap-4">
                  <select 
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    className="bg-transparent text-[10px] font-black uppercase tracking-[0.2em] outline-none border-b border-black/5 pb-1 cursor-pointer hover:border-black transition-all"
                  >
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              <textarea 
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                placeholder="Paste context here. System will analyze automatically."
                className="w-full h-[400px] bg-transparent text-xl font-light leading-relaxed outline-none resize-none placeholder:text-gray-100"
              />
              
              <div className="absolute bottom-10 right-10 flex items-center gap-3 text-[9px] font-black text-gray-200 uppercase tracking-[0.3em]">
                {isLoading ? "Synchronizing Context" : isGenerated ? "Core Analysis Active" : "Waiting for Neural Input"}
              </div>
            </motion.div>

            {/* Analysis Card (M) */}
            <motion.div 
              variants={item}
              className="col-span-12 lg:col-span-4 bg-white border border-black/[0.03] rounded-[40px] p-10 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 mb-10">
                <Lightbulb className="h-4 w-4 text-black/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Insights</span>
              </div>
              
              <div className="space-y-8">
                {[
                  { label: "Complexity", value: aiResult?.metrics.complexity },
                  { label: "Match Probability", value: aiResult?.metrics.matchProb },
                  { label: "Risk Factor", value: aiResult?.metrics.riskFactor }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2 border-b border-black/[0.02] pb-6 last:border-0 last:pb-0">
                    <span className="text-[9px] font-light text-gray-400 uppercase tracking-[0.15em]">{stat.label}</span>
                    <span className="text-base font-black text-black leading-none">
                      {isLoading ? <Skeleton className="h-5 w-24 opacity-50" /> : isGenerated ? stat.value : "—"}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Card (S) */}
            <motion.div 
              variants={item}
              className="col-span-12 lg:col-span-4 bg-white border border-black/[0.03] rounded-[40px] p-10 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 mb-10">
                <Zap className="h-4 w-4 text-black/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Action Hub</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Mail, label: "Proposal", content: aiResult?.actions.proposalDraft },
                  { icon: Mic2, label: "Simulate", content: aiResult?.actions.interviewQuestion },
                  { icon: User, label: "Profile" },
                  { icon: Target, label: "Optimize" }
                ].map((action, i) => (
                  <button 
                    key={i}
                    onClick={() => action.content && alert(action.content)}
                    className="flex flex-col items-center justify-center gap-4 p-6 rounded-3xl border border-black/[0.02] bg-gray-50/30 hover:bg-black hover:text-white transition-all group/btn"
                  >
                    <action.icon className="h-5 w-5 text-gray-300 group-hover/btn:text-white transition-colors" />
                    <span className="text-[8px] font-black uppercase tracking-[0.2em]">{action.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Strategy Card (L) */}
            <motion.div 
              variants={item}
              className="col-span-12 bg-white border border-black/[0.03] rounded-[40px] p-12 mt-4 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.03)]"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-4 w-4 text-black/20" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Tactical Deployment</span>
                </div>
                <div className="text-[9px] text-gray-300 font-light uppercase tracking-widest">System Ready / 01</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {isLoading ? (
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="space-y-5">
                      <Skeleton className="h-4 w-1/2 opacity-50" />
                      <div className="space-y-2.5">
                        <Skeleton className="h-2 w-full opacity-30" />
                        <Skeleton className="h-2 w-[80%] opacity-30" />
                      </div>
                    </div>
                  ))
                ) : isGenerated ? (
                  <>
                    <div className="space-y-5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Competitive Edge</h4>
                      <p className="text-gray-400 font-light leading-relaxed text-[15px]">
                        {aiResult?.strategy.edge}
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Risk Mitigation</h4>
                      <p className="text-gray-400 font-light leading-relaxed text-[15px]">
                        {aiResult?.strategy.mitigation}
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Closing Move</h4>
                      <p className="text-gray-400 font-light leading-relaxed text-[15px]">
                        {aiResult?.strategy.closing}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="col-span-3 py-20 flex items-center justify-center border border-dashed border-black/[0.05] rounded-[32px]">
                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-200">Neural Sync Required</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
