// src/components/ui/StateHandler.tsx - BACK TO ORIGINAL
"use client";

import React from "react";

interface StateHandlerProps {
  loading: boolean;
  error: string | null // ✅ Change back to string | null
  loadingFallback: React.ReactNode;
  children: React.ReactNode;
}

export function StateHandler({ 
  loading, 
  error, 
  loadingFallback, 
  children 
}: StateHandlerProps) {
  // 1. Loading state
  if (loading) return <>{loadingFallback}</>;
  
  // 2. Error state
  if (error) {
    // ✅ 404 specific check based on error message
    
    
    return  (
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }
  
  
  // 4. Success state
  return <>{children}</>;
}