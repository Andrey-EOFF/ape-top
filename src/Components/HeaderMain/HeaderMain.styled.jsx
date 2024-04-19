import styled from "styled-components";
import { Colors, SizeDev, Utils } from "../styles/ConstantStyles";

export const HeaderMainSection = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width: ${SizeDev.DESK}) {
    height: 80px;
  }
`;

export const LogoStyle = styled.svg`
  display: block;
  width: 48px;
  height: 32px;
  margin-top: 8px;
  cursor: pointer;

  path {
    fill: ${({ isMenuOpen }) =>
      isMenuOpen ? Colors.ColorWhite : Colors.ColorBlack};
    transition: ${Utils.transition};
  }

  &:hover {
    path {
      fill: ${({ isMenuOpen }) =>
        isMenuOpen ? Colors.ColorAkcent : Colors.ColorWhite};
    }
  }

  &:focus {
    outline: 2px solid ${Colors.ColorAkcent};
    fill: ${({ isMenuOpen }) =>
      isMenuOpen ? Colors.ColorAkcent : Colors.ColorWhite};
  }

  @media screen and (min-width: ${SizeDev.TAB}) {
    path {
      fill: ${Colors.ColorBlack};
    }
    &:hover {
      path {
        fill: ${Colors.ColorWhite};
      }
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
`;
