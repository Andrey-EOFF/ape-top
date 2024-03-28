import React from "react";
import { HeaderSection } from "./Header.styled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { useAppContext } from "../context";
import Hero from "../Hero/Hero";
import HeaderMain from "../HeaderMain/HeaderMain";
import HeaderSocial from "../HeaderSocial/HeaderSocial";

const Header = () => {
  const { isMenuOpen } = useAppContext();

  return (
    <HeaderSection>
      <HeaderMain />
      {isMenuOpen && <BurgerMenu />}
      <HeaderSocial />
      <Hero />
    </HeaderSection>
  );
};

export default Header;
