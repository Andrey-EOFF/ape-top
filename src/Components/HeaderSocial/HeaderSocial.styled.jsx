import styled from "styled-components";
import { Colors, SizeDev, Utils } from "../styles/ConstantStyles";

export const NavLinkList = styled.ul`
  display: flex;
  margin-top: 8px;
  gap: 8px;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: ${SizeDev.DESK}) {
    margin-top: 16px;
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
