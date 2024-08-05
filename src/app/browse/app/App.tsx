import HeroImage from "./components/hero/HeroImage";
import Slider from "./components/slider/Slider";

const App = () => {
  return (
    <main className="w-full h-[2000px] bg-choose-profile-background">
      <div className="absolute w-full bg-[url('/images/app-home-1.webp')] bg-no-repeat bg-cover z-1">
        <HeroImage />
        <div className="relative z-3 mt-32">
          <p className="text-4xl text-white font-NetflixSansSemiBold mb-4 pl-[60px]">Top 10 Movies in Dominican Republic Today</p>
          <Slider /> 
        </div>
      </div>
    </main>
  )
}

export default App
