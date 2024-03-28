import React from "react";
import { MenuButton, Span } from "./BtnMenu.styled";
import { useAppContext } from "../context";

const BtnMenu = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();

  return (
    <>
      <MenuButton type="button" onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <Span isMenuOpen={isMenuOpen}>{isMenuOpen ? "CLOSE" : "MENU"}</Span>
      </MenuButton>
    </>
  );
};

export default BtnMenu;
