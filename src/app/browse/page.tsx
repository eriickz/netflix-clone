"use client"

import ChooseProfile from "./profile/ChooseProfile";
import { useState } from "react";
import { Profile } from "./profile/libs/interfaces";
import App from "./app/App";

const Browse = () => {
  const [profile, setProfile] = useState<Profile>(undefined)
  
  return (
    <>
      {
        !profile
          ? <ChooseProfile setProfileState={setProfile}/>
          : <App/>
      }
    </>
  )
}

export default Browse