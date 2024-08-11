import { FC } from "react";
import { ProfileProps } from "../libs/interfaces";

const Profile: FC<ProfileProps> = ({ label, isLastProfile, avatarClassName = "", setProfile }) => {
  let hoverProps = "[&>div]:hover:after:content-[''] [&>div]:hover:after:block [&>div]:hover:after:absolute [&>div]:hover:after:rounded [&>div]:hover:after:bottom-0 [&>div]:hover:after:left-0 [&>div]:hover:after:right-0 [&>div]:hover:after:top-0"
  
  if (!isLastProfile) {
    hoverProps += " [&>div]:hover:after:border-4 [&>div]:hover:after:border-white"
  } else {
    hoverProps += " [&>div]:hover:after:bg-white"
  }
  
  return (
    <button
      className={`hover:text-white ${hoverProps}`}
      onClick={() => setProfile({ username: label, avatar: avatarClassName })}
    >
      <div className={`relative flex justify-center items-center rounded border-none box-border border-transparent w-48 h-48 max-w-48 max-h-48 min-h-20 min-w-20 bg-cover bg-no-repeat ${avatarClassName} text-[100px]`}>
        {isLastProfile && (
          <i className="absolute nf nf-md-plus_circle text-choose-profile-default-text-color z-1"></i>
        )}
      </div>
      <p className="text-center text-2xl mt-3.5 font-NetflixSansRegular">{label}</p>
    </button>
  )
}

export default Profile
