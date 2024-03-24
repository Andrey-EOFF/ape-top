import About from "../About/About.jsx";
// import { View, StyleSheet } from "react-native";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";

import "./App.styled.jsx";
import { Container } from "./App.styled.jsx";
import RunningLine from "../RunningLine/RunningLine.jsx";
import MindMap from "../MindMap/MindMap.jsx";
import Faq from "../Faq/Faq.jsx";
import Arts from "../Arts/Arts.jsx";

function App() {
  return (
    <>
      <Header />

      <Container>
        <Hero />
      </Container>
      <Container>
        <About />
      </Container>
      <RunningLine />
      <Container>
        <MindMap />
        <Faq />
        <Arts />
      </Container>
    </>
  );
}

export default App;
