"use client"

import ChooseProfile from "./pages/profile/ChooseProfile";
import Home from "./pages/home/Home";
import ProfileLoading from "./pages/profile/ProfileLoading";
import useNavigateToHome from "./hooks/useNavigateToHome";

const Browse = () => {
  const { profile, setProfile, showProfileLoading } = useNavigateToHome() 

  return (
    <>
      {!profile && (
        <ChooseProfile setProfileState={setProfile} />
      )}

      {(showProfileLoading && profile) && (
        <ProfileLoading avatar={profile.avatar} />
      )}
      
      {(!showProfileLoading && profile) && (
        <Home avatar={profile.avatar} />
      )}
    </>
  )
}

export default Browse
