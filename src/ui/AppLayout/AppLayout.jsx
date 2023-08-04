import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../../context/SidebarContext'
import Sidebar from '../SideBar/Sidebar'
import TopTags from './TopTags'
import BottomTags from './BottomTags'
import Main from './Main'
import Footer from './Footer'
import styled from '@emotion/styled'
import background from '../../assets/images/nobgbanner.png'

const BackgroundImage = styled.div`
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`

const Content = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`

function AppLayout() {
  return (
    <>
      <BackgroundImage></BackgroundImage>
      <Content>
        <MainContainer>
          <SidebarProvider>
            <Sidebar />
          </SidebarProvider>
          <Main>
            <TopTags />
            <Outlet />
            <BottomTags />
          </Main>
          <Footer />
        </MainContainer>
      </Content>
    </>
  )
}

export default AppLayout
