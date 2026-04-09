import React from "react";
import styles from "./IndustrialButton.module.scss";
import clsx from "clsx";

interface IndustrialButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "bolt" | "uber" | "freenow";
}

const IndustrialButton: React.FC<IndustrialButtonProps> = ({ 
  children, 
  className, 
  onClick, 
  href,
  variant = "default"
}) => {
  const Tag = href ? "a" : "button";
  
  return (
    <Tag
      className={clsx(styles.hBtn, styles[variant], className)}
      onClick={onClick}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className={styles.layers}>
        <div className={styles.bg} />
        <div className={styles.pattern} />
        <div className={styles.flare} />
      </div>
      
      <div className={styles.frame}>
        <div className={clsx(styles.corner, styles.tl)} />
        <div className={clsx(styles.corner, styles.br)} />
        <div className={styles.energyLine} />
      </div>

      <span className={styles.content}>
        <span className={styles.glimmer} />
        {children}
      </span>
      
      <div className={styles.indicator} />
    </Tag>
  );
};

export default IndustrialButton;
