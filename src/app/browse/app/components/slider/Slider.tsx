"use client"

import SliderItem from "./SliderItem"
import CaretDownBold from "../icons/CaretDownBold" 
import { useState } from "react"

const Slider = () => {
  const [showLeftHandler, setShowLeftHandler] = useState(false)

  const onSliderChange = (isLeftBtn: boolean = false) => {
    if (isLeftBtn) {
      setShowLeftHandler(false)
      return
    }

    setShowLeftHandler(true)
  }

  return (
    <div className={`w-full bg-app-home-ranking-vignette-gradient px-[60px] ${showLeftHandler ? "overflow-x-clip" : "overflow-x-hidden"}`}>
      {showLeftHandler && (
        <button 
          className="absolute flex justify-center items-center z-1 w-[60px] h-[280px] left-0 bg-app-home-slide-handler-bg text-transparent rounded-t hover:text-white hover:bg-app-home-slide-handler-hover-bg"
          onClick={() => onSliderChange(true)}
        >
          <CaretDownBold className="w-[50px] h-[50px] rotate-90 transition-all duration-75 ease-in" />
        </button>
      )}
      <button 
        className="absolute flex justify-center items-center z-1 w-[60px] h-[280px] right-0 bg-app-home-slide-handler-bg text-transparent rounded-t hover:text-white hover:bg-app-home-slide-handler-hover-bg"
        onClick={() => onSliderChange(false)}
      >
        <CaretDownBold className="w-[50px] h-[50px] rotate-[-90deg] transition-all duration-75 ease-in" />
      </button>
      <div className={`inline-block whitespace-nowrap overflow-x-visible [&>a_svg]:w-1/2 [&>a_svg]:inline-block transition-slider duration-0.54 slider-ease delay-0 ${showLeftHandler ? "translate-x-[-66.5%]" : ""}`}>
        <SliderItem index={1} />
        <SliderItem index={2} />
        <SliderItem index={3} />
        <SliderItem index={4} />
        <SliderItem index={5} />
        <SliderItem index={6} />
        <SliderItem index={7} />
        <SliderItem index={8} />
        <SliderItem index={9} />
        <SliderItem index={10} />
      </div>
    </div>
  )
}

export default Slider
