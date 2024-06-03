interface CancelButtonProps {
  setIslandStart: () => void;
}

export const CancelButton = ({ setIslandStart }: CancelButtonProps) => {
  return (
    <button
      type="button"
      className="cancel_btn"
      aria-label="Cancel the operation"
      onClick={() => {
        setIslandStart();
      }}
    >
      Cancel
    </button>
  );
};
