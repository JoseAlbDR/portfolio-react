import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function CubeFace({ color, icon, className }) {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={icon} color={color} />
    </div>
  )
}

export default CubeFace
