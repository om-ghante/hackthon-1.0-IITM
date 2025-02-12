import React from 'react'
import './App.css'

import Navbar from "./components/NavBar"
import Home from "./components/Home"
import AboutHackathon from "./components/AboutHackathon"
import Sponsors from "./components/Sponsors"
import Team from "./components/Team"
import ContactUs from "./components/ContactUs"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-gradient-start to-sky-gradient-end text-white">
      <Navbar />
      <Home />
      <AboutHackathon />
      <Sponsors />
      <Team />
      <ContactUs />
    </div>
  )
}

export default App;