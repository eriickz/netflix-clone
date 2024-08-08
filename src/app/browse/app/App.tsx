import HeroImage from "./components/hero/HeroImage";
import Slider from "./components/slider/Slider";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Image from "next/image";

const App = () => {
  return (
    <main className="w-full">
      <div className="h-[56.25vw] relative">
        <Image alt="App Top Background Image" src="/images/app-home-1.webp" width={0} height={0} sizes="100vw" fill objectFit="cover" className="z-1" />
        <div className="absolute bg-app-home-hero-vignette-gradient z-2 bottom-0 top-0 left-0 right-[26.09%]"></div>
      </div>
      <div className="absolute top-0 bg-choose-profile-background">
        <Header/>
        <HeroImage />
        <div className="flex flex-col relative z-2 mt-32">
          <div className="text-4xl text-white font-NetflixSansSemiBold">
            <p className="mb-4 pl-[60px]">Top 10 Movies in Dominican Republic Today</p>
            <Slider /> 
          </div>
          <div className="pt-[60px] text-4xl text-white font-NetflixSansSemiBold">
            <p className="mb-4 pl-[60px]">Top 10 Movies in Dominican Republic Today</p>
            <Slider /> 
          </div>
          <div className="pt-[60px] text-4xl text-white font-NetflixSansSemiBold">
            <p className="mb-4 pl-[60px]">Top 10 Movies in Dominican Republic Today</p>
            <Slider /> 
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default App
