import React from "react";
import { StyledHeader } from "./Header.styled";
import { ReactComponent as Logo } from "../../Images/Svg/LogoDef.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default Header;
