import { FC } from "react";

const Refresh: FC<{ className?: string }> = ({ className }) => {
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
        d="M20.663 7A9.997 9.997 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h2c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c4.175 0 7.85 2.132 10 5.365V2h2v6a1 1 0 01-1 1h-6V7h3.663z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Refresh