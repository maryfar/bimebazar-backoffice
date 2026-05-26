interface SortIconProps {
  direction: "asc" | "desc";
  active?: boolean;
}

function SortIcon({ direction, active = false }: SortIconProps) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "text-gray-700" : "text-gray-300 cursor-pointer"}
    >
      {direction === "asc" ? (
        <path
          d="M1 5L5 1L9 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M1 1L5 5L9 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default SortIcon;
