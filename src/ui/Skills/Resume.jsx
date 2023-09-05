import { Link } from 'react-router-dom'
import CVJAlbertoDelgado from '../../assets/curriculum/CVJAlbertoDelgado.pdf'

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
