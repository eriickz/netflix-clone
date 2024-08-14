import { FC } from "react"

const CaretDownBold: FC<{ className?: string }> = ({ className }) => {
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
        d="M12 15.586l7.293-7.293 1.414 1.414-8 8a1 1 0 01-1.414 0l-8-8 1.414-1.414L12 15.586z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default CaretDownBold
