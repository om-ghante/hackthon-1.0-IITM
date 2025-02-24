"use client"
import { motion } from "framer-motion"

const Sponsors = () => {
  const sponsors = ["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4"]

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-4 rounded-lg flex items-center justify-center"
          >
            <span className="text-xl font-bold">{sponsor}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Sponsors

