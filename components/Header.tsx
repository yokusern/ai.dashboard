"use client";

import React from "react";
import { Search, Bell, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-black/[0.03] bg-white px-12">
      <div className="flex items-center gap-6">
        <button className="lg:hidden text-gray-500">
          <Menu className="h-5 w-5" />
        </button>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/20">System Phase / 01</span>
        <h1 className="text-sm font-black uppercase tracking-[0.2em] text-black">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-4 rounded-2xl bg-gray-50 border border-black/[0.03] px-5 py-2 hover:bg-white hover:shadow-xl hover:shadow-black/[0.02] transition-all cursor-text group w-80">
          <Search className="h-3.5 w-3.5 text-gray-300 group-hover:text-black transition-colors" />
          <span className="text-[10px] text-gray-400 font-light uppercase tracking-widest flex-1">
            Omni Search
          </span>
          <div className="flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="text-[9px] font-black border border-black/10 px-1.5 py-0.5 rounded-md bg-white">
              ⌘
            </span>
            <span className="text-[9px] font-black border border-black/10 px-1.5 py-0.5 rounded-md bg-white">
              K
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl hover:bg-gray-50 text-gray-300 hover:text-black relative transition-all">
            <Bell className="h-4 w-4" />
            <span className="absolute top-2.5 right-2.5 h-1 w-1 rounded-full bg-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
