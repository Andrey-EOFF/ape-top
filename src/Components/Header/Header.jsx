import React, { useState } from "react";
import {
  StyledHeader,
  LogoStyle,
  NavLinkList,
  NavLinkItem,
} from "./Header.styled";
import { ReactComponent as LogoSvg } from "../../Images/Svg/Logo.svg";
import { ReactComponent as DiscordSvg } from "../../Images/Svg/Discord.svg";
import { ReactComponent as LogomarkSvg } from "../../Images/Svg/Logomark.svg";
import { ReactComponent as TwiterSvg } from "../../Images/Svg/Twiter.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BtnMenu from "../Buttons/BtnMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <a href="/">
        <LogoStyle as={LogoSvg} />
      </a>

      {isMenuOpen && (
        <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      )}
      <NavLinkList>
        <NavLinkItem>
          <BtnMenu
            onClick={toggleMenu}
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
          />
        </NavLinkItem>

        <NavLinkItem>
          <a href="/">
            <DiscordSvg />
          </a>
        </NavLinkItem>
        <NavLinkItem>
          <a href="/">
            <LogomarkSvg />
          </a>
        </NavLinkItem>
        <NavLinkItem>
          <a href="/">
            <TwiterSvg />
          </a>
        </NavLinkItem>
      </NavLinkList>
    </StyledHeader>
  );
};

export default Header;
