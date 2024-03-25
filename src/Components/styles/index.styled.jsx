import styled, { createGlobalStyle } from "styled-components";
import { SizeDev, Colors } from "./ConstantStyles";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Right Grotesk Compact', sans-serif;
    margin: 0;
    padding: 0;
    background-color:${Colors.BgColorMain};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
`;

export const Container = styled.div`
  padding: 0 8px;
  padding-top: 54px;
  margin: 0 auto;
  width: 344px;

  /* Tablet */
  @media screen and (min-width: ${SizeDev.TAB}) {
    width: ${SizeDev.TAB};
  }

  /* Desktop */
  @media screen and (min-width: ${SizeDev.DESK}) {
    width: ${SizeDev.DESK_END};
    padding-top: 16px;
  }
`;
