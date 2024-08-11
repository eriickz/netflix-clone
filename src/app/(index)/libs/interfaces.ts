import type { StaticImageData } from "next/image";

export interface ContentHeadingProps {
  heading?: string,
  subheading?: string
}

export interface HomeSectionProps extends ContentHeadingProps {
  direction?: "right" | "left"
  isStrangerThingsSection?: boolean
  imageSrc?: string | StaticImageData
  videoSrc?: string
  imageAlt?: string
  videoClassName?: string
  imageClassName?: string
  contentWidth?: string
}

