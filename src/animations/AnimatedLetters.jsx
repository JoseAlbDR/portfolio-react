import List from '../ui/AppLayout/List'
import './AnimatedLetters.scss'

function AnimatedLetters({ letterClass, strArray, idx }) {
  strArray = strArray.split('')
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
