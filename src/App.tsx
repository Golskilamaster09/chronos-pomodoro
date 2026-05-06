// PascalCase
// App
// ExemploDeComponente

import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Defaultinput } from "./components/Defaultinput";
import { Cycles } from "./components/Cycles";
import { Defaultbutton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";

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
        <form action="" className="form">
          <div className="formRow">
            <Defaultinput
              labelText="task"
              type="text"
              id="meuInput"
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <Defaultbutton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
