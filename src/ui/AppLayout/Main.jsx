import { styled } from 'styled-components'
// import './Main.scss'

const OverflowScroll = styled.div`
  @media (min-width: 768px) {
    overflow: scroll;
    overflow-x: hidden;
    height: 100dvh;
  }
`

const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-left: 2%;
  height: 100%;
  position: relative;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  gap: 15px;
  height: 100%;
  // justify-content: center;

  span.tags.tag-html {
    &:last-of-type {
      padding-bottom: 20px;
    }
  }
`
function Main({ children }) {
  return (
    <OverflowScroll>
      <Page>
        <FlexRow>{children}</FlexRow>
      </Page>
    </OverflowScroll>
  )
}

export default Main
