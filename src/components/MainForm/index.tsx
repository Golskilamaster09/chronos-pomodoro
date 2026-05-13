import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { Defaultinput } from "../Defaultinput";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

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
        <p>Proximo intervalo é de 25min</p>
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
