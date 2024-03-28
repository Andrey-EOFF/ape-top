import React, { Suspense } from "react";
import Header from "../Header/Header.jsx";

import "./App.styled.jsx";
import { Container } from "./App.styled.jsx";
import RunningLine from "../RunningLine/RunningLine.jsx";

const About = React.lazy(() => import("../About/About.jsx"));
const MindMap = React.lazy(() => import("../MindMap/MindMap.jsx"));
const Faq = React.lazy(() => import("../Faq/Faq.jsx"));
const Arts = React.lazy(() => import("../Arts/Arts.jsx"));
const Footer = React.lazy(() => import("../Footer/Footer.jsx"));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <About />
        </Container>
        <RunningLine />
        <Container>
          <MindMap />
          <Faq />
          <Arts />
          <Footer />
        </Container>
      </Suspense>
    </>
  );
}

export default App;
