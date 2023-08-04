import { css, styled } from 'styled-components'

const Tag = styled.span`
  color: #fff;
  opacity: 0.6;
  font-size: 18px;
  font-family: 'Roboto Mono', monospace;
  margin-left: 3%;

  ${(props) =>
    props.type === 'tag-html' &&
    css`
      margin-left: -1%;
    `}

  ${(props) =>
    props.type === 'top-tags' &&
    css`
      margin-bottom: 15px;
    `}
`

export default Tag
