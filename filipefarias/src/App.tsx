import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Aside from './components/Aside/aside'
import Content from './components/Content/content'
import Footer from './components/Footer/footer'

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Content />
      <Footer />
    </>
  )
}

export default App
