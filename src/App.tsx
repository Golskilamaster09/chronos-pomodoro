// PascalCase
// App
// ExemploDeComponente

import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Footer } from "./components/Footer";
import { MainForm } from "./components/MainForm";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
