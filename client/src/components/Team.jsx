import React from "react"

const TeamMemberCard = ({ name, role, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-bold">{name}</p>
        <p className="text-sky-300">{role}</p>
      </div>
    </div>
  )
}

const Team = () => {
  const teamMembers = [
    { name: "John Doe", role: "Organizer", image: "/placeholder.svg?height=300&width=300" },
    { name: "Jane Smith", role: "Tech Lead", image: "/placeholder.svg?height=300&width=300" },
    { name: "Mike Johnson", role: "Designer", image: "/placeholder.svg?height=300&width=300" },
    { name: "Emily Brown", role: "Marketing", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

