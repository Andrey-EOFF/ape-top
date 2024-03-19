import styled from "styled-components";
import { SizeDev, Colors } from "../styles/ConstantStyles";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  min-width: 344px;
  max-width: calc(${SizeDev.MOB_END} - 16px);
  height: 542px;
  background-color: ${Colors.BgColorAkcent};
  border-radius: 12px;
  margin: 0 auto;
  padding: 8px;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 12px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
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
  }

  &:hover {
    path {
      fill: ${Colors.ColorWhite};
    }
  }

  @media screen and (min-width: 1280px) {
    width: 72px;
    height: 50px;
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

export const NavLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const NavLinkItem = styled.li`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  z-index: 50;

  background-color: ${({ isOpen }) =>
    isOpen ? Colors.BgBtMenu : Colors.BgBtMenuOpen};

  path {
    fill: ${({ isOpen }) => (isOpen ? Colors.ColorBlack : Colors.ColorWhite)};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;
