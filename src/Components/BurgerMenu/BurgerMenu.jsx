import React from "react";
import {
  BurgNav,
  BurgerMenuWrapper,
  LogoStyle,
  NavItem,
  NavList,
  Span,
  SpanBtn,
} from "./BurgerMenu.styled";
import { ReactComponent as LogoSvg } from "../../Images/Svg/Logo.svg";
import { Button } from "../Header/Header.styled";

const BurgerMenu = ({ onClose }) => {
  return (
    <BurgerMenuWrapper>
      <BurgNav>
        <a href="/">
          <LogoStyle as={LogoSvg} />
        </a>
        <Button onClick={onClose}>
          <SpanBtn>MENU</SpanBtn>
        </Button>
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
