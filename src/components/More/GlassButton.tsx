import React from "react";
import styles from "./GlassButton.module.scss";
import clsx from "clsx";

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "bolt" | "uber" | "freenow";
}

const GlassButton: React.FC<GlassButtonProps> = ({ 
  children, 
  className, 
  onClick, 
  href,
  variant = "default"
}) => {
  const Tag = href ? "a" : "button";
  
  return (
    <Tag
      className={clsx(styles.hBtnGlass, styles[variant], className)}
      onClick={onClick}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className={styles.layers}>
        <div className={styles.blurLayer} />
        <div className={styles.reflection} />
      </div>

      <div className={styles.frame}>
        <div className={clsx(styles.edge, styles.top)} />
        <div className={clsx(styles.edge, styles.bottom)} />
      </div>

      <span className={styles.content}>
        {children}
      </span>
    </Tag>
  );
};

export default GlassButton;
