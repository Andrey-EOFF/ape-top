import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Components/styles/index.styled";
import reportWebVitals from "./reportWebVitals";
import App from "./Components/App/App";
import Reset from "./Components/styles/Reset.styled";

import "./Components/styles/fonts.css";
import { AppProvider } from "./Components/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Reset />
    <GlobalStyle />
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </>
);

reportWebVitals();
