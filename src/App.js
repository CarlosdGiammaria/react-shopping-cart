import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Header from './components/Header'
import Layout from './components/Layout'

import './App.css'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:category" element={<Home />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App
