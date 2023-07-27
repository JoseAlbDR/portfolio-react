import './Logo.scss'
import LogoS from '../../assets/images/J.svg'
function Logo() {
  return (
    <div className="logo-container">
      <img src={LogoS} className="solid-logo" alt="logo" />
    </div>
  )
}

export default Logo
