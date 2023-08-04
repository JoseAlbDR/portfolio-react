import { css, styled } from 'styled-components'

const Container = styled.div`
  width: 90%;
  will-change: contents;
  opacity: 0;
  z-index: 1;
  transform-style: preserve-3d;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: 0 auto;

  ${(props) =>
    props.type === 'home' &&
    css`
      position: relative;
      // height: 100%;
      word-wrap: normal;
    `}

  ${(props) =>
    props.type === 'about' &&
    css`
      display: flex;
      flex-direction: column;
      gap: 7%;
      width: 100%;
    `}
`

// function Container({ children, type }) {
//   return <div className={`container ${type}-page`}>{children}</div>
// }

export default Container
