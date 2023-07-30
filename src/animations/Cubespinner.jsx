import CubeFace from './CubeFace'
import './Cube.scss'
import List from '../ui/List'
function Cubespinner({ faces }) {
  return (
    <div className="cubespinner">
      {
        <List
          items={faces}
          render={(face, i) => (
            <CubeFace
              key={i}
              icon={face.icon}
              color={face.color}
              className={face.className}
            />
          )}
        />
      }
    </div>
  )
}

export default Cubespinner
