import { Outlet } from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'
import TopTags from './TopTags'
import BottomTags from './BottomTags'
import MainContainer from './MainContainer'
import Main from './Main'
import FlexRow from './FlexRow'
import './AppLayout.scss'

function AppLayout() {
  return (
    <>
      <div className="bg"></div>
      <div className="content">
        <MainContainer>
          <Sidebar />
          <div className="of-sc">
            <Main>
              <FlexRow>
                <TopTags />
                <Outlet />
                <BottomTags />
              </FlexRow>
            </Main>
          </div>
        </MainContainer>
      </div>
    </>
  )
}

export default AppLayout
