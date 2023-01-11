import React from "react";
import { ITask } from "../models/Todo.model";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="flex items-center justify-between w-64 px-4 py-2 bg-blue-500">
      <div className="content">
        <span className="pr-4 font-bold text-white">{task.taskName}</span>
        <span className="font-bold text-white ">{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;