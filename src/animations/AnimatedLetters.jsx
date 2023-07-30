import List from '../ui/List'
import './AnimatedLetters.scss'

function AnimatedLetters({ letterClass, strArray, idx }) {
  return (
    <span>
      {
        <List
          items={strArray}
          render={(char, i) => (
            <span key={char + i} className={`${letterClass} _${i + idx}`}>
              {char}
            </span>
          )}
        />
      }
    </span>
  )
}

export default AnimatedLetters
