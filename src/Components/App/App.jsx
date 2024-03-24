import About from "../About/About.jsx";
// import { View, StyleSheet } from "react-native";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";

import "./App.styled.jsx";
import { Container } from "./App.styled.jsx";
import RunningLine from "../RunningLine/RunningLine.jsx";

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
    </>
  );
}

export default App;
