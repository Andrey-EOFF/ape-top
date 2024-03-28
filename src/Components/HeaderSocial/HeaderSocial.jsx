import React from "react";

import { ReactComponent as DiscordSvg } from "../../Images/Svg/Discord.svg";
import { ReactComponent as TwiterSvg } from "../../Images/Svg/Twiter.svg";
import { useAppContext } from "../context";
import { NavLinkItem, NavLinkList } from "./HeaderSocial.styled";

const HeaderSocial = () => {
  const { isMenuOpen } = useAppContext();

  return (
    <div>
      <NavLinkList>
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
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordSvg />
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
    </div>
  );
};

export default HeaderSocial;
