import { FC } from "react";

const SectionDivider: FC<{ withMargin?: boolean }> = ({ withMargin = true }) => {
  return (
    <hr className={`h-2 bg-home-section-divider border-0 ${withMargin ? "mb-18" : ""}`} />
  )
}

export default SectionDivider