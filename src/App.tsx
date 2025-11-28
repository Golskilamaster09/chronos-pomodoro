// PascalCase
// App
// ExemploDeComponente

import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/container";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}

export default App;
