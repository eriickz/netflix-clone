import HomePromo from "@/assets/images/home/promo.jpg"
import Image from "next/image";
import Logo from "@/components/Logo"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import Lang from "@/components/icons/Lang"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ChevronRight from "@/components/icons/ChevronRight";
import tv from "@/assets/images/home/tv.png"

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden h-[700px] bg-home-promo-pattern bg-home-overlay">
        <Image
          alt="Home Promo"
          src={HomePromo}
          fill
          quality={100}
          placeholder="blur"
          sizes="100vw"
          className="z-[-1] scale-125 translate-y-[-12.2%] object-cover"
        />
        <div className="w-[66.6%] mx-auto">
          <header className="flex items-center px-12 py-6">
            <div className="w-[148px]">
              <Logo />
            </div>
            <div className="flex gap-6 items-center h-8 ml-auto">
              <Select value="English" defaultValue="English">
                <SelectTrigger className="text-white justify-start border-home-select rounded p-2 gap-3 h-full font-NetflixSansSemiBold min-h-[10px]">
                  <Lang />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border-none font-normal min-h-[10px] min-w-[1px] rounded-lg p-0">
                  <SelectItem value="Spanish" className="font-NetflixSansRegular p-0 justify-center text-base rounded-none hover:bg-blue-600 hover:text-white">
                    Español
                  </SelectItem>
                  <SelectItem value="English" className="font-NetflixSansRegular p-0 justify-center text-base rounded-none hover:bg-blue-600 hover:text-white">
                    English
                  </SelectItem>
                </SelectContent>
              </Select>
              <Link
                href="/"
                className="flex items-center bg-primary text-white px-4 text-sm font-NetflixSansSemiBold w-full h-full rounded-md"
              >
                Sign In
              </Link>
            </div>
          </header>
        </div>
        <div className="w-full h-full flex justify-center items-center flex-col text-white mt-[-88px]">
          <h1 className="font-NetflixSansBold text-5xl mt-[114px]">Unlimited movies, TV shows, and more</h1>
          <p className="mt-4 text-2xl">Watch anywhere. Cancel anytime.</p>
          <p className="mt-6 text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
          <form className="flex gap-2 mt-4 w-[580px]">
            <div className="w-full">
              <Label className="font-NetflixSansRegular text-home-input-label text-base absolute mt-4 ml-4">Email address</Label>
              <Input className="h-full bg-home-input border border-home-input-border rounded px-4 pt-6 pb-2" />
            </div>
            <button className="flex items-center justify-between px-6 py-3 bg-primary rounded text-2xl font-NetflixSansSemiBold text-nowrap gap-3">
              Get Started
              <ChevronRight />
            </button>
          </form>
        </div>
      </section>
      <div className="bg-black">
        <section className="pb-18">
          <div className="h-2 bg-home-section-divider mb-18"></div>
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col gap-4 text-white basis-[32%]">
              <h2 className="font-NetflixSansBold text-5xl">Enjoy on your TV</h2>
              <p className="font-NetflixSansRegular text-2xl">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
                TV, Blu-ray players, and more.</p>
            </div>
            <div>
              <video autoPlay playsInline muted loop className="absolute mt-[96px] ml-[79px]">
                <source src="/video/videotv.m4v" type="video/mp4"/>
              </video>
              <Image alt="TV" src={tv} className="basis-[31%] relative z-1"/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
