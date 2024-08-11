import { useEffect, useState } from "react"
import { Profile } from "../pages/profile/libs/interfaces";

const useNavigateToHome = () => {
  const [profile, setProfile] = useState<Profile | undefined>(undefined)
  const [showProfileLoading, setShowProfileLoading] = useState(false)

  useEffect(() => {
    if (profile !== undefined) {
      setShowProfileLoading(true) 
    }
  }, [profile])

  useEffect(() => {
    if (showProfileLoading) {
      const timeoutId = setTimeout(() => setShowProfileLoading(false), 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [showProfileLoading])

  return {
    profile,
    setProfile,
    showProfileLoading,
  }
}

export default useNavigateToHome 
