import './Home.scss'
import Logo from '../ui/SideBar/Logo'
import Banner from '../ui/Home/Banner'
import LoadingAnimation from '../animations/LoadingAnimation'

function Home() {
  return (
    <>
      <LoadingAnimation />
      <div className="container home-page">
        <div className="text-zone">
          <Banner />
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home
