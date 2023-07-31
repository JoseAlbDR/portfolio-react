import { Link } from 'react-router-dom'

function LinkButton({ to, className, children, disabled }) {
  if (!to)
    return (
      <button disabled={disabled} type="submit" className={className}>
        {children}
      </button>
    )

  return (
    <Link to={to} className={className} target="_blank">
      {children}
    </Link>
  )
}

export default LinkButton
