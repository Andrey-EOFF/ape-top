import React from "react";
import { Button } from "./BtnMenu.styled";

const BtnMenu = ({ isMenuOpen, toggleMenu }) => {


  return (
    <div>
      <Button type="button" onClick={toggleMenu}>
        <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
      </Button>
    </div>
  );
};

export default BtnMenu;
