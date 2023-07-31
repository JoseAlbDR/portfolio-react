import { Link } from 'react-router-dom'

function LinkButton({ to, className, children, disabled, type }) {
  if (!to)
    return (
      <button disabled={disabled} type="submit" className={className}>
        {children}
      </button>
    )

  return (
    <Link
      to={to}
      className={className}
      target={`${type === 'contact' ? '_blank' : ''}`}
    >
      {children}
    </Link>
  )
}

export default LinkButton
