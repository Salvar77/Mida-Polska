"use client";
import { useState, useEffect } from "react";

export const useShouldAnimate = (breakpoint = 768): boolean => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setShouldAnimate(window.innerWidth >= breakpoint);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return shouldAnimate;
};
