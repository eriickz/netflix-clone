import Header from "../header/Header"
import Top10 from "../icons/Top10";
import Play from "../icons/Play";
import Info from "../icons/Info";
import Refresh from "../icons/Refresh";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <div className="absolute w-[50%] h-full bg-app-home-hero-vignette-gradient z-2"></div>
      <Header/>
      <div className="relative z-3 w-2/5 px-[60px] mt-[212px]">
        <Image alt="non negotiable" src="/images/non-negotiable.webp" width={800} height={800} className="relative z-30"/>
        <div className="text-white">
          <div className="flex items-center my-6">
            <Top10 className="w-[60px] h-[60px] mr-5"/>
            <p className="text-4.5xl font-NetflixSansSemiBold text-shadow-app-home-movie">#3 in Movies Today</p>
          </div>
          <p className="text-3xl font-NetflixSansRegular text-shadow-app-home-movie">Hostage negotiator Alan Bender is
            called to rescue the president from a kidnapping, only to find himself also mediating to save his wife and
            marriage.</p>
        </div>
      </div>
      <div className="relative z-3 pl-[60px] w-full flex justify-between items-center">
        <div className="flex items-center mt-8 gap-x-4">
          <button
            className="flex items-center gap-x-2 bg-white py-3 px-7 rounded font-NetflixSansSemiBold text-1.5xl hover:bg-app-home-default-btn-bg-hover">
            <Play className="w-8 h-8"/>
            Play
          </button>
          <button
            className="flex items-center gap-x-2 bg-app-home-secondary-btn-bg py-3 px-7 rounded font-NetflixSansSemiBold text-1.5xl text-white hover:bg-app-home-secondary-btn-bg-hover">
            <Info className="w-8 h-8"/>
            More Info
          </button>
        </div>
        <div className="flex items-center text-white">
          <button className="border rounded-full p-4 mr-7 hover:bg-app-home-refresh-btn-hover">
            <Refresh className="w-6 h-6"/>
          </button>
          <div className="flex items-center bg-app-home-maturity-ranking-bg pl-5 py-2 pr-[88px] border-l-[3px] border-l-app-home-maturity-ranking-border">
            <p className="text-2.5xl font-NetflixSansRegular">13+</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroImage
