export interface Profile {
  username: string
  avatar: string
}

export interface ProfileProps {
  label: string
  avatarClassName?: string
  isLastProfile?: boolean,
  setProfile: (state: Profile) => void,
}

export interface ChooseProfileProps {
  setProfileState: (state: Profile) => void
}
