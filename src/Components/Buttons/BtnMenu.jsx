import React from "react";
import { MenuButton } from "./BtnMenu.styled";

const BtnMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div>
      <MenuButton type="button" onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
      </MenuButton>
    </div>
  );
};

export default BtnMenu;
