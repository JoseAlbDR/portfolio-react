import { Link } from 'react-router-dom'
import ResumeJAlbertoDelgado from '../../download/ResumeJAlbertoDelgado.pdf'

function Resume() {
  return (
    <div>
      <Link
        download="Resume-JAlbertoDelgado"
        target="_blanc"
        rel="noreferrer"
        to={ResumeJAlbertoDelgado}
        className="flat-button"
      >
        Download CV
      </Link>
    </div>
  )
}

export default Resume
