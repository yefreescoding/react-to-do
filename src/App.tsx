import { useState } from "react";
import "./App.css";
import { Island } from "./components/Island";
import { TaskList } from "./components/TaskList";

import { type Task } from "./types";
import { data } from "./mockData";

function App() {
  const [tasks, setTasks] = useState<Task[]>(data);
  const [removingTaskId, setRemovingTaskId] = useState<string | null>(null);

  const addTask = (task: Task) => {
    setTasks((prevState) => [...prevState, task]);
    console.log(tasks);
  };

  // Function para modificar el estado de checked
  const updateChecked = (id: Task["id"]) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setRemovingTaskId(id);
    setTimeout(() => {
      setTasks((prevState) => prevState.filter((task) => task.id !== id));
      setRemovingTaskId(null);
    }, 500); // Match the duration with CSS animation duration
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <main className="main">
      <Island addTask={addTask} deleteAllTasks={deleteAllTasks} />
      <h1>Today's tasks</h1>
      {tasks && (
        <TaskList
          updateChecked={updateChecked}
          deleteTask={deleteTask}
          tasks={tasks}
          removeTask={removingTaskId}
        />
      )}
    </main>
  );
}

export default App;
