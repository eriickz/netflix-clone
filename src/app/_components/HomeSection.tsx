import { FC } from "react";
import type { HomeSectionProps } from "./interfaces";
import Image from "next/image";
import mobile from "@/assets/images/home/mobile.jpg";
import stranger_things_cover from "@/assets/images/home/stranger-things-cover.png";
import download_icon from "@/assets/images/home/download-icon.gif";
import SectionDivider from "@/app/_components/SectionDivider";

const HomeSection: FC<HomeSectionProps> = ({
  direction,
  heading,
  subheading,
  contentWidth = "32%",
  videoSrc,
  videoClassName,
  imageSrc,
  imageClassName,
  imageAlt,
  isStrangerThingsSection
}) => {
  return (
    <section className="pb-18">
      <SectionDivider />
      <div className="flex items-center justify-center">
        {direction === "left" && (
          <>
            <div className={`flex flex-col gap-4 text-white basis-[${contentWidth}]`}>
              <h2 className="font-NetflixSansBold text-5xl">{heading}</h2>
              <p className="font-NetflixSansRegular text-2xl">{subheading}</p>
            </div>
            <div className="flex justify-center items-center">
              <video autoPlay playsInline muted loop className={`absolute ${videoClassName}`}>
                <source src={videoSrc} type="video/mp4"/>
              </video>
              <Image alt={imageAlt!} src={imageSrc!} className="z-1" />
            </div>
          </>
        )}
        {direction === "right" && (
          <>
            <Image alt={imageAlt!} src={imageSrc!} className={imageClassName}/>
            <div className={`flex flex-col gap-4 text-white basis-[${contentWidth}]`}>
              <h2 className="font-NetflixSansBold text-5xl">{heading}</h2>
              <p className="font-NetflixSansRegular text-2xl">{subheading}</p>
            </div>
          </>
        )}
        {isStrangerThingsSection && (
          <>
            <div className="flex justify-center items-end">
              <Image alt="mobile" src={mobile}/>
              <div
                className="flex items-center border-2 border-home-input-border absolute z-1 px-3 py-2 rounded-xl bg-black mb-[38px] w-[375px]">
                <Image alt="Stranger Things Cover" src={stranger_things_cover} className="h-20 w-auto mr-4"/>
                <div className="flex flex-col justify-center">
                  <p className="font-NetflixSansSemiBold text-base text-white">Stranger Things</p>
                  <p
                    className="font-NetflixSansRegular text-sm text-home-download-text relative top-[-3px]">Downloading...</p>
                </div>
                <Image alt="Download animation" src={download_icon} className="w-auto h-[50px] ml-auto"/>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white basis-[32%]">
              <h2 className="font-NetflixSansBold text-5xl">Download your shows to watch offline</h2>
              <p className="font-NetflixSansRegular text-2xl">Save your favorites easily and always have something to
                watch.</p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default HomeSection