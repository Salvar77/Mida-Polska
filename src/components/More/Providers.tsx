"use client";
import { SessionProvider } from "next-auth/react";
import { ClickTracker } from "./ClickTracker";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ClickTracker />
      {children}
    </SessionProvider>
  );
}
