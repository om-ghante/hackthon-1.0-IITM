"use client"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input type="text" id="name" className="w-full px-3 py-2 bg-gray-800 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" className="w-full px-3 py-2 bg-gray-800 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea id="message" rows="4" className="w-full px-3 py-2 bg-gray-800 rounded"></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  )
}

export default Contact

