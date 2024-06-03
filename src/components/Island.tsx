import { useStore } from "../hooks/useStore";

import { Form } from "./Form";
import { DeleteSection } from "./DeleteSection";
import { IslandMessage } from "./IslandMessage";
import { IslandMenu } from "./IslandMenu";

import { Task } from "../types";

interface IslandProps {
  addTask: (task: Task) => void;
  deleteAllTasks: () => void;
}

export const Island = ({ addTask, deleteAllTasks }: IslandProps) => {
  const {
    setIslandQuick,
    setIslandDelete,
    setIslandForm,
    setIslandStart,
    showMessage,
    islandDataState,
    startState,
    quickMenuState,
    deleteSectionState,
    formState,
    messageState,
    message,
  } = useStore();

  return (
    <div className="island" data-state={islandDataState}>
      <button
        type="button"
        className="start_btn"
        onClick={() => {
          setIslandQuick();
        }}
        aria-hidden={startState}
      >
        Click to start
      </button>
      <IslandMenu
        quickMenuState={quickMenuState}
        setIslandForm={setIslandForm}
        setIslandDelete={setIslandDelete}
      />
      <IslandMessage islandMessageState={messageState} message={message} />
      <Form
        formState={formState}
        addTask={addTask}
        setIslandStart={setIslandStart}
        setSuccessMessage={showMessage}
      />
      <DeleteSection
        deleteSectionAriaHidden={deleteSectionState}
        setIslandStart={setIslandStart}
        deleteAllTasks={deleteAllTasks}
        setSuccessMessage={showMessage}
      />
    </div>
  );
};
