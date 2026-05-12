import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //histórico, Mainform
  secondsRemaining: number; // Gerenciador do Timer: CountDown, Histórico, MainForm, Button
  formattedSecondsRamining: string; // Titulo, CountDown
  activeTask: TaskModel | null; //  CountDown, Histórico, MainForm, Button
  currentCycle: number; // 1 a 8, Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
