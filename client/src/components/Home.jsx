import React from "react"
import LogoImage from "../assets/logo.png"

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">HACKATHON</h1>
        <h2 className="text-3xl mb-8">IITM (Kanha + Sudarban House)</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <img src={LogoImage} alt="Image 1" className="w-24 h-24 rounded-full" />
          <img src={LogoImage} alt="Image 2" className="w-24 h-24 rounded-full" />
        </div>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">Register Now</button>
      </div>
    </section>
  )
}

export default Home

