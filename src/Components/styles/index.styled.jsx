import { createGlobalStyle } from "styled-components";
import { Colors } from "./ConstantStyles";

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

  body.disable-scroll {
    overflow: hidden;
  }
`;



// export const Container = styled.div`

//   margin: 0 auto;

// `;
