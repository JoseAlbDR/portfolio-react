import CubeFace from './CubeFace'
function Cubespinner({ faces }) {
  return (
    <div className="cubespinner">
      {faces.map((face, i) => {
        return (
          <CubeFace
            key={i}
            icon={face.icon}
            color={face.color}
            className={face.className}
          />
        )
      })}
    </div>
  )
}

export default Cubespinner