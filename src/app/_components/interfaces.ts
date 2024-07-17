import type { StaticImageData } from "next/image";
import type { Question } from "../_libs/models";

export interface HomeSectionProps {
  direction?: "right" | "left"
  isStrangerThingsSection?: boolean
  imageSrc?: string | StaticImageData
  videoSrc?: string
  imageAlt?: string
  videoClassName?: string
  imageClassName?: string
  contentWidth?: string
  heading?: string
  subheading?: string
}

export interface CollapsibleQuestionProps extends Question {
  open: boolean
}