import { FC } from "react";
import type { HomeSectionProps } from "../libs/interfaces";
import Image from "next/image";
import mobile from "@/assets/images/home/mobile.jpg";
import stranger_things_cover from "@/assets/images/home/stranger-things-cover.png";
import download_icon from "@/assets/images/home/download-icon.gif";
import SectionDivider from "./SectionDivider";
import ContentHeading from "./ContentHeading";

const HomeContent: FC<HomeSectionProps> = ({
  direction,
  heading,
  subheading,
  videoSrc,
  videoClassName,
  imageSrc,
  imageClassName,
  imageAlt,
  isStrangerThingsSection
}) => {
  return (
    <section className="pb-18 w-full">
      <SectionDivider />
      <div className="flex items-center px-8 justify-center mx-auto text-center flex-wrap md:text-start md:flex-nowrap md:w-home-content-md xl:w-home-content-xl lg:w-home-content-lg">
        {direction === "left" && (
          <>
            <ContentHeading heading={heading} subheading={subheading} />
            <div className="flex justify-center items-center basis-auto md:basis-1/2">
              <video autoPlay playsInline muted loop className={`absolute ${videoClassName}`}>
                <source src={videoSrc} type="video/mp4"/>
              </video>
              <Image alt={imageAlt!} src={imageSrc!} className="z-1" />
            </div>
          </>
        )}
        {direction === "right" && (
          <>
            <Image alt={imageAlt!} src={imageSrc!} className={imageClassName} />
            <ContentHeading heading={heading} subheading={subheading} />
          </>
        )}
        {isStrangerThingsSection && (
          <>
            <div className="flex justify-center items-end basis-auto order-last md:basis-1/2 md:order-first">
              <Image alt="mobile" src={mobile}/>
              <div
                className="flex items-center border-2 border-home-input-border absolute z-1 px-3 py-2 rounded-xl bg-black w-[80%] sm:mb-[38px] md:w-[32%] lg:w-[24%] lg:mb-[2%] xl:w-[20%] xxxl:w-[16%]">
                <Image alt="Stranger Things Cover" src={stranger_things_cover} className="h-20 w-auto mr-4"/>
                <div className="flex flex-col justify-center">
                  <p className="font-NetflixSansSemiBold text-base text-white">Stranger Things</p>
                  <p
                    className="font-NetflixSansRegular text-sm text-home-download-text relative top-[-3px]">Downloading...</p>
                </div>
                <Image alt="Download animation" src={download_icon} className="w-auto h-[50px] ml-auto" unoptimized />
              </div>
            </div>
            <ContentHeading
              heading="Download your shows to watch offline"
              subheading="Save your favorites easily and always have something to watch."
            />
          </>
        )}
      </div>
    </section>
  )
}

export default HomeContent