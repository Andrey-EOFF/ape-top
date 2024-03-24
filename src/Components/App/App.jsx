import About from "../About/About.jsx";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";

import "./App.styled.jsx";
import { Container } from "./App.styled.jsx";

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
    </>
  );
}

export default App;
