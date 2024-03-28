import styled from "styled-components";
import { SizeDev, Colors, Utils } from "../styles/ConstantStyles";

export const HeaderSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  min-width: 344px;
  max-width: calc(${SizeDev.MOB_END} - 16px);
  height: 542px;
  background-color: ${Colors.BgColorAkcent};
  border-radius: 12px;
  margin: 0 auto;
  padding: 8px;

  @media screen and (min-width: ${SizeDev.TAB}) {
    min-width: ${SizeDev.TAB};
    height: 421px;
    padding: 12px;
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    min-width: ${SizeDev.DESK_END};
    height: 677px;
    padding: 24px 96px 0 96px;
  }
`;

export const LogoStyle = styled.svg`
  display: block;
  width: 48px;
  height: 32px;
  margin-top: 8px;
  cursor: pointer;

 

  path {
    fill: ${Colors.ColorBlack};
    transition: ${Utils.transition};
  }

  &:hover {
    path {
      fill: ${Colors.ColorWhite};
    }
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    width: 72px;
    height: 50px;
  }
`;

export const LinkLogo = styled.a`
  width: 32px;
  height: 48px;

  @media screen and (min-width: ${SizeDev.DESK}) {
    width: 72px;
    height: 50px;
  }
`

export const NavLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${SizeDev.DESK}) {
    gap: 16px;
  }
`;

export const NavLinkItem = styled.li`
  width: 48px;
  height: 48px;
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? Colors.BgBtMenuOpen : Colors.BgBtMenu};

  path {
    fill: ${({ isMenuOpen }) =>
      isMenuOpen ? Colors.ColorWhite : Colors.ColorBlack};
  }

  transition: ${Utils.transition};

  &:hover {
    background-color: ${({ isMenuOpen }) =>
      isMenuOpen ? Colors.BgBtMenuOpenHover : Colors.BgBtMenuHover};

    path {
      fill: ${Colors.ColorWhite};
    }
  }

  @media screen and (min-width: ${SizeDev.TAB}) {
    background-color: ${Colors.BgBtMenu};

    path {
      fill: ${Colors.ColorBlack};
    }
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    gap: 16px;
    width: 80px;
    height: 80px;
  }
`;

export const NavLinkItemMenu = styled.li`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: "Messina Sans Mono Regular";
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  z-index: 50;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? Colors.BgBtMenuOpen : Colors.BgBtMenu};

  @media screen and (min-width: ${SizeDev.TAB}) {
    border-top-left-radius: ${({ isMenuOpen }) =>
      isMenuOpen ? 0 : 10};
    border-bottom-left-radius: ${({ isMenuOpen }) =>
      isMenuOpen ? 0 : 10};
    background-color: ${Colors.BgBtMenu};
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    width: 80px;
    height: 80px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
  }
`;
