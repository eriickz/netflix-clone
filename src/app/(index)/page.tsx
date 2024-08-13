import HomePromo from "@/assets/images/home/promo.jpeg"
import Image from "next/image";
import Logo from "@/components/Logo"
import Link from "next/link";
import ChevronRight from "./components/icons/ChevronRight";
import tv from "@/assets/images/home/tv.png"
import device_pile from "@/assets/images/home/device-pile.png"
import kids from "@/assets/images/home/kids.png"
import LangSelector from "./components/LangSelector";
import HomeContent from "./components/HomeContent";
import SectionDivider from "./components/SectionDivider";
import FAQ from "./components/FAQ";
import EmailInput from "./components/EmailInput";

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
          unoptimized
        />
        <div className="w-full md:w-[66.6%] mx-auto">
          <header className="flex justify-between flex-wrap items-center px-12 py-6 gap-y-2">
            <div className="w-24 md:w-[148px]">
              <Logo/>
            </div>
            <div className="flex gap-2 md:gap-6 items-center h-8">
              <LangSelector />
              <Link
                href="/browse"
                className="flex items-center bg-primary text-white px-4 text-sm font-NetflixSansSemiBold w-full h-full rounded-md text-nowrap sm:text-wrap"
              >
                Sign In
              </Link>
            </div>
          </header>
        </div>
        <div className="w-full h-full flex justify-center items-center flex-col text-white mt-[-88px] px-8 text-center md:text-start">
          <h1 className="font-NetflixSansBold text-3.5xl md:text-5xl sm:mt-[114px]">Unlimited movies, TV shows, and more</h1>
          <p className="mt-4 text-lg md:text-2xl">Watch anywhere. Cancel anytime.</p>
          <p className="mt-6 text-lg md:text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
          <form className="flex gap-2 mt-4 w-full flex-wrap justify-center sm:w-[90%] sm:flex-nowrap sm:justify-start md:w-[580px]">
            <EmailInput />
            <Link href="/browse" className="flex items-center justify-between px-6 py-3 bg-primary rounded text-2xl font-NetflixSansSemiBold text-nowrap gap-3">
              Get Started
              <ChevronRight/>
            </Link>
          </form>
        </div>
      </section>
      <div className="bg-black">
        <HomeContent
          direction="left"
          heading="Enjoy on your TV"
          subheading="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          videoSrc="/video/videotv.m4v"
          videoClassName="w-[62%] mt-[-10px] sm:mt-[-16px] sm:w-[66%] md:w-[32%] md:mt-[-15px] lg:w-[28%] xl:w-[470px]"
          imageSrc={tv}
          imageAlt="TV"
        />
        <HomeContent isStrangerThingsSection />
        <HomeContent
          direction="left"
          heading="Watch everywhere"
          subheading="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          videoSrc="/video/video-devices.m4v"
          videoClassName="w-[400px] mt-[-154px] w-[55%] mt-[-23%] md:w-[27%] md:mt-[-11%] lg:mt-[-8%] lg:w-[24%] xl:mt-[-8%] xl:w-[19%] xxl:w-[15%] xxl:mt-[-6%] xxxl:w-[16%]"
          imageSrc={device_pile}
          imageAlt="Device pile"
        />
        <HomeContent
          direction="right"
          heading="Create profiles for kids"
          subheading="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          imageSrc={kids}
          imageAlt="Kids"
          imageClassName="order-last md:order-first"
        />
        <section className="pb-18">
          <SectionDivider />
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h2 className="font-NetflixSansBold text-center text-3.5xl md:text-5xl">Frequently Asked Questions</h2>
            <FAQ />
            <div className="px-8 sm:w-[90%] md:w-auto">
              <p className="mt-11 font-NetflixSansRegular text-center text-lg md:text-xl">Ready to watch? Enter your email to create or
                restart your membership.</p>
              <form className="flex justify-center w-full flex-wrap gap-2 mt-4 sm:w-auto sm:justify-start sm:flex-nowrap">
                <EmailInput/>
                <Link href="/browse" className="flex items-center justify-between px-6 py-3 bg-primary rounded text-2xl font-NetflixSansSemiBold text-nowrap gap-3">
                  Get Started
                  <ChevronRight/>
                </Link>
              </form>
            </div>
          </div>
        </section>
        <footer>
          <SectionDivider withMargin={false} />
          <div className="flex items-center justify-center h-full text-home-input-label p-8">
            <div className="w-full md:w-3/5 font-NetflixSansRegular text-sm">
              <p className="text-base mb-4">
                Questions? Call <a href="https://wa.me/+18299026178" className="underline decoration-solid">+1 (829) 902-6178</a>
              </p>
              <ul className="flex flex-col flex-wrap w-full mb-6 gap-y-4 max-h-72 md:max-h-36">
                <li className="underline decoration-solid">
                  <a>FAQ</a>
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
                <LangSelector hideText={false} />
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
