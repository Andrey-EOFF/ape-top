import styled, { keyframes } from "styled-components";
import { Colors, SizeDev, Utils } from "../styles/ConstantStyles";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BurgerMenuSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  margin-left: auto;
  margin-right: auto;

  min-width: 344px;
  max-width: ${SizeDev.MOB_END};
  height: 100vh;
  padding: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${Colors.BgColorMain};

  animation: ${slideIn} 0.5s ease forwards;

  @media screen and (min-width: ${SizeDev.TAB}) {
    display: flex;
    align-items: flex-end;
    background-color: unset;
    display: block;
  }
`;

export const BgBlock = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  cursor: pointer;

  @media screen and (min-width: ${SizeDev.TAB}) {
    position: absolute;

    width: 245px;
    height: 48px;
    margin: 0;

    top: 12px;
    right: -84px;
    display: flex;
    flex-direction: row;
    align-content: space-around;
    gap: 0px;

    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: ${Colors.BgHeroBtn};

    animation: ${slideIn} 0.5s ease forwards;

    @media screen and (min-width: ${SizeDev.DESK}) {
      width: 460px;
      height: 80px;

      right: -304px;
      top: 24px;
    }
  }
`;

export const NavItem = styled.li`
  gap: 16px;

  @media screen and (min-width: ${SizeDev.TAB}) {
    width: 100px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0;
  }
`;

export const Span = styled.span`
  color: ${Colors.ColorWhite};
  font-family: "Messina Sans Mono Regular";
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  transition: border-bottom 0.3s ease, color ${Utils.transition};
  outline: none;

  &:hover {
    border-bottom: 2px solid
      ${(isMenuOpen) => (isMenuOpen ? Colors.Akcent : Colors.ColorWhite)};
    padding-bottom: 2px;
    color: ${({ isMenuOpen }) =>
      isMenuOpen ? Colors.ColorAkcent : Colors.ColorWhite};
  }

  &:focus {
    outline: 2px solid ${Colors.Akcent};
    text-shadow: 0 0 5px ${Colors.ColorAkcent};
  }

  @media screen and (min-width: ${SizeDev.TAB}) {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.17;
    color: ${Colors.ColorBlack};

    &:hover {
      color: ${Colors.ColorWhite};
    }
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.18;
    color: ${Colors.ColorBlack};
  }
`;
