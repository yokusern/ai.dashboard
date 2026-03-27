"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Smile, Image, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OmniInput() {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="mx-auto mt-12 w-full max-w-3xl fade-in-up">
      <div className="relative glass-card flex flex-col rounded-2xl p-4 ring-1 ring-black/5 focus-within:ring-black/10 transition-all duration-300">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="How can I help you with SES sales or dev support today?"
          className="min-h-[140px] w-full resize-none border-none bg-transparent p-4 text-lg leading-relaxed outline-none placeholder:text-gray-300"
          rows={1}
        />
        
        <div className="flex items-center justify-between border-t border-[#f0f0f0] pt-4 px-2">
          <div className="flex items-center gap-4 text-gray-400">
            <button className="rounded-full p-2 hover:bg-gray-100 transition-colors push-action">
              <Sparkles className="h-5 w-5 hover:text-indigo-500" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100 transition-colors push-action">
              <Smile className="h-5 w-5 hover:text-yellow-500" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100 transition-colors push-action">
              <Image className="h-5 w-5 hover:text-green-500" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100 transition-colors push-action">
              <Paperclip className="h-5 w-5 hover:text-blue-500" />
            </button>
          </div>

          <button
            className={cn(
              "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 push-action-intense shadow-sm",
              value.trim() 
                ? "bg-black text-white hover:shadow-lg hover:-translate-y-0.5" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
            disabled={!value.trim()}
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
        <p className="w-full text-center text-xs font-medium text-gray-400 mb-2 uppercase tracking-widest">
          Quick Actions
        </p>
        {[
          "Draft Proposal", 
          "Code Review", 
          "Resume Matching", 
          "Interview Prep"
        ].map((action) => (
          <button
            key={action}
            className="rounded-full border border-gray-100 bg-white/50 px-5 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-white hover:border-gray-200 hover:shadow-sm hover:text-black push-action"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
