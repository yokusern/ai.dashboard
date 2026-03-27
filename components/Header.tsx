"use client";

import React from "react";
import { Search, Bell, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#f0f0f0] bg-white px-8">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-gray-500">
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-3 rounded-full bg-[#f4f4f5] px-4 py-2 ring-offset-2 focus-within:ring-2 focus-within:ring-black/5 transition-all">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects or documents..."
            className="bg-transparent text-sm outline-none w-64 placeholder:text-gray-400"
          />
          <span className="text-[10px] bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-400 font-mono">
            ⌘ K
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 relative push-action">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-black border-2 border-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
