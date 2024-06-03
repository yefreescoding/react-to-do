import { FormEvent, useState } from "react";
import { CancelButton } from "./CancelButton";

import { Task } from "../types";

interface FormProps {
  formState: boolean;
  addTask: (task: Task) => void;
  setIslandStart: () => void;
  setSuccessMessage: (customMessage: string) => void;
}

export const Form = ({
  addTask,
  formState,
  setIslandStart,
  setSuccessMessage,
}: FormProps) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTask({
      id: self.crypto.randomUUID(),
      name: task,
      description: description,
      checked: false,
    });

    setTask("");
    setDescription("");
    setSuccessMessage("add");
    setTimeout(() => {
      setIslandStart();
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Manually submit the form
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} aria-hidden={formState}>
      <section className="form__wrapper">
        <h2>Create a new task</h2>
        <p>
          Remember to add the most important thing for you to accomplished
          today. The tasks will be automatically deleted in 24h.
        </p>
        <input
          className="form__input"
          type="text"
          value={task}
          onInput={(e: React.FormEvent<HTMLInputElement>) => {
            setTask(e.currentTarget.value);
          }}
          required
          autoFocus
          maxLength={40}
          placeholder="Go to the store, Dental appointment..."
        />
        <textarea
          className="form__input"
          value={description}
          onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
            setDescription(e.currentTarget.value);
          }}
          onKeyDown={handleKeyDown}
          required
          autoFocus
          maxLength={80}
          placeholder="Buy the groceries for the week, Appointment it's at 9 am..."
        />
        <div className="form__actions">
          <CancelButton setIslandStart={setIslandStart} />
          <button
            type="submit"
            aria-label="Add a new task to the list of tasks"
          >
            Add task
          </button>
        </div>
      </section>
    </form>
  );
};
