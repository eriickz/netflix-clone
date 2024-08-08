import HeroContent from "./components/HeroContent";
import Slider from "./components/slider/Slider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

const App = () => {
  return (
    <main className="bg-choose-profile-background min-h-[1374px]">
      <div className="relative">
        <Header/>
        <Image alt="App Top Background Image" src="/images/app-home-1.webp" width={0} height={0} sizes="100vw" fill objectFit="cover" className="z-1" />
        <div className="absolute bg-app-home-hero-vignette-gradient z-2 bottom-0 top-0 left-0 right-[26.09%]"></div>
        <div className="flex flex-col relative z-2 pt-[10%]">
          <HeroContent />
          <div className="text-[1.4vw] text-white font-NetflixSansSemiBold pt-[7.2vw]">
            <p className="mb-4 pl-3.9r">Top 10 Movies in Dominican Republic Today</p>
            <Slider /> 
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default App
