import { Outlet } from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'
import TopTags from './TopTags'
import BottomTags from './BottomTags'
import MainContainer from './MainContainer'
import Main from './Main'
import FlexRow from './FlexRow'
import './AppLayout.scss'
import { SidebarProvider } from '../../context/SidebarContext'
import SocialMedia from '../SideBar/SocialMedia'
import Footer from './Footer'

function AppLayout() {
  return (
    <>
      <div className="bg"></div>
      <div className="content">
        <MainContainer>
          <SidebarProvider>
            <Sidebar />
          </SidebarProvider>
          <div className="of-sc">
            <Main>
              <FlexRow>
                <TopTags />
                <Outlet />
                <BottomTags />
                <Footer />
              </FlexRow>
            </Main>
          </div>
        </MainContainer>
      </div>
    </>
  )
}

export default AppLayout
