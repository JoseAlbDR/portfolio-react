import './Home.scss'
import LogoTitle from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span>Hi,</span>
          <span>
            I&apos;m
            <img src={LogoTitle} alt="developer" />
            .Alberto
          </span>
          <span>Full Stack</span>
          <span>Web Developer</span>
        </h1>
        <h2>Frontent Developer / Backend Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
