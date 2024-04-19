import React from "react";
import { HeaderMainSection, LinkLogo, LogoStyle } from "./HeaderMain.styled";
import { ReactComponent as LogoSvg } from "../../Images/Svg/Logo.svg";

import { useAppContext } from "../context";
import BtnMenu from "../Buttons/BtnMenu/BtnMenu";

const HeaderMain = () => {
  const { isMenuOpen } = useAppContext();
  return (
    <HeaderMainSection>
      <LinkLogo href="https://andrey-eoff.github.io/ape-top/">
        <LogoStyle isMenuOpen={isMenuOpen} as={LogoSvg} />
      </LinkLogo>
      <BtnMenu />
    </HeaderMainSection>
  );
};

export default HeaderMain;
