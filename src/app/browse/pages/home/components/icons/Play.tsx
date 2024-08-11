import { FC } from "react";

const Play: FC<{ className?: string }> = ({ className }) => {
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
        d="M5 2.691a1 1 0 011.482-.876l16.925 9.309a1 1 0 010 1.752L6.482 22.185A1 1 0 015 21.309V2.69z"
      ></path>
    </svg>
  )
}

export default Play
