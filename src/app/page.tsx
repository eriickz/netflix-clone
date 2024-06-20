import HomePromo from "@/assets/images/home/promo.jpg"
import Image from "next/image";
import Logo from "@/components/Logo"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import Lang from "@/components/icons/Lang"

export default function Home() {
  return (
    <main>
      <div className="relative overflow-hidden h-[700px] bg-home-promo-pattern bg-home-overlay">
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
              <Select value="English">
                <SelectTrigger className="text-white justify-around border-home-select rounded p-2 gap-2 h-full font-NetflixSansRegular">
                  <Lang />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">
                    English
                  </SelectItem>
                  <SelectItem value="Spanish">
                    Spanish
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
      </div>
    </main>
  );
}
