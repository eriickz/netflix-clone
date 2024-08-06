import HeroImage from "./components/hero/HeroImage";
import Slider from "./components/slider/Slider";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main className="w-full bg-choose-profile-background">
      <div className="absolute h-5/6 top-0 right-0 left-0 bottom-0 w-full bg-[url('/images/app-home-1.webp')] bg-no-repeat bg-cover z-1 bg-[50%]">
        <div className="absolute w-[50%] h-full bg-app-home-hero-vignette-gradient z-2"></div>
      </div>
      <Header/>
      <HeroImage />
      <div className="relative z-3 mt-32">
        <p className="text-4xl text-white font-NetflixSansSemiBold mb-4 pl-[60px]">Top 10 Movies in Dominican Republic Today</p>
        <Slider /> 
      </div>
      <Footer />
    </main>
  )
}

export default App
