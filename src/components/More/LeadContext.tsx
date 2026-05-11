"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import LeadModal from "./LeadModal";

interface LeadContextType {
  openLeadModal: (targetUrl: string, source: string) => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");
  const [source, setSource] = useState("");

  const openLeadModal = (url: string, src: string) => {
    setTargetUrl(url);
    setSource(src);
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadContext.Provider value={{ openLeadModal }}>
      {children}
      <LeadModal
        isOpen={isOpen}
        onClose={closeLeadModal}
        targetUrl={targetUrl}
        source={source}
      />
    </LeadContext.Provider>
  );
};

export const useLeadModal = () => {
  const context = useContext(LeadContext);
  if (context === undefined) {
    throw new Error("useLeadModal must be used within a LeadProvider");
  }
  return context;
};
