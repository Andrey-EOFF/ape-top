import React, { useEffect } from "react";
import {
  BurgNav,
  BurgerMenuWrapper,
  LogoStyle,
  NavItem,
  NavList,
  Span,
} from "./BurgerMenu.styled";
import { ReactComponent as LogoSvg } from "../../Images/Svg/Logo.svg";

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

  return (
    <BurgerMenuWrapper>
      <BurgNav>
        <a href="/">
          <LogoStyle as={LogoSvg} />
        </a>
      </BurgNav>
      <NavList>
        <NavItem>
          <Span>ABOUT</Span>
        </NavItem>
        <NavItem>
          <Span>M-MAP</Span>
        </NavItem>
        <NavItem>
          <Span>FAQ</Span>
        </NavItem>
        <NavItem>
          <Span>ARTS</Span>
        </NavItem>
        <NavItem>
          <Span>MINT</Span>
        </NavItem>
      </NavList>
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
