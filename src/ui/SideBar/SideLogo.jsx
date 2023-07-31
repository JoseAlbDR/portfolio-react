import { Link } from 'react-router-dom'
import LogoJ from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import './SideLogo.scss'
function SideLogo() {
  return (
    <Link className="logo" to="/">
      <img src={LogoJ} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="jadero" />
    </Link>
  )
}

export default SideLogo
