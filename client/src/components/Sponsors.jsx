import React from "react"
import sponsorImage from "../assets/image.png";

const SponsorCard = ({ name, image }) => {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center">{name}</p>
        </div>
      </div>
    )
  }
  

const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", image: sponsorImage },
    { name: "Sponsor 2", image: sponsorImage },
    { name: "Sponsor 3", image: sponsorImage },
    { name: "Sponsor 4", image: sponsorImage },
    { name: "Sponsor 5", image: sponsorImage },
    { name: "Sponsor 6", image: sponsorImage },
    { name: "Sponsor 7", image: sponsorImage },
    { name: "Sponsor 8", image: sponsorImage },
  ]

  return (
    <section id="sponsors" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} name={sponsor.name} image={sponsor.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors

