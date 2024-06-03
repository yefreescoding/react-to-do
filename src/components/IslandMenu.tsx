import { useEffect } from "react";
import { CommandIcon } from "./icons/Icons";

interface IslandMenuProps {
  quickMenuState: boolean;
  setIslandForm: () => void;
  setIslandDelete: () => void;
}

export const IslandMenu = ({
  quickMenuState,
  setIslandForm,
  setIslandDelete,
}: IslandMenuProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "k") {
        event.preventDefault();
        setIslandForm();
      }
      if (event.metaKey && event.key === "d") {
        event.preventDefault();
        setIslandDelete();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIslandForm, setIslandDelete]);

  return (
    <div className="quick_menu" aria-hidden={quickMenuState}>
      <button
        type="button"
        aria-label="create"
        onClick={() => {
          setIslandForm();
        }}
      >
        Add new task
        <div>
          <CommandIcon />
          <span>k</span>
        </div>
      </button>
      <button
        type="button"
        aria-label="delete"
        onClick={() => {
          setIslandDelete();
        }}
      >
        Delete all tasks
        <div>
          <CommandIcon />
          <span>D</span>
        </div>
      </button>
    </div>
  );
};
