import { FC } from "react";

const Plus: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      aria-hidden={true}
      viewBox="0 0 36 36"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 17V3h2v14h14v2H19v14h-2V19H3v-2h14z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Plus