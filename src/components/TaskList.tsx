import { Tasks } from "./Tasks";

import { Task } from "../types";

interface TaskList {
  tasks: Task[];
  deleteTask: (id: Task["id"]) => void;
  updateChecked: (id: Task["id"]) => void;
  removeTask: string | null;
}

export const TaskList = ({
  tasks,
  deleteTask,
  updateChecked,
  removeTask,
}: TaskList) => {
  const reversedTasks = [...tasks].reverse();
  return (
    <ul className="tasks_list">
      {reversedTasks.map((task) => (
        <Tasks
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          isChecked={task.checked}
          deleteTask={deleteTask}
          updateChecked={updateChecked}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};
