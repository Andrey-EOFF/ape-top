import React from "react";
import { MenuButton, Span } from "./BtnMenu.styled";

const BtnMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div>
      <MenuButton type="button" onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <Span>{isMenuOpen ? "CLOSE" : "MENU"}</Span>
      </MenuButton>
    </div>
  );
};

export default BtnMenu;
