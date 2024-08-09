import { FC } from "react";
import Image from "next/image";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import Rank1 from "../../icons/numbers/Rank1";
import Rank2 from "../../icons/numbers/Rank2";
import Rank3 from "../../icons/numbers/Rank3";
import Rank4 from "../../icons/numbers/Rank4";
import Rank5 from "../../icons/numbers/Rank5";
import Rank6 from "../../icons/numbers/Rank6";
import Rank7 from "../../icons/numbers/Rank7";
import Rank8 from "../../icons/numbers/Rank8";
import Rank9 from "../../icons/numbers/Rank9";
import Rank10 from "../../icons/numbers/Rank10";
import SliderItemContent from "./SliderItemContent";

const RankingItem: FC<{ position: number }> = ({ position }) => {
  return (
    <HoverCard openDelay={500}>
      <HoverCardTrigger className="inline-block w-1/2 h-[124px] sm:w-1/3 md:w-1/4 lg:w-1/5 1.5lg:w-1/6 sm:h-[196px] md:h-[194px] lg:h-[170px] 1.5lg:h-[184px] xxxl:h-[260px] px-1">
        {position === 1 && <Rank1 />}
        {position === 2 && <Rank2 />}
        {position === 3 && <Rank3 />}
        {position === 4 && <Rank4 />}
        {position === 5 && <Rank5 />}
        {position === 6 && <Rank6 />}
        {position === 7 && <Rank7 />}
        {position === 8 && <Rank8 />}
        {position === 9 && <Rank9 />}
        {position === 10 && <Rank10 />}
        <Image 
          alt="rank-slide-one" 
          src="/images/dont-breathe.webp" 
          width={0} 
          height={0} 
          sizes="100vh" 
          className="w-1/2 h-full inline-block relative left-[-1px] rounded-sm" 
        />
      </HoverCardTrigger>
      <SliderItemContent position={position} />
    </HoverCard>
  )
}

export default RankingItem
