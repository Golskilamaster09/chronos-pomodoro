// PascalCase
// App
// ExemploDeComponente
import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Heading>Olá mundo 1</Heading>
      <Heading>Olá mundo 2</Heading>
      <Heading>Olá mundo 3</Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        earum! Sequi quam earum quibusdam harum fuga nesciunt? Veniam enim porro
        eligendi voluptatum ipsa, velit totam quae excepturi quidem magni optio?
      </p>
    </>
  );
}

export default App;
