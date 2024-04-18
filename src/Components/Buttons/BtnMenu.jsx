import React, { useEffect } from "react";
import { MenuButton, Span } from "./BtnMenu.styled";
import { useAppContext } from "../context";

const BtnMenu = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [isMenuOpen ]);

  return (
    <>
      <MenuButton type="button" onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <Span isMenuOpen={isMenuOpen}>{isMenuOpen ? "CLOSE" : "MENU"}</Span>
      </MenuButton>
    </>
  );
};

export default BtnMenu;
