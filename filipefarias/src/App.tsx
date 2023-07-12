import { useState } from 'react'
import './App.css'
import Aside from './components/Aside/aside'
import Footer from './components/Footer/footer'
import Main from './components/Pages/Main'

function App() {
  return (
    <>
      <Aside />
      <Main />
      <Footer />
    </>
  )
}

export default App
