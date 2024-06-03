import { useState, useEffect, useRef } from "react";

// component imports
import { TasksSubMenu } from "./TasksSubMenu";

// Icon imports
import { TextIcon } from "./icons/Icons";

import { Task } from "../types";

interface TasksProps {
  name: string;
  description: string;
  id: string;
  isChecked: boolean;
  deleteTask: (id: Task["id"]) => void;
  updateChecked: (id: Task["id"]) => void;
  removeTask: string | null;
}

export const Tasks = ({
  name,
  description,
  id,
  isChecked,
  deleteTask,
  updateChecked,
  removeTask,
}: TasksProps) => {
  // var to handle the checked state
  const [checked, setChecked] = useState(isChecked);

  const handleChecked = () => {
    setChecked(!checked);
    updateChecked(id);
  };

  // var to handle the menu
  const taskMenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        taskMenuRef.current &&
        !taskMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <li
      data-checked={checked}
      className={id === removeTask ? "tasks task-exit" : "tasks task-enter"}
    >
      <div className="tasks__check_box ">
        <input
          type="checkbox"
          name={name}
          id={id}
          defaultChecked={checked}
          onChange={handleChecked}
        />
        <label htmlFor={id}></label>
      </div>
      <div className="tasks__info">
        <h3>{name}</h3>
        <div>
          <div className="task__summary-title">
            <TextIcon />
            <p>Summary</p>
          </div>
          <p className="task__summary-p">{description}</p>
        </div>
      </div>
      <button
        className="task__toggle_actions"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        •••
      </button>
      <TasksSubMenu
        id={id}
        state={isOpen}
        setState={setIsOpen}
        deleteTask={deleteTask}
        ref={taskMenuRef}
      />
    </li>
  );
};
