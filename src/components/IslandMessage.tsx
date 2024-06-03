import { CancelIcon, CheckIcon } from "./icons/Icons";

interface IslandMessageProps {
  islandMessageState: boolean;
  message: string;
}

export const IslandMessage = ({
  islandMessageState,
  message,
}: IslandMessageProps) => {
  return (
    <div
      className="island_message"
      aria-hidden={islandMessageState}
      style={{
        color: `${
          message === "add" ? "hsl(120, 100%, 50%)" : "hsl(0, 100%, 50%)"
        }`,
      }}
    >
      {message === "add" ? <CheckIcon /> : <CancelIcon />}
      <span
        style={{
          backgroundColor: `${
            message === "add" ? "hsl(120, 100%, 10%)" : "hsl(0, 100%, 10%)"
          }`,
        }}
      >
        {message === "add" ? "Added new task" : "Deleted all task"}
      </span>
    </div>
  );
};
