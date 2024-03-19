import React from "react";
import ReactDOM from "react-dom/client";
import { Container, GlobalStyle } from "./Components/styles/index.styled";
import reportWebVitals from "./reportWebVitals";
import App from "./Components/App/App";
import Reset from "./Components/styles/Reset.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Reset />
    <GlobalStyle />
    <React.StrictMode>
      <Container>
        <App />
      </Container>
    </React.StrictMode>
  </>
);

reportWebVitals();
