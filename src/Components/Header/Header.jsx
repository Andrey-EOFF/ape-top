import React from "react";
import {
  LogoStyle,
  NavLinkList,
  NavLinkItem,
  NavLinkItemMenu,
  HeaderSection,
  LinkLogo,
} from "./Header.styled";
import { ReactComponent as LogoSvg } from "../../Images/Svg/Logo.svg";
import { ReactComponent as DiscordSvg } from "../../Images/Svg/Discord.svg";
import { ReactComponent as LogomarkSvg } from "../../Images/Svg/Logomark.svg";
import { ReactComponent as TwiterSvg } from "../../Images/Svg/Twiter.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BtnMenu from "../Buttons/BtnMenu";
import { useAppContext } from "../context";
import Hero from "../Hero/Hero";

const Header = () => {
  const { isMenuOpen } = useAppContext();

  return (
    <HeaderSection>
      <LinkLogo href="https://andrey-eoff.github.io/ape-top/">
        <LogoStyle as={LogoSvg} />
      </LinkLogo>

      {isMenuOpen && <BurgerMenu />}
      <NavLinkList>
        <NavLinkItemMenu isMenuOpen={isMenuOpen}>
          <BtnMenu />
        </NavLinkItemMenu>

        <NavLinkItem isMenuOpen={isMenuOpen}>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordSvg />
          </a>
        </NavLinkItem>
        <NavLinkItem isMenuOpen={isMenuOpen}>
          <a href="https://discord.com/">
            <LogomarkSvg />
          </a>
        </NavLinkItem>
        <NavLinkItem isMenuOpen={isMenuOpen}>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwiterSvg />
          </a>
        </NavLinkItem>
      </NavLinkList>
      <Hero />
    </HeaderSection>
  );
};

export default Header;
