"use client";
import { SessionProvider } from "next-auth/react";
import { ClickTracker } from "./ClickTracker";
import { LeadProvider } from "./LeadContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LeadProvider>
        <ClickTracker />
        {children}
      </LeadProvider>
    </SessionProvider>
  );
}
