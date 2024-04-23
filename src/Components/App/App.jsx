import React, { Suspense } from "react";
import RunningLine from "../RunningLine/RunningLine.jsx";
import { LoadingWrapper } from "./App.styled.jsx";

const Header = React.lazy(() => import("../Header/Header.jsx"));
const About = React.lazy(() => import("../About/About.jsx"));
const MindMap = React.lazy(() => import("../MindMap/MindMap.jsx"));
const Faq = React.lazy(() => import("../Faq/Faq.jsx"));
const Arts = React.lazy(() => import("../Arts/Arts.jsx"));
const Mint = React.lazy(() => import("../Mint/Mint.jsx"));
const Footer = React.lazy(() => import("../Footer/Footer.jsx"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <LoadingWrapper>
          <div>Loading...</div>
        </LoadingWrapper>
      }>
        <About />
        <RunningLine />
        <MindMap />
        <Faq />
        <Arts />
        <Mint />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
