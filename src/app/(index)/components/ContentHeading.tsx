import { FC } from "react";
import { ContentHeadingProps } from "../libs/interfaces";

const ContentHeading: FC<ContentHeadingProps> = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col gap-4 text-white basis-auto md:basis-1/2">
      <h2 className="font-NetflixSansBold text-3.5xl md:text-5xl">{heading}</h2>
      <p className="font-NetflixSansRegular text-lg md:text-2xl">{subheading}</p>
    </div>
  )
}

export default ContentHeading