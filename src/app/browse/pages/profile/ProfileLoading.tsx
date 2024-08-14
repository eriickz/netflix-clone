import { FC } from "react";
import Image from "next/image";
import spinner from "@/assets/images/profile-spinner.png"

const ProfileLoading: FC<{ avatar: string }> = ({ avatar }) => {
  return (
    <div className="w-full h-full sm:h-screen py-20 bg-choose-profile-background">
      <div className="flex h-full justify-center items-center">
        <Image alt="Profile Loading" src={spinner} className="absolute animate-spin"/>
        <div className={`${avatar} bg-cover bg-no-repeat w-14 h-14`}></div>
      </div>
    </div>
  )
}

export default ProfileLoading
