import styled from "styled-components";
import { Colors, SizeDev } from "../styles/ConstantStyles";

export const BurgerMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  margin-left: auto;
  margin-right: auto;

  min-width: 344px;
  max-width: ${SizeDev.MOB_END};
  height: 100%;
  padding: 62px 16px 24px 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background-color: ${Colors.BgColorMain};

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    background-color: unset;
  }
`;

export const BurgNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-content: space-around;
    padding-top: 8px;
    gap: 0px;
    border-radius: 12px;
  }
`;

export const NavItem = styled.li`
  gap: 16px;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0;

    background-color: #1e1e1e1a;
  }
`;

export const Span = styled.span`
  color: ${Colors.ColorWhite};
`;

export const LogoStyle = styled.svg`
  display: block;
  width: 48px;
  height: 32px;

  margin-top: 8px;
  cursor: pointer;

  path {
    fill: ${Colors.ColorWhite};
  }

  &:hover {
    path {
      fill: ${Colors.ColorAkcent};
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SpanBtn = styled.span`
  color: ${Colors.ColorWhite};
`;

export const BtnBrMenu = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
