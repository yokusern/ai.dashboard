"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Briefcase, 
  Code, 
  BookOpen, 
  Settings,
  Zap,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "SES Sales", href: "/sales", icon: Briefcase },
  { name: "Dev Support", href: "/dev", icon: Code },
  { name: "Prompts", href: "/prompts", icon: BookOpen },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-60 flex-col border-r border-black/[0.03] bg-white">
      <div className="flex h-20 items-center px-8">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-black animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Intelligence</span>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1.5 px-4 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-2xl px-4 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all duration-200",
                isActive 
                  ? "bg-black text-white shadow-lg shadow-black/5" 
                  : "text-gray-400 hover:text-black hover:bg-gray-50/50"
              )}
            >
              <item.icon className={cn(
                "h-3.5 w-3.5 transition-colors",
                isActive ? "text-white" : "text-gray-300 group-hover:text-black"
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-black/[0.03] p-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-full bg-gray-50 border border-black/[0.03] flex items-center justify-center">
            <User className="h-3.5 w-3.5 text-gray-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-black">Agent #01</span>
            <span className="text-[8px] text-gray-400 font-light uppercase tracking-[0.2em]">Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}
