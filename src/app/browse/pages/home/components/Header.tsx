"use client"

import Logo from "@/components/Logo";
import MagnifyingGlass from "./icons/MagnifyingGlass";
import Bell from "./icons/Bell";
import { useEffect, useState } from "react";
import { FC } from "react";

const Header: FC<{ avatar: string }> = ({ avatar }) => {
  const [isOnPageTop, setIsOnPageTop] = useState(true)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsOnPageTop(window.scrollY === 0)
    })
  }, [])

  return (
    <header className={`w-full fixed flex justify-between items-center px-3.9r z-[4] pt-1 1.5lg:px-14.5 min-h-[41px] md:pt-0 md:min-h-[70px] transition-backgroundColor duration-0.4 ease-in bg-app-header-gradient ${!isOnPageTop && "bg-app-home-header-scrolled-bg"}`}>
      <div className="flex items-center">
        <Logo className="h-full mr-[2.5vw] xs:w-[60px] md:w-[5.34vw] 1.5lg:max-w-[92px] 1.5lg:max-h-[25px] 1.5lg:mr-[38px]" />
        <ul className="flex items-center gap-x-[1.2rem] text-app-header-nav-item-color font-NetflixSansRegular text-xs md:text-sm [&>li:not(:first-child)]:hidden [&>li:not(:first-child)]:md:list-item [&>li]:cursor-pointer hover:[&>li:not(:first-child)]:text-app-header-nav-item-hover-color">
          <li className="text-white font-NetflixSansSemiBold">
            Home
            <span className="w-0 h-0 border-t-5 border-l-5 border-r-5 border-t-white border-l-transparent border-r-transparent ml-1 inline-block md:hidden"></span>
          </li>
          <li>
            TV Shows
          </li>
          <li>
            Movies
          </li>
          <li>
            News & Popular
          </li>
          <li>
            My List
          </li>
          <li>
            Browse by Languages
          </li>
        </ul>
      </div>
      <div className="flex items-center text-white gap-x-4">
        <button>
          <MagnifyingGlass/>
        </button>
        <button>
          <Bell/>
        </button>
        <div className="flex items-center cursor-pointer">
          <div className={`${avatar} bg-no-repeat bg-cover w-8 h-8 rounded-sm`}></div>
          <span className="w-0 h-0 border-t-5 border-l-5 border-r-5 border-t-white border-l-transparent border-r-transparent ml-2.5 hidden md:block"></span>
        </div>
      </div>
    </header>
  )
}

export default Header
