"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import AnimatedButton from "../More/AnimatedButton";
import classes from "./Nav.module.scss";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 992 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Body scroll lock
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { label: "Zacznij zarabiać", href: "#start" },
    { label: "Godziny pracy", href: "#hours" },
    { label: "Zarobki", href: "#earnings" },
    { label: "Nasza Oferta", href: "#offer" },
    { label: "O nas", href: "#about" },
    { label: "Kontakt", href: "#contact" },
  ];

  const isSubpage = pathname !== "/";
  
  return (
    <nav className={clsx(
      classes.navbar,
      (scrolled || isSubpage || isOpen) && classes.scrolled
    )}>
      <div className={classes.container}>
        <Logo />

        <div className={classes.navGroup}>
          <ul className={classes.links}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={classes.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className={classes.buttonWrapper}>
            <AnimatedButton 
              href="tel:+48787611115"
              aria-label="Zadzwoń do Mida Polska – tel. 787 611 115"
            >
              787 611 115
            </AnimatedButton>
          </div>
        </div>

        <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} scrolled={scrolled} />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={clsx(classes.mobileMenu, isOpen && classes.open)}>
        <ul className={classes.mobileLinks}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link 
                href={item.href} 
                className={classes.mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className={classes.mobileCta}>
             <AnimatedButton 
              href="tel:+48787611115"
              onClick={() => setIsOpen(false)}
            >
              787 611 115
            </AnimatedButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
