import { CancelButton } from "./CancelButton";

interface DeleteSectionProps {
  deleteAllTasks: () => void;
  deleteSectionAriaHidden: boolean;
  setIslandStart: () => void;
  setSuccessMessage: (customMessage: string) => void;
}

export const DeleteSection = ({
  deleteSectionAriaHidden,
  deleteAllTasks,
  setIslandStart,
  setSuccessMessage,
}: DeleteSectionProps) => {
  return (
    <div className="delete_section" aria-hidden={deleteSectionAriaHidden}>
      <h2>
        <svg
          width="20px"
          height="20px"
          strokeWidth="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
        >
          <path
            d="M12 7L12 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 17.01L12.01 16.9989"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        This action cannot be undone
      </h2>
      <p>
        Are you sure you want to delete all your tasks even the ones that are
        not done yet?
      </p>
      <div className="delete_section__actions">
        <CancelButton setIslandStart={setIslandStart} />
        <button
          className="confirm_btn"
          onClick={() => {
            deleteAllTasks();

            setSuccessMessage("delete");

            setTimeout(() => {
              setIslandStart();
            }, 1500);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
