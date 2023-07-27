import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'
function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <main className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <span className="tags bottom-tag-html">&lt;/html&gt;</span>
      </main>
    </div>
  )
}

export default Layout
