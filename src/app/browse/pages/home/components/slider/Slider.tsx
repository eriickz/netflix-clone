"use client"

import SliderItem from "./SliderItem"
import CaretDownBold from "../icons/CaretDownBold" 
import { FC, useState, useEffect } from "react"
import SliderPagination from "./SliderPagination"
import { SliderProps } from "../../libs/interfaces"
import { InView } from "react-intersection-observer"

const Slider: FC<SliderProps> = ({ sliderType, data, genres, showVignette = false }) => {
  const [showLeftHandler, setShowLeftHandler] = useState(false)
  const [showRightHandler, setShowRightHandler] = useState(true)
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    setShowLeftHandler(translateX < 0) 
  }, [translateX])

  const onNextBtnClick = () => {
    setTranslateX(translateX + 100 * -1)
  }

  const onPrevBtnClick = () => {
    setTranslateX(translateX + 100)
  }

  return (
    <>
      <SliderPagination />
      <div className={`w-full relative px-3.9r 1.5lg:px-14.5 ${showVignette && "bg-app-home-ranking-vignette-gradient"} ${showLeftHandler ? "overflow-x-clip" : "overflow-x-hidden"}`}>
        {showLeftHandler && (
          <button 
            className="absolute hidden sm:flex justify-center items-center z-1 w-[3.8vw] 1.5lg:w-[60px] h-full left-0 bg-app-home-slide-handler-bg text-transparent rounded-tr hover:text-white hover:bg-app-home-slide-handler-hover-bg"
            onClick={onPrevBtnClick}
          >
            <CaretDownBold className="w-[50px] h-[50px] rotate-90 transition-all duration-75 ease-in" />
          </button>
        )}
        {showRightHandler && (
          <button 
            className="absolute hidden sm:flex justify-center items-center z-1 w-[3.6vw] 1.5lg:w-[60px] h-full right-0 bg-app-home-slide-handler-bg text-transparent rounded-tl hover:text-white hover:bg-app-home-slide-handler-hover-bg"
            onClick={onNextBtnClick}
          >
            <CaretDownBold className="w-[50px] h-[50px] rotate-[-90deg] transition-all duration-75 ease-in" />
          </button>
        )}
        <div 
          className="inline-block relative whitespace-nowrap overflow-x-visible touch-pan-y [&>a_svg]:w-1/2 [&>a_svg]:inline-block transition-slider duration-0.54 slider-ease delay-0 overflow-y-visible"
          style={translateX !== 0 ? { transform: `translateX(${translateX + "%"})` } : undefined}
        >
          {data?.map((item, index) => (
            <>
              {index !== 9
                ? <SliderItem position={index + 1} type={sliderType} content={item} genres={genres} />
                : (
                  <InView 
                    as="div" 
                    onChange={(inView => setShowRightHandler(inView === false))} 
                    className="inline-block w-full h-full [&>a_svg]:w-1/2 [&>a_svg]:inline-block"
                    threshold={1}
                  >
                   <SliderItem position={index + 1} type={sliderType} content={item} genres={genres} /> 
                  </InView>
                )
              }
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Slider
