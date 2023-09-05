import { Link } from 'react-router-dom'
import CVJAlbertoDelgado from '../../download/ResumeJAlbertoDelgado.pdf'

function Resume() {
  return (
    <div>
      <Link
        download="Resume-JAlbertoDelgado"
        target="_blanc"
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
