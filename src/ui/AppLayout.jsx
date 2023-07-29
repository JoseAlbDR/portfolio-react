import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopTags from './TopTags'
import BottomTags from './BottomTags'
import App from './App'
import Main from './Main'
import FlexRow from './FlexRow'
import './AppLayout.scss'

function AppLayout() {
  return (
    <>
      <div className="bg"></div>
      <div className="content">
        <App>
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
        </App>
      </div>
    </>
  )
}

export default AppLayout
