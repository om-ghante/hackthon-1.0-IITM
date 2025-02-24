"use client"
import { motion } from "framer-motion"
import Hero from "./components/Home"
import About from "./components/AboutHackathon"
import Contact from "./components/ContactUs"
import Sponsors from "./components/Sponsors"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Navbar from "./components/NavBar"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Sponsors />
        <FAQ />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App

