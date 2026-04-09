import React from "react";
import styles from "./AnimatedButton.module.scss";
import clsx from "clsx";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  className, 
  onClick, 
  href,
  type = "button"
}) => {
  const Tag = href ? "a" : "button";
  
  return (
    <Tag
      className={clsx(styles.btn31, className)}
      onClick={onClick}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      type={!href ? type : undefined}
    >
      <span className={styles.textContainer}>
        <span className={styles.text}>{children}</span>
      </span>
    </Tag>
  );
};

export default AnimatedButton;
