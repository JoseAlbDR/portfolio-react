import './App.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './ui/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Portfolio from './pages/Portfolio'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
      <Toaster
        postition="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--primary-color)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default App
