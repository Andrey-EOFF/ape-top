import React from "react";
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
  const { toggleMenu } = useAppContext();

  const isWindowLarge = window.innerWidth <= 767;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
    }
  };

  return (
    <BurgerMenuSection>
      {isWindowLarge && <HeaderMain />}
      <BgBlock>
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
            <Span onClick={() => scrollToSection("mint")}>MINT</Span>
          </NavItem>
        </NavList>
        {isWindowLarge && <Footer />}
      </BgBlock>
    </BurgerMenuSection>
  );
};

export default BurgerMenu;
