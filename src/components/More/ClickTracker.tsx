"use client";
import { useEffect } from "react";

export const ClickTracker = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find the closest anchor tag
      const target = (e.target as HTMLElement).closest("a");
      
      // If it's a Google Form link
      if (target && target.href.includes("forms.gle")) {
        // Send tracking data in the background
        fetch("/api/track-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            source: "application-button", 
            target: target.href,
            page: window.location.pathname 
          }),
        }).catch(() => {}); // Fail silently to not disturb the user
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};
