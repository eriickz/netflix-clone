import Header from "./components/header/Header";

const App = () => {
  return (
    <main className="w-full h-screen bg-choose-profile-background">
      <div className="absolute w-full h-full bg-[url('/images/app-home-1.webp')] bg-no-repeat bg-cover"></div>
      <Header />
    </main>
  )
}

export default App