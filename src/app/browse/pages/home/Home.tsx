"use client"

import HeroContent from "./components/HeroContent";
import Slider from "./components/slider/Slider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import useContentRetriever from "./hooks/useContentRetriever";
import { FC } from "react";
import { TMBD_IMG_BASE_URL } from "./libs/constants";

const Home: FC<{ avatar: string }> = ({ avatar }) => {
  const { movies, shows, heroContent, genres } = useContentRetriever()

  return (
    <main>
      <div className="relative">
        <Header avatar={avatar} />
        <Image alt="Home Top Background Image" src={`${TMBD_IMG_BASE_URL}/original/${heroContent?.backdrop}`} width={0} height={0} sizes="100vh" fill objectFit="cover" unoptimized />
        <div className="absolute bg-app-home-hero-vignette-gradient z-2 bottom-0 top-0 left-0 right-[26.09%]"></div>
        <div className="flex flex-col relative z-2 pt-[10%]">
          <HeroContent logo={heroContent?.logo} overview={heroContent?.overview} />
          <div className="text-[12px] md:text-[1.4vw] text-white font-NetflixSansSemiBold pt-[7.2vw]">
            <p className="mb-4 pl-3.9r 1.5lg:pl-14.5">Top 10 Movies in Dominican Republic Today</p>
            <Slider sliderType="ranking" showVignette data={movies?.topRated} genres={genres?.movies} /> 
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[60px] pt-[60px]">
        <div className="text-[12px] md:text-[1.4vw] text-white font-NetflixSansSemiBold">
          <p className="mb-4 pl-3.9r 1.5lg:pl-14.5">Your Next Watch</p>
          <Slider sliderType="category" data={movies?.nextWatch} genres={genres?.movies} /> 
        </div>
        <div className="text-[12px] md:text-[1.4vw] text-white font-NetflixSansSemiBold">
          <p className="mb-4 pl-3.9r 1.5lg:pl-14.5">Top 10 TV Shows in Dominican Republic Today</p>
          <Slider sliderType="ranking" data={shows?.topRated} genres={genres?.shows} /> 
        </div>
        <div className="text-[12px] md:text-[1.4vw] text-white font-NetflixSansSemiBold">
          <p className="mb-4 pl-3.9r 1.5lg:pl-14.5">Today's Top Picks For You</p>
          <Slider sliderType="category" data={shows?.nextWatch} genres={genres?.shows} /> 
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home
