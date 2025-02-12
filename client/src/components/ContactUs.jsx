import React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const ContactUs = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-4xl hover:text-sky-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-4xl hover:text-sky-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-4xl hover:text-sky-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-4xl hover:text-sky-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

