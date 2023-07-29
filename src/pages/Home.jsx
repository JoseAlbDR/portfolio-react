import './Home.scss'
import Logo from '../ui/Logo'
import Banner from '../ui/Banner'
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
