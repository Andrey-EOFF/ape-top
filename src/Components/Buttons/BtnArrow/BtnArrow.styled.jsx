import styled from "styled-components";
import { Colors, Utils } from "../../styles/ConstantStyles";


export const PrevNextButtons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 150px;
  margin-top: 24px;

  margin-left: auto;
  margin-right: auto;

  button {
    border: none;
    background-color: transparent;
    color: ${Colors.ColorWhite};
    font-family: "Biro Script Plus Bold US";
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    transition: ${Utils.transition};
    cursor: pointer;

    &:hover {
      color: ${Colors.ColorAkcent};
      transform: scale(1.15);
    }

    &:focus {
      text-shadow: 0 0 5px ${Colors.ColorAkcent};
    }

    &:disabled {
      color: ${Colors.BtnNotActiveColor};
      pointer-events: none;
    }
  }
`;