import { FC } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import Image from "next/image";
import Play from "../icons/Play";
import PlusBold from "../icons/PlusBold";
import ThumbsUp from "../icons/ThumbsUp";
import CaretDownBold from "../icons/CaretDownBold";
import Rank1 from "../icons/numbers/Rank1";
import Rank2 from "../icons/numbers/Rank2";
import Rank3 from "../icons/numbers/Rank3";
import Rank4 from "../icons/numbers/Rank4";
import Rank5 from "../icons/numbers/Rank5";
import Rank6 from "../icons/numbers/Rank6";
import Rank7 from "../icons/numbers/Rank7";
import Rank8 from "../icons/numbers/Rank8";
import Rank9 from "../icons/numbers/Rank9";
import Rank10 from "../icons/numbers/Rank10";

const SliderItem: FC<{ index: number }> = ({ index }) => {
  return (
    <HoverCard openDelay={500}>
      <HoverCardTrigger className="inline-block w-1/6 h-[280px] px-1">
        {index === 1 && <Rank1 />}
        {index === 2 && <Rank2 />}
        {index === 3 && <Rank3 />}
        {index === 4 && <Rank4 />}
        {index === 5 && <Rank5 />}
        {index === 6 && <Rank6 />}
        {index === 7 && <Rank7 />}
        {index === 8 && <Rank8 />}
        {index === 9 && <Rank9 />}
        {index === 10 && <Rank10 />}
        <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
      </HoverCardTrigger>
      <HoverCardContent side="top" collisionPadding={100} className={`absolute rounded-md border-none w-[580px]  mt-[-100px] p-0 shadow-app-home-slide-hover-card bg-app-home-slide-hover-card-bg z-[6] ${index === 10 || index === 6 ? "ml-[-388px]" : "ml-[-205px]"}`}>
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
    </HoverCard>
  )
}

export default SliderItem
