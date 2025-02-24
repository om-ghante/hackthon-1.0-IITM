"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="py-16 px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          We are a community of innovators, dreamers, and builders. Our hackathon brings together the brightest minds to
          solve real-world problems and push the boundaries of technology.
        </p>
      </motion.div>
    </section>
  )
}

export default About

