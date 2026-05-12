import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { Defaultinput } from "../Defaultinput";

export function MainForm() {
  return (
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
        <Defaultbutton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
