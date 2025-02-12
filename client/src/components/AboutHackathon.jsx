import React from "react"
import Hackathon from "../assets/hackthon.png"

const AboutHackathon = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Hackathon</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg">
              Our hackathon is a 24-hour coding competition that brings together talented developers, designers, and
              innovators to create amazing projects. Join us for an exciting event filled with creativity,
              collaboration, and cutting-edge technology!
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img src={Hackathon} alt="Hackathon" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHackathon

