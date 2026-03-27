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
  { name: "SES Sales", href: "/ses-sales", icon: Briefcase },
  { name: "Dev Support", href: "/dev-support", icon: Code },
  { name: "Prompts", href: "/prompts", icon: BookOpen },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r border-[#f0f0f0] bg-white">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <span className="text-lg font-bold tracking-tight">AI Dash</span>
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
                "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 sidebar-item-hover active:scale-90",
                isActive 
                  ? "bg-[#fafafa] text-black border-l-4 border-black" 
                  : "text-gray-500 hover:text-black border-l-4 border-transparent"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 transition-colors",
                isActive ? "text-black" : "text-gray-400 group-hover:text-black"
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#f0f0f0] p-4">
        <div className="flex items-center gap-3 px-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold">User Profile</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Premium Plan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
