import { Link } from 'react-router-dom'

function LinkButton({ to, className, children }) {
  if (!to)
    return (
      <button type="submit" className={className}>
        {children}
      </button>
    )

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default LinkButton
