"use client";

import React from "react";
import { Search, Bell, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-black/[0.05] bg-white px-8">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-gray-500">
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-bold tracking-tight text-black">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-3 rounded-md bg-[#f4f4f5]/60 hover:bg-[#f4f4f5] px-3 py-1.5 border border-black/[0.03] transition-colors cursor-text group w-72">
          <Search className="h-3.5 w-3.5 text-gray-400" />
          <span className="text-[13px] text-gray-400 flex-1">
            Search or type a command
          </span>
          <div className="flex items-center gap-0.5 opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-medium border border-black/10 px-1 rounded bg-white">
              ⌘
            </span>
            <span className="text-[10px] font-medium border border-black/10 px-1 rounded bg-white">
              K
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 relative interactive-button">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-black border border-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
