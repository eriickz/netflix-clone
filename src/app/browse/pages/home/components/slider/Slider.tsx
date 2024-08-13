"use client"

import SliderItem from "./SliderItem"
import CaretDownBold from "../icons/CaretDownBold" 
import { FC, useState } from "react"
import SliderPagination from "./SliderPagination"
import { SliderProps } from "../../libs/interfaces"

const Slider: FC<SliderProps> = ({ sliderType, showVignette = false, data }) => {
  const [showLeftHandler, setShowLeftHandler] = useState(false)

  const onSliderChange = (isLeftBtn: boolean = false) => {
    if (isLeftBtn) {
      setShowLeftHandler(false)
      return
    }

    setShowLeftHandler(true)
  }

  return (
    <div className={`w-full px-3.9r 1.5lg:px-14.5 ${showVignette && "bg-app-home-ranking-vignette-gradient"} ${showLeftHandler ? "overflow-x-clip" : "overflow-x-hidden"}`}>
      {showLeftHandler && (
        <button 
          className="absolute flex justify-center items-center z-1 w-[3.8vw] 1.5lg:w-[60px] h-[-webkit-fill-available] h-[-moz-fill-available] left-0 bg-app-home-slide-handler-bg text-transparent rounded-tr hover:text-white hover:bg-app-home-slide-handler-hover-bg"
          onClick={() => onSliderChange(true)}
        >
          <CaretDownBold className="w-[50px] h-[50px] rotate-90 transition-all duration-75 ease-in" />
        </button>
      )}
      <button 
        className="absolute flex justify-center items-center z-1 w-[3.6vw] 1.5lg:w-[60px] h-[-webkit-fill-available] h-[-moz-fill-available] right-0 bg-app-home-slide-handler-bg text-transparent rounded-tl hover:text-white hover:bg-app-home-slide-handler-hover-bg"
        onClick={() => onSliderChange(false)}
      >
        <CaretDownBold className="w-[50px] h-[50px] rotate-[-90deg] transition-all duration-75 ease-in" />
      </button>
      <SliderPagination />
      <div className={`inline-block whitespace-nowrap overflow-x-visible touch-pan-y [&>a_svg]:w-1/2 [&>a_svg]:inline-block transition-slider duration-0.54 slider-ease delay-0 ${showLeftHandler ? "translate-x-[-66.5%]" : ""}`}>
        {data?.map((item, index) => (
          <SliderItem position={index + 1} type={sliderType} content={item} />
        ))}
      </div>
    </div>
  )
}

export default Slider
