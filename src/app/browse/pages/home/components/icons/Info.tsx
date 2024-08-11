import { FC } from "react";

const Info: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm13-2v8h-2v-8h2zm-1-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Info
