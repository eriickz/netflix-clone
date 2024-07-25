import Profile from "./components/Profile";

const ChooseProfile = () => {
  return (
    <main className="w-full h-full sm:h-screen py-20 bg-choose-profile-background z-0">
      <section className="flex flex-col h-full justify-center items-center text-choose-profile-default-text-color">
        <h1 className="text-white text-6xl mb-11 font-NetflixSansRegular text-center">Who's watching?</h1>
        <div className="flex flex-col justify-center items-center">
          <ul className="flex justify-center items-center flex-wrap gap-x-9 gap-y-8 mb-28">
            <li>
              <Profile label="Dad" avatarClassName="bg-avatar-hero"/>
            </li>
            <li>
              <Profile label="Mom" avatarClassName="bg-avatar-girl"/>
            </li>
            <li>
              <Profile label="Guest" avatarClassName="bg-avatar"/>
            </li>
            <li>
              <Profile label="Add Profile" isLastProfile/>
            </li>
          </ul>
          <button className="py-2.5 px-8 border border-choose-profile-default-text-color text-1.5xl leading-[26px] font-NetflixSansRegular tracking-[2px] hover:border-white hover:text-white">
            Manage Profiles
          </button>
        </div>
      </section>
    </main>
  )
}

export default ChooseProfile