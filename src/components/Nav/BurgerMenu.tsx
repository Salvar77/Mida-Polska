"use client";
import React from "react";
import classes from "./BurgerMenu.module.scss";
import clsx from "clsx";

interface BurgerMenuProps {
  isOpen: boolean;
  handleOpen: () => void;
  scrolled?: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, handleOpen, scrolled }) => {
  return (
    <div className={classes.hamburgerContainer}>
      <button
        className={clsx(
          classes.hamburger,
          classes.hamburger__spring,
          isOpen && classes.isActive,
          scrolled && classes.scrolled
        )}
        type="button"
        onClick={handleOpen}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <span className={classes.hamburgerBox}>
          <span className={classes.hamburgerInner}></span>
        </span>
      </button>
    </div>
  );
};

export default BurgerMenu;
