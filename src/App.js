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
  const [nav, setNav] = React.useState(false)

  const toggleNav = () => {
    setNav(nav => !nav)
  }




  return (
    <>
      <div className='app'>
        <Navbar navStatus={nav} toggleNav={toggleNav}/>
        <Platforms />
        <main className='main'>
        <button style={{borderRadius: "50%", border: "0px", padding: "0px", width: "40px", height: "40px", position: "fixed", top: "330px", left: "0px"}} className="toggle-nav-button" onClick={toggleNav}><img width="40px" src="https://shaswatag.github.io/PRODIGY_WD_04/images/arrow-right-circle-fill.svg"/></button>
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