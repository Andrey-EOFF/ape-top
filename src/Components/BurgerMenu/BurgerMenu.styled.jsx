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
    display: block;
  }
`;

export const NavItem = styled.li`
  gap: 16px;
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
`;

export const Button = styled.button`
  position: relative;

  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background-color: #1e1e1e1a;

  /* font-family: ; */
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;

  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const SpanBtn = styled.span`
  color: ${Colors.ColorWhite};
`;
