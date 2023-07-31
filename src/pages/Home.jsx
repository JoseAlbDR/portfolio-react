import './Home.scss'
import Logo from '../ui/SideBar/Logo'
import Banner from '../ui/Home/Banner'
import LoadingAnimation from '../animations/LoadingAnimation'
import Container from '../ui/AppLayout/Container'
import TextZone from '../ui/AppLayout/TextZone'

function Home() {
  return (
    <>
      <LoadingAnimation />
      <Container type="home">
        <TextZone>
          <Banner />
        </TextZone>
        <Logo />
      </Container>
    </>
  )
}

export default Home
