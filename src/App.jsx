import { useState, useRef, useEffect } from 'react'
import './App.css'
import { motion, useAnimation} from 'motion/react'
import HeaderComponent from './components/HeaderComponent'
import AboutComponent from './components/AboutComponent'
import ProjectsComponent from './components/ProjectsComponent'
import ContactComponent from './components/ContanctComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const ref = useRef(null)
  
  

  return (
    <>
      <HeaderComponent/>
      <AboutComponent/>
      <ProjectsComponent/>
      <div className="bg-zinc-950">
        <ContactComponent/>
        <FooterComponent/>
      </div>
    </>
  )
}

export default App
