import { forwardRef } from "react";

import { CancelIcon, CopyIcon, EditIcon, TrashIcon } from "./icons/Icons";

import { Task } from "../types";

interface TasksSubMenuProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  deleteTask: (id: Task["id"]) => void;
}

export const TasksSubMenu = forwardRef<HTMLDivElement, TasksSubMenuProps>(
  ({ state, setState, deleteTask, id }, ref) => {
    return (
      <div ref={ref} className="task__sub_menu" aria-hidden={state}>
        <div className="task__sub_menu__wrapper">
          <button>
            Duplicate <CopyIcon />
          </button>
          <button>
            Modify <EditIcon />
          </button>
          <button
            onClick={() => {
              setState(true);
            }}
          >
            Cancel
            <CancelIcon />
          </button>
          <button
            aria-label="delete"
            id={id}
            onClick={() => {
              deleteTask(id);
            }}
          >
            Delete <TrashIcon />
          </button>
        </div>
      </div>
    );
  }
);

import React from "react";
