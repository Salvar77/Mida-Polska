import React from "react";
import styles from "./SecondaryButton.module.scss";
import clsx from "clsx";

interface SecondaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "bolt" | "uber" | "freenow";
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ 
  children, 
  className, 
  onClick, 
  href,
  variant = "default"
}) => {
  const Tag = href ? "a" : "button";
  
  return (
    <Tag
      className={clsx(styles.hBtnSecondary, styles[variant], className)}
      onClick={onClick}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className={styles.layers}>
        <div className={styles.bg} />
        <div className={styles.flare} />
      </div>

      <div className={styles.frame}>
        <div className={clsx(styles.corner, styles.top)} />
        <div className={clsx(styles.corner, styles.bottom)} />
      </div>

      <span className={styles.content}>
        {children}
        <span className={styles.arrowIcon}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M5 12H19M19 12L13 6M19 12L13 18" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </span>
      </span>
    </Tag>
  );
};

export default SecondaryButton;
