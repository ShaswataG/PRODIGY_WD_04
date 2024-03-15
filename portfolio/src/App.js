import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Platforms from './components/Platforms'
import About from './components/About'
import Skills from './components/Skills'
import Projects from  './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Platforms />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </main>
        {/* <Footer /> */}
      </div>
      <Footer />
    </>
  )
}