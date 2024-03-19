import styled, { createGlobalStyle } from "styled-components";
import { SizeDev, Colors } from "./ConstantStyles";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color:${Colors.BgColorMain};
  }
`;

export const Container = styled.div`
  padding: 0 8px;
  padding-top: 54px;
  margin: 0 auto;
  width: 100%;

  /* Mobile */
  @media screen and (min-width: ${SizeDev.MOB_START}) and (max-width: ${SizeDev.MOB_END}) {
    width: 100%;
  }

  /* Tablet */
  @media screen and (min-width: ${SizeDev.TAB}) {
    width: ${SizeDev.TAB};
  }

  /* Desktop */
  @media screen and (min-width: ${SizeDev.DESK}) {
    width: ${SizeDev.DESK};
    padding-top: 16px;
  }
`;
