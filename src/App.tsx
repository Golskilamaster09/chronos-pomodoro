// PascalCase
// App
// ExemploDeComponente

import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}

export default App;
