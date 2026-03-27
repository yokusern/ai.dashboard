"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Smile, Image, Paperclip, Loader2, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { genericChat } from "@/app/actions/ai";
import { motion, AnimatePresence } from "framer-motion";

export default function OmniInput() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleSend = async () => {
    if (!value.trim()) return;
    setIsLoading(true);
    setResponse(null);
    const result = await genericChat(value);
    setResponse(result);
    setIsLoading(false);
  };

  const handleSuggest = (text: string) => {
    setValue(text);
    // Trigger automatically if desired
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-2xl fade-in-up">
      <div className="relative glass-card flex flex-col rounded-[32px] p-6 transition-all duration-300 border border-black/[0.03] bg-white group hover:shadow-2xl hover:shadow-black/[0.02]">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
             if (e.key === "Enter" && !e.shiftKey) {
               e.preventDefault();
               handleSend();
             }
          }}
          placeholder="How can I help you today?"
          className="min-h-[120px] w-full resize-none border-none bg-transparent p-4 text-lg font-light leading-relaxed outline-none placeholder:text-gray-200"
          rows={1}
        />
        
        <div className="flex items-center justify-between border-t border-black/[0.03] pt-6 px-2">
          <div className="flex items-center gap-4 text-gray-300">
            <button className="rounded-xl p-2 bg-gray-50/50 hover:bg-gray-50 transition-colors">
              <Sparkles className="h-4 w-4" />
            </button>
            <button className="rounded-xl p-2 bg-gray-50/50 hover:bg-gray-50 transition-colors">
              <Paperclip className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={handleSend}
            disabled={!value.trim() || isLoading}
            className={cn(
              "flex items-center gap-3 rounded-full px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-black/5",
              value.trim() && !isLoading
                ? "bg-black text-white hover:scale-105 active:scale-95" 
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            )}
          >
            {isLoading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <>
                Synchronize
                <Send className="h-3 w-3" />
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {(isLoading || response) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 bg-white border border-black/[0.03] rounded-[32px] p-8 shadow-xl shadow-black/[0.02]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Neural Intelligence</span>
            </div>
            
            {isLoading ? (
              <div className="space-y-4">
                <div className="h-4 w-full bg-gray-50 animate-pulse rounded-full" />
                <div className="h-4 w-[90%] bg-gray-50 animate-pulse rounded-full" />
                <div className="h-4 w-[70%] bg-gray-50 animate-pulse rounded-full" />
              </div>
            ) : (
              <p className="text-[15px] font-light leading-relaxed text-gray-600">
                {response}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {!response && !isLoading && (
        <div className="mt-12 flex flex-wrap justify-center gap-3 px-4">
          {[
            "Draft a proposal for high-end web dev", 
            "Review my React component security", 
            "Best SES strategies for mid-market clients"
          ].map((action) => (
            <button
              key={action}
              onClick={() => handleSuggest(action)}
              className="rounded-full border border-black/[0.03] bg-white px-5 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 transition-all duration-200 hover:border-black hover:text-black hover:bg-gray-50 active:scale-95"
            >
              {action}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
