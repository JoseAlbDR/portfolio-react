import { Link } from 'react-router-dom'

function LinkButton({ to, className, children }) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default LinkButton
