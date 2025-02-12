import React from "react"

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">HACKATHON</div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#home" className="hover:text-sky-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-300">
              About Hackathon
            </a>
          </li>
          <li>
            <a href="#sponsors" className="hover:text-sky-300">
              Sponsors
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-sky-300">
              Team
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-300">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

