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
  Zap
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
    <div className="flex h-full w-60 flex-col border-r border-black/[0.05] sidebar-blur">
      <div className="flex h-14 items-center px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black text-white shadow-sm">
            <Zap className="h-4 w-4 fill-current" />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-black">AI Dashboard</span>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-200 interactive-button",
                isActive 
                  ? "bg-black/[0.04] text-black shadow-sm border border-black/[0.03]" 
                  : "text-gray-500 hover:text-black"
              )}
            >
              <item.icon className={cn(
                "h-4 w-4 transition-colors",
                isActive ? "text-black" : "text-gray-400 group-hover:text-black"
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-black/[0.05] p-4">
        <div className="flex items-center gap-3 px-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-gray-200 to-gray-50 border border-black/[0.05]" />
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-black">Standard Agent</span>
            <span className="text-[9px] text-gray-400 font-numeric uppercase tracking-wider">Premium Access</span>
          </div>
        </div>
      </div>
    </div>
  );
}
