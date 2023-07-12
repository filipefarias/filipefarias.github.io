// import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Aside from './components/Aside/aside'
import Footer from './components/Footer/footer'
import AppRouter from './Routes'

function App() {
  return (
    <BrowserRouter>
      <Aside />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
