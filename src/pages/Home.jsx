import './Home.scss'
import LogoTitle from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../animations/AnimatedLetters'
import Logo from '../ui/Logo'
import Banner from '../ui/Banner'

function Home() {
  return (
    <div className="container home-page">
      <Banner />
      <Logo />
    </div>
  )
}

export default Home
