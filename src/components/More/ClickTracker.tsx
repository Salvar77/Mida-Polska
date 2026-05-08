"use client";
import { useEffect } from "react";

export const ClickTracker = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");

      if (target && target.href.includes("forms.gle")) {
        fetch("/api/track-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "application-button",
            target: target.href,
            page: window.location.pathname,
          }),
        }).catch(() => {});
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};
