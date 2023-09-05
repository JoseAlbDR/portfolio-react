import { Link } from 'react-router-dom'
import CVJAlbertoDelgado from '../../download/CVJAlbertoDelgado.pdf'

function Resume() {
  return (
    <div>
      <Link
        download="CVJAlbertoDelgado"
        target="_blank"
        rel="noreferrer"
        to={CVJAlbertoDelgado}
        className="flat-button"
      >
        Download CV
      </Link>
    </div>
  )
}

export default Resume
