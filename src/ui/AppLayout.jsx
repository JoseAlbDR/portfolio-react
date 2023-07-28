import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopTags from './TopTags'
import BottomTags from './BottomTags'
import App from './App'
import Main from './Main'

function AppLayout() {
  return (
    <App>
      <Sidebar />
      <Main>
        <TopTags />
        <Outlet />
        <BottomTags />
      </Main>
    </App>
  )
}

export default AppLayout
