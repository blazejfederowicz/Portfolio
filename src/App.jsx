import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import AboutComponent from './components/AboutComponent'
import FeatureComponent from './components/FeatureComponent'
import ProjectsComponent from './components/ProjectsComponent'
import ContactComponent from './components/ContanctComponent'
import FooterComponent from './components/FooterComponent'

function App() {

  return (
    <>
      <HeaderComponent/>
      <AboutComponent/>
      <ProjectsComponent/>
      <FeatureComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </>
  )
}

export default App
