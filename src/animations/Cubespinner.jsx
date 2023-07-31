import CubeFace from './CubeFace'
import './Cube.scss'
import List from '../ui/AppLayout/List'
function Cubespinner({ faces }) {
  return (
    <div className="stage-cube-content">
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
    </div>
  )
}

export default Cubespinner
