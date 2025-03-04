"use client"
import { motion } from "framer-motion"
import SponsorCard from "./SponsorCard"
import kanhaLogo from "../assets/kanhaH.png"
import sundarbanLogo from "../assets/sundarbanH.png"

const Sponsors = () => {
  const sponsors = [
    { name: "Kanha", logoUrl: kanhaLogo },
    { name: "sundarban", logoUrl: sundarbanLogo },
    { name: "Kanha", logoUrl: kanhaLogo },
    { name: "Sundarban", logoUrl: sundarbanLogo }
  ]

  return (
    <section className="py-32 px-4 relative z-10">
      <div className="text-4xl font-bold mb-32 text-center text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wider">OUR SPONSORS</h2>
      <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SponsorCard 
                name={sponsor.name} 
                logoUrl={sponsor.logoUrl} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors