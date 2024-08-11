import { FC } from "react";

const ErrorCircle: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zM16 8A8 8 0 110 8a8 8 0 0116 0zM4.47 5.53L6.94 8l-2.47 2.47 1.06 1.06L8 9.06l2.47 2.47 1.06-1.06L9.06 8l2.47-2.47-1.06-1.06L8 6.94 5.53 4.47 4.47 5.53z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default ErrorCircle