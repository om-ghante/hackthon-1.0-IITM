"use client"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-6xl font-bold mb-4">Hack the Future</h1>
        <p className="text-xl mb-8">Join us for an epic 48-hour coding adventure!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Register Now
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero

