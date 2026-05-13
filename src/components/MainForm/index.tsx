import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { Defaultinput } from "../Defaultinput";
import { useRef } from "react";

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("deu certo");
  }

  return (
    <form onSubmit={handleCreateNewTask} action="" className="form">
      <div className="formRow">
        <Defaultinput
          labelText="task"
          type="text"
          id="meuInput"
          placeholder="Digite algo"
          ref={taskNameInput}
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
