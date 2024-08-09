import Top10 from "./icons/Top10";
import Play from "./icons/Play";
import Info from "./icons/Info";
import Refresh from "./icons/Refresh";
import Image from "next/image";

const HeroContent = () => {
  return (
    <div className="w-full z-3 pl-3.9r flex flex-col justify-end">
      <div className="w-[36%]">
        <Image alt="non negotiable" src="/images/non-negotiable.webp" width={0} height={0} sizes="100vw" objectFit="cover" className="w-full z-3"/>
        <div className="text-white">
          <div className="flex items-center my-[1vw]"> 
            <Top10 className="w-auto h-[2.4vw] mr-3"/>
            <p className="text-1.5r font-NetflixSansSemiBold text-shadow-app-home-movie">#3 in Movies Today</p>
          </div>
          <p className="text-1.2r leading-[normal] font-NetflixSansRegular text-shadow-app-home-movie">Hostage negotiator Alan Bender is called to rescue the president from a kidnapping, only to find himself also mediating to save his wife and marriage.</p>
        </div>
      </div>
      <div className="z-3 w-full flex justify-between items-center">
        <div className="flex items-center mt-[2.7vw] gap-x-[1vw]">
          <button
            className="flex items-center gap-x-2 bg-white py-[0.7vw] px-[1.6vw] rounded font-NetflixSansSemiBold text-1.2r hover:bg-app-home-default-btn-bg-hover">
            <Play className="w-[1.8vw] h-[1.8vw]"/>
            Play
          </button>
          <button
            className="flex items-center gap-x-2 bg-app-home-secondary-btn-bg py-[0.7vw] px-[1.6vw] rounded font-NetflixSansSemiBold text-1.2r text-white hover:bg-app-home-secondary-btn-bg-hover">
            <Info className="w-[1.8vw] h-[1.8vw]"/>
            More Info
          </button>
        </div>
        <div className="flex items-center text-white">
          <button className="border rounded-full p-[0.5vw] mr-[1.1vw] hover:bg-app-home-refresh-btn-hover w-[2.4vw] h-[2.4vw]">
            <Refresh className="w-full h-full"/>
          </button>
          <div className="flex items-center bg-app-home-maturity-ranking-bg pl-[0.8vw] py-[0.5vw] pr-[3.5vw] border-l-[3px] border-l-app-home-maturity-ranking-border">
            <p className="text-[1.1vw] font-NetflixSansRegular">13+</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContent 