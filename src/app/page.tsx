import HomePromo from "@/assets/images/home/promo.jpg"
import Image from "next/image";
import Logo from "@/components/Logo"
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ChevronRight from "@/components/icons/ChevronRight";
import tv from "@/assets/images/home/tv.png"
import mobile from "@/assets/images/home/mobile.jpg"
import stranger_things_cover from "@/assets/images/home/stranger-things-cover.png"
import download_icon from "@/assets/images/home/download-icon.gif"
import device_pile from "@/assets/images/home/device-pile.png"
import kids from "@/assets/images/home/kids.png"
import Plus from "@/components/icons/Plus";
import LangSelector from "@/components/ui/LangSelector";

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
              <Logo/>
            </div>
            <div className="flex gap-6 items-center h-8 ml-auto">
              <LangSelector />
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
              <Label className="font-NetflixSansRegular text-home-input-label text-base absolute mt-4 ml-4">Email
                address</Label>
              <Input className="h-full bg-home-input border border-home-input-border rounded px-4 pt-6 pb-2"/>
            </div>
            <button
              className="flex items-center justify-between px-6 py-3 bg-primary rounded text-2xl font-NetflixSansSemiBold text-nowrap gap-3">
              Get Started
              <ChevronRight/>
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
        <section className="pb-18">
          <div className="h-2 bg-home-section-divider mb-18"></div>
          <div className="flex items-center justify-center h-full">
            <div className="flex justify-center">
              <Image alt="mobile" src={mobile} className="basis-[31%]"/>
              <div
                className="flex items-center border-2 border-home-input-border absolute z-1 px-3 py-2 rounded-xl bg-black mt-[350px] w-[375px]">
                <Image alt="Stranger Things Cover" src={stranger_things_cover} className="h-20 w-auto mr-4"/>
                <div className="flex flex-col justify-center">
                  <p className="font-NetflixSansSemiBold text-base text-white">Stranger Things</p>
                  <p
                    className="font-NetflixSansRegular text-sm text-home-download-text relative top-[-3px]">Downloading...</p>
                </div>
                <Image alt="Download animation" src={download_icon} className="w-auto h-[50px] ml-auto"/>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white basis-[32%]">
              <h2 className="font-NetflixSansBold text-5xl">Download your shows to watch offline</h2>
              <p className="font-NetflixSansRegular text-2xl">Save your favorites easily and always have something to
                watch.</p>
            </div>
          </div>
        </section>
        <section className="pb-18">
          <div className="h-2 bg-home-section-divider mb-18"></div>
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col gap-4 text-white basis-[30%]">
              <h2 className="font-NetflixSansBold text-5xl">Watch everywhere</h2>
              <p className="font-NetflixSansRegular text-2xl">Stream unlimited movies and TV shows on your phone,
                tablet, laptop, and TV.</p>
            </div>
            <div className="flex justify-center items-center">
              <video autoPlay playsInline muted loop className="absolute w-[400px] mt-[-154px]">
                <source src="/video/video-devices.m4v" type="video/mp4"/>
              </video>
              <Image alt="Device Pile" src={device_pile} className="relative z-1"/>
            </div>
          </div>
        </section>
        <section className="pb-18">
          <div className="h-2 bg-home-section-divider mb-18"></div>
          <div className="flex items-center justify-center h-full">
            <Image alt="Kids profile" src={kids}/>
            <div className="flex flex-col gap-4 text-white basis-[32%]">
              <h2 className="font-NetflixSansBold text-5xl">Create profiles for kids</h2>
              <p className="font-NetflixSansRegular text-2xl">Send kids on adventures with their favorite characters in
                a space made just for them—free with your membership.</p>
            </div>
          </div>
        </section>
        <section className="pb-18">
          <div className="h-2 bg-home-section-divider mb-18"></div>
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h2 className="font-NetflixSansBold text-5xl">Frequently Asked Questions</h2>
            <ul className="flex flex-col items-center justify-center w-3/5 mt-6 gap-y-2">
              <li className="w-full bg-home-question-btn">
                <button
                  className="flex justify-between items-center text-2xl font-NetflixSansRegular w-full p-6 hover:bg-home-question-btn-hover">
                  What is Netflix?
                  <Plus/>
                </button>
              </li>
              <li className="w-full bg-home-question-btn">
                <button
                  className="flex justify-between items-center text-2xl font-NetflixSansRegular w-full p-6 hover:bg-home-question-btn-hover">
                  How much does Netflix cost?
                  <Plus/>
                </button>
              </li>
              <li className="w-full bg-home-question-btn">
                <button
                  className="flex justify-between items-center text-2xl font-NetflixSansRegular w-full p-6 hover:bg-home-question-btn-hover">
                  Where I can watch?
                  <Plus/>
                </button>
              </li>
              <li className="w-full bg-home-question-btn">
                <button
                  className="flex justify-between items-center text-2xl font-NetflixSansRegular w-full p-6 hover:bg-home-question-btn-hover">
                  How do I cancel?
                  <Plus/>
                </button>
              </li>
              <li className="w-full bg-home-question-btn">
                <button
                  className="flex justify-between items-center text-2xl font-NetflixSansRegular w-full p-6 hover:bg-home-question-btn-hover">
                  What I can watch on Netflix?
                  <Plus/>
                </button>
              </li>
              <li className="w-full bg-home-question-btn">
                <button
                  className="flex justify-between items-center text-2xl font-NetflixSansRegular w-full p-6 hover:bg-home-question-btn-hover">
                  Is Netflix good for kids?
                  <Plus/>
                </button>
              </li>
            </ul>
            <p className="mt-11 text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="flex gap-2 mt-4 w-[580px]">
              <div className="w-full">
                <Label className="font-NetflixSansRegular text-home-input-label text-base absolute mt-4 ml-4">
                  Email address
                </Label>
                <Input className="h-full bg-home-input border border-home-input-border rounded px-4 pt-6 pb-2"/>
              </div>
              <button
                className="flex items-center justify-between px-6 py-3 bg-primary rounded text-2xl font-NetflixSansSemiBold text-nowrap gap-3">
                Get Started
                <ChevronRight/>
              </button>
            </form>
          </div>
        </section>
        <footer className="pb-18">
          <div className="h-2 bg-home-section-divider mb-18"></div>
          <div className="flex items-center justify-center h-full text-home-input-label">
            <div className="w-3/5 font-NetflixSansRegular text-sm">
              <p className="text-base mb-3">
                Questions? Call <a href="tel: 1 (408) 600-1718  (USA)" className="underline decoration-solid">1 (408)
                600-1718 (USA)</a>
              </p>
              <ul className="flex flex-col flex-wrap w-full mb-6 gap-y-4 max-h-36">
                <li className="underline decoration-solid">
                  <a href="https://help.netflix.com/support/412" target="_blank">
                    FAQ
                  </a>
                </li>
                <li className="underline decoration-solid">
                  <a>Investor Relations</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Privacy</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Speed Test</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Help Center</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Jobs</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Cookie Preferences</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Legal Notices</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Account</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Ways to Watch</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Corporate Information</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Only on Netflix</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Media Center</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Terms of Use</a>
                </li>
                <li className="underline decoration-solid">
                  <a>Contact Us</a>
                </li>
              </ul>
              <div className="w-fit h-8">
                <LangSelector/>
              </div>
              <p className="mt-4">Netflix Dominican Republic</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
