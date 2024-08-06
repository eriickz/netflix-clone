import { HoverCardContent } from "@/components/ui/hover-card"
import Image from "next/image";
import Play from "../../icons/Play";
import PlusBold from "../../icons/PlusBold";
import ThumbsUp from "../../icons/ThumbsUp";
import CaretDownBold from "../../icons/CaretDownBold";
import { FC } from "react";

const SliderItemContent: FC<{ position: number }> = ({ position }) => {
  return (
    <HoverCardContent 
      side="top" 
      avoidCollisions 
      className={`absolute rounded-md border-none w-[580px] mt-[-100px] p-0 shadow-app-home-slide-hover-card bg-app-home-slide-hover-card-bg z-[6] ${position === 10 || position === 6 ? "ml-[-375px]" : "ml-[-205px]"}`}
    >
      <Image alt="rank-image" src="/images/modal-img.webp" width={0} height={0} sizes="100vh" className="w-full rounded-t-md" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-x-2">
            <button className="p-3 rounded-full border-2 bg-white">
              <Play />
            </button>
            <button className="p-3 rounded-full border-2 border-app-home-slide-hover-card-btn-border text-white bg-app-home-slide-hover-card-btn-bg">
              <PlusBold />
            </button>
            <button className="p-3 rounded-full border-2 border-app-home-slide-hover-card-btn-border text-white bg-app-home-slide-hover-card-btn-bg">
              <ThumbsUp />
            </button>
          </div>
          <button className="p-3 rounded-full border-2 border-app-home-slide-hover-card-btn-border text-white bg-app-home-slide-hover-card-btn-bg">
            <CaretDownBold />
          </button>
        </div>
        <div className="flex items-center gap-x-2 text-app-home-slide-hover-card-videometadata-content font-NetflixSansRegular mb-4">
          <p className="font-NetflixSansSemiBold text-app-home-slide-hover-card-videometadata-match-score">98% Match</p>
          <div className="border border-home-select px-[7px]">
            <p>16+</p>
          </div>
          <p>1h 38m</p>
          <div className="text-[11px] border border-home-select px-[6px] rounded-[3px]">
            <p>HD</p>
          </div>
        </div>
        <ul className="flex text-white font-NetflixSansRegular mb-2">
          <li className="text-shadow-app-home-slide-hover-card-tags inline-flex items-center flex-wrap">
            Violent 
            <div className="before:content-['\2022'] before:inline-block before:px-3 before:text-3xl before:text-app-home-slide-hover-card-tags-separator-bg before:align-sub"></div>
          </li>
          <li className="text-shadow-app-home-slide-hover-card-tags inline-flex items-center flex-wrap">
            Suspenseful 
            <div className="before:content-['\2022'] before:inline-block before:px-3 before:text-3xl before:text-app-home-slide-hover-card-tags-separator-bg before:align-sub"></div>
          </li>
          <li className="text-shadow-app-home-slide-hover-card-tags inline-flex items-center flex-wrap">
            Horror 
          </li>
        </ul>
      </div>
    </HoverCardContent>
  )
}

export default SliderItemContent
