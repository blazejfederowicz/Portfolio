import { useState, useRef, useEffect } from 'react'
import './App.css'
import { motion, useAnimation} from 'motion/react'
import HeaderComponent from './components/HeaderComponent'
import AboutComponent from './components/AboutComponent'
import ProjectsComponent from './components/ProjectsComponent'
import ContactComponent from './components/ContanctComponent'
import FooterComponent from './components/FooterComponent'
import ExpirianceComponent from './components/ExpirianceComponent'

function App() {
  const ref = useRef(null)
  
  

  return (
    <>
      <div className="fixed top-0 -z-1 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <HeaderComponent/>
      <div className="w-full bg-gray-50 pb-10 md:pb-32">
        <AboutComponent/>
      </div>
      <ProjectsComponent/>
      <ExpirianceComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </>
  )
}

export default App
