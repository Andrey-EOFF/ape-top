import React from "react";
import {
  BgBlock,
  BurgNav,
  BurgerMenuSection,
  LogoStyle,
  NavItem,
  NavList,
  Span,
} from "./BurgerMenu.styled";
import { ReactComponent as LogoSvg } from "../../Images/Svg/Logo.svg";
import Footer from "../Footer/Footer";
import { useAppContext } from "../context";

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
      <BurgNav>
        <a href="/">
          <LogoStyle as={LogoSvg} />
        </a>
      </BurgNav>
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
