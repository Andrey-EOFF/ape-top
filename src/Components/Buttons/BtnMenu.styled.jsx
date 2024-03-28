import styled from "styled-components";
import { Colors, SizeDev, Utils } from "../styles/ConstantStyles";

export const MenuButton = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: "Messina Sans Mono Regular";
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-transform: uppercase;
  text-decoration: none;
  appearance: none;
  border: none;
  cursor: pointer;
  transition: ${Utils.transition};

  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? Colors.BgBtMenuOpen : Colors.BgBtMenu};

  color: ${({ isMenuOpen }) =>
    isMenuOpen ? Colors.ColorWhite : Colors.ColorBlack};

  &:hover {
    color: ${({ isMenuOpen }) =>
      isMenuOpen ? Colors.ColorAkcent : Colors.ColorWhite};
  }

  @media screen and (min-width: ${SizeDev.TAB}) {
    color: ${Colors.ColorBlack};
    background-color: ${Colors.BgBtMenu};

    border-top-left-radius: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "12px")};
    border-bottom-left-radius: ${({ isMenuOpen }) =>
      isMenuOpen ? "0" : "12px"};

    &:hover {
      color: ${Colors.ColorWhite};
    }
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    width: 80px;
    height: 80px;

    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
  }
`;

export const Span = styled.span`
  transition: ${Utils.transition};

  &:hover {
    border-bottom: 2px solid
      ${(props) => (props.isMenuOpen ? Colors.Akcent : Colors.ColorWhite)};
    padding-bottom: 2px;
    color: ${({ isMenuOpen }) =>
      isMenuOpen ? Colors.Akcent : Colors.ColorWhite};
  }

  @media screen and (min-width: ${SizeDev.TAB}) {
    &:hover {
      color: ${Colors.ColorWhite};
    }
  }
`;
