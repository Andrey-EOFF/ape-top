import styled from "styled-components";
import { Colors, SizeDev } from "../styles/ConstantStyles";

export const MenuButton = styled.button`
  position: relative;

  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background-color: ${Colors.ColorBlack};

  font-family: "Messina Sans Mono Regular";
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-transform: uppercase;

  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${Colors.ColorWhite};
    
  }

  color: ${({ isMenuOpen }) =>
    isMenuOpen ? Colors.ColorWhite : Colors.ColorBlack};

  @media screen and (min-width: ${SizeDev.TAB}) {
    color: ${Colors.ColorBlack};
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.19;
  }
`;
