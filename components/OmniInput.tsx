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
    <div className="mx-auto mt-12 w-full max-w-2xl fade-in-up">
      <div className="relative glass-card flex flex-col rounded-xl p-4 transition-all duration-300">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="How can I help you today?"
          className="min-h-[100px] w-full resize-none border-none bg-transparent p-4 text-[15px] leading-relaxed outline-none placeholder:text-gray-300"
          rows={1}
        />
        
        <div className="flex items-center justify-between border-t border-black/[0.03] pt-4 px-2">
          <div className="flex items-center gap-3 text-gray-400">
            <button className="rounded-md p-1.5 hover:bg-gray-50 transition-colors interactive-button">
              <Sparkles className="h-4 w-4" />
            </button>
            <button className="rounded-md p-1.5 hover:bg-gray-50 transition-colors interactive-button">
              <Smile className="h-4 w-4" />
            </button>
            <button className="rounded-md p-1.5 hover:bg-gray-50 transition-colors interactive-button">
              <Image className="h-4 w-4" />
            </button>
            <button className="rounded-md p-1.5 hover:bg-gray-50 transition-colors interactive-button">
              <Paperclip className="h-4 w-4" />
            </button>
          </div>

          <button
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-bold transition-all duration-300 interactive-button shadow-sm",
              value.trim() 
                ? "bg-black text-white" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
            disabled={!value.trim()}
          >
            Send
            <Send className="h-3 w-3" />
          </button>
        </div>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-2 px-4">
        {[
          "Draft Proposal", 
          "Code Review", 
          "Resume Matching"
        ].map((action) => (
          <button
            key={action}
            className="rounded-full border border-black/[0.05] bg-white px-4 py-1.5 text-[11px] font-bold text-gray-500 transition-all duration-200 hover:border-black/10 hover:text-black interactive-button"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
