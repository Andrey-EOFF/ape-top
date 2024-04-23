import styled from "styled-components";
import { Colors, SizeDev } from "../styles/ConstantStyles";

export const StyledRunningLine = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 52px;
  white-space: nowrap;
  background-color: ${Colors.BgColorAkcent};
  color: ${Colors.ColorWhite};

  div {
    text-align: center;
    font-family: "Right Grotesk Compact";
    font-size: 36px;
    font-weight: 900;
    line-height: 1;
  }

  p {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
  }

  svg {
    width: 36px;
    height: 36px;
    margin-left: 24px;
    margin-right: 24px;
    fill: ${Colors.ColorWhite};
    vertical-align: middle;
  }

  span {
    height: 100%;
    vertical-align: middle;
  }

  @media screen and (min-width: ${SizeDev.DESK}) {
    height: 86px;

    div {
      font-size: 64px;
      font-weight: 900;
      line-height: 1;
    }

    svg {
      margin-left: 36px;
      margin-right: 36px;
    }
  }
`;
