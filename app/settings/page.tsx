"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { 
  User, 
  CreditCard, 
  Key, 
  Bell, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const settingsItems = [
  { 
    name: "Profile", 
    description: "Personalize your identity and account email.", 
    icon: User, 
    badge: null 
  },
  { 
    name: "Billing", 
    description: "Manage subscription, invoices, and payment methods.", 
    icon: CreditCard, 
    badge: "Premium Plan" 
  },
  { 
    name: "API Keys", 
    description: "Configure external AI models and integrations.", 
    icon: Key, 
    badge: null 
  },
  { 
    name: "Notifications", 
    description: "Control how you receive alerts and updates.", 
    icon: Bell, 
    badge: "3 New" 
  },
  { 
    name: "Security", 
    description: "Two-factor authentication and data protection.", 
    icon: ShieldCheck, 
    badge: null 
  },
];

export default function SettingsPage() {
  return (
    <div className="flex h-screen w-full bg-[#fcfcfc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Control Panel" />
        <main className="flex-1 overflow-y-auto px-8 py-10 scroll-smooth animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mx-auto max-w-4xl w-full flex flex-col gap-10">
            
            {/* Header */}
            <header className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm font-semibold tracking-wider text-black/40 uppercase">
                <ShieldCheck className="h-4 w-4" />
                User Preferences
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-black">
                Account Settings
              </h2>
            </header>

            {/* Account Info Card */}
            <div className="glass-card flex items-center gap-6 rounded-3xl p-8 border border-black/5 shadow-sm">
              <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-gray-200 to-gray-50 border border-black/5" />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Standard Agent #01</h3>
                <p className="text-sm text-gray-500">yokusern@ai-dash.com</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-black">
                  <Zap className="h-3 w-3 fill-current" />
                  Premium Agent
                </div>
              </div>
              <button className="rounded-full bg-black px-6 py-2.5 text-sm font-bold text-white push-action">
                Update Profile
              </button>
            </div>

            {/* Settings List */}
            <div className="flex flex-col gap-3">
              {settingsItems.map((item) => (
                <button
                  key={item.name}
                  className="glass-card flex items-center justify-between rounded-2xl p-6 transition-all duration-200 hover:bg-[#fafafa] hover:border-black/10 push-action-intense border border-transparent shadow-sm"
                >
                  <div className="flex items-center gap-5 text-left">
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {item.badge && (
                      <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight className="h-5 w-5 text-gray-300" />
                  </div>
                </button>
              ))}
            </div>

            {/* Logout Section */}
            <button className="mt-10 flex items-center justify-center gap-2 rounded-2xl p-6 border border-red-50 text-red-500 font-bold hover:bg-red-50/50 transition-colors push-action-intense">
              <LogOut className="h-5 w-5" />
              Terminate Session
            </button>

          </div>
        </main>
      </div>
    </div>
  );
}
