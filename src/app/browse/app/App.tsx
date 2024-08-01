import HeroImage from "./components/hero/HeroImage";
import Rank1 from "./components/icons/numbers/Rank1";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import Image from "next/image";
import Rank2 from "./components/icons/numbers/Rank2";
import Rank3 from "./components/icons/numbers/Rank3";
import Rank4 from "./components/icons/numbers/Rank4";
import Rank5 from "./components/icons/numbers/Rank5";
import Rank6 from "./components/icons/numbers/Rank6";
import Rank7 from "./components/icons/numbers/Rank7";
import Rank8 from "./components/icons/numbers/Rank8";
import Rank9 from "./components/icons/numbers/Rank9";
import Rank10 from "./components/icons/numbers/Rank10";

const App = () => {
  return (
    <main className="w-full h-[2000px] bg-choose-profile-background overflow-x-hidden">
      <div className="absolute w-full bg-[url('/images/app-home-1.webp')] bg-no-repeat bg-cover z-1">
        <HeroImage />
        <div className="relative z-3 mt-32 overflow-x-hidden">
          <p className="text-4xl text-white font-NetflixSansSemiBold mb-4 pl-[60px]">Top 10 Movies in Dominican Republic Today</p>
          <div className="inline-block whitespace-nowrap pl-[60px] w-[98%] overflow-x-visible [&>a_svg]:w-1/2 [&>a_svg]:inline-block bg-transparent bg-app-home-ranking-vignette-gradient">
            <HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank1 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank2 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank3 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard><HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank4 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard><HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank5 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard><HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank6 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard><HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank7 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard><HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank8 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard><HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank9 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard><HoverCard>
              <HoverCardTrigger className="inline-block w-1/6 h-[280px]">
                <Rank10 />
                <Image alt="rank-slide-one" src="/images/dont-breathe.webp" width={0} height={0} sizes="100vh" className="w-1/2 h-full inline-block relative left-[-2px] rounded-sm"  />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1>Hello</h1>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
