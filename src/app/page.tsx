import HomePromo from "@/assets/images/home/promo.jpg"
import Image from "next/image";
import Logo from "@/components/Logo"
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ChevronRight from "./_components/icons/ChevronRight";
import tv from "@/assets/images/home/tv.png"
import device_pile from "@/assets/images/home/device-pile.png"
import kids from "@/assets/images/home/kids.png"
import LangSelector from "./_components/LangSelector";
import HomeSection from "./_components/HomeSection";
import SectionDivider from "./_components/SectionDivider";
import FAQ from "./_components/FAQ";

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
        <HomeSection
          direction="left"
          contentWidth="32%"
          heading="Enjoy on your TV"
          subheading="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          videoSrc="/video/videotv.m4v"
          videoClassName="mt-[-16px]"
          imageSrc={tv}
          imageAlt="TV"
        />
        <HomeSection isStrangerThingsSection />
        <HomeSection
          direction="left"
          contentWidth="30%"
          heading="Watch everywhere"
          subheading="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          videoSrc="/video/video-devices.m4v"
          videoClassName="mt-[-154px] w-[400px]"
          imageSrc={device_pile}
          imageAlt="Device pile"
        />
        <HomeSection
          direction="right"
          contentWidth="32%"
          heading="Create profiles for kids"
          subheading="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          imageSrc={kids}
          imageAlt="Kids"
        />
        <section className="pb-18">
          <SectionDivider />
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h2 className="font-NetflixSansBold text-5xl">Frequently Asked Questions</h2>
            <FAQ />
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
          <SectionDivider />
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
              <p className="mt-4">
                Created by <a target="_blank" href="https://erickrm.com" className="underline decoration-solid">eriickz</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
