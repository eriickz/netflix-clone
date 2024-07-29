import Logo from "@/components/Logo";
import MagnifyingGlass from "@/app/browse/app/components/icons/MagnifyingGlass";
import Bell from "@/app/browse/app/components/icons/Bell";

const Header = () => {
  return (
    <header className="w-full relative pt-2 flex justify-between items-center px-[60px] z-1">
      <div className="flex items-center">
        <Logo className="w-24 h-14 mr-9"/>
        <ul className="flex items-center gap-x-6 text-app-header-nav-item-color font-NetflixSansRegular text-sm [&>li]:cursor-pointer hover:[&>li:not(:first-child)]:text-app-header-nav-item-hover-color">
          <li className="text-white font-NetflixSansSemiBold">
            Home
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
            Browse by languages
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
          <div className="bg-avatar bg-no-repeat bg-cover w-8 h-8"></div>
          <span
            className="w-0 h-0 border-t-5 border-l-5 border-r-5 border-t-white border-l-transparent border-r-transparent ml-2.5"></span>
        </div>
      </div>
    </header>
  )
}

export default Header