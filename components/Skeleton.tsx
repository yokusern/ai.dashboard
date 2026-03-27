"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-100",
        className
      )}
    />
  );
}

export function ResponseSkeleton() {
  return (
    <div className="space-y-4 p-6 glass-card rounded-xl fade-in-up">
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-6 rounded-md" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="space-y-1.5">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-[90%]" />
        <Skeleton className="h-3 w-[85%]" />
      </div>
    </div>
  );
}
