import React, { useEffect } from "react";
import {
  BurgNav,
  BurgerMenuSection,
  LogoStyle,
  NavItem,
  NavList,
  Span,
} from "./BurgerMenu.styled";
import { ReactComponent as LogoSvg } from "../../Images/Svg/Logo.svg";
import Footer from "../Footer/Footer";

const BurgerMenu = ({ toggleMenu, isMenuOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, toggleMenu]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
    }
  };

  return (
    <BurgerMenuSection>
      <BurgNav>
        <a href="/">
          <LogoStyle as={LogoSvg} />
        </a>
      </BurgNav>
      <NavList>
        <NavItem>
          <Span onClick={() => scrollToSection("about")}>ABOUT</Span>
        </NavItem>
        <NavItem>
          <Span onClick={() => scrollToSection("mindmap")}>M-MAP</Span>
        </NavItem>
        <NavItem>
          <Span onClick={() => scrollToSection("faq")}>FAQ</Span>
        </NavItem>
        <NavItem>
          <Span onClick={() => scrollToSection("arts")}>ARTS</Span>
        </NavItem>
        <NavItem>
          <Span onClick={() => scrollToSection("arts")}>MINT</Span>
        </NavItem>
      </NavList>
      <Footer isMenuOpen={isMenuOpen} />
    </BurgerMenuSection>
  );
};

export default BurgerMenu;
