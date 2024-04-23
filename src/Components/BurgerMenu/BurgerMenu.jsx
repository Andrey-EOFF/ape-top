import React, { useEffect, useRef } from "react";
import {
  BgBlock,
  BurgerMenuSection,
  NavItem,
  NavList,
  Span,
} from "./BurgerMenu.styled";
import Footer from "../Footer/Footer";
import { useAppContext } from "../context";
import HeaderMain from "../HeaderMain/HeaderMain";

const BurgerMenu = () => {
  const { toggleMenu, isMenuOpen } = useAppContext();
  const menuRef = useRef(null);

  const isWindowLarge = window.innerWidth <= 768;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
      document.body.classList.remove("disable-scroll");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, toggleMenu]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        toggleMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, toggleMenu]);

  useEffect(() => {
    if (isMenuOpen && isWindowLarge) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [isMenuOpen, isWindowLarge]);

  return (
    <BurgerMenuSection ref={menuRef}>
      {isWindowLarge && <HeaderMain />}
      <BgBlock>
        <NavList>
          <NavItem onClick={() => scrollToSection("about")}>
            <Span isMenuOpen={isMenuOpen}>ABOUT</Span>
          </NavItem>
          <NavItem onClick={() => scrollToSection("mindmap")}>
            <Span isMenuOpen={isMenuOpen}>M-MAP</Span>
          </NavItem>
          <NavItem onClick={() => scrollToSection("faq")}>
            <Span isMenuOpen={isMenuOpen}>FAQ</Span>
          </NavItem>
          <NavItem onClick={() => scrollToSection("arts")}>
            <Span isMenuOpen={isMenuOpen}>ARTS</Span>
          </NavItem>
          <NavItem onClick={() => scrollToSection("mint")}>
            <Span isMenuOpen={isMenuOpen}>MINT</Span>
          </NavItem>
        </NavList>
        {isWindowLarge && <Footer />}
      </BgBlock>
    </BurgerMenuSection>
  );
};

export default BurgerMenu;
