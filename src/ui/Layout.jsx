import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import './Layout.scss'
import TopTags from './TopTags'
import BottomTags from './BottomTags'
function Layout() {
  return (
    <div className="app bg-fixed">
      <Sidebar />
      <main className="page">
        <TopTags />
        <Outlet />
        <BottomTags />
      </main>
    </div>
  )
}

export default Layout
