import './App.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
