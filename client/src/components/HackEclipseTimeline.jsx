"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
}

const nodeVariants = {
  hidden: { scale: 0.8, opacity: 0, x: -20 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    scale: 1.1,
    boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)",
    transition: { duration: 0.3 },
  },
}

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15 + 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const NetworkBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particles
    const particles = []
    const particleCount = Math.min(window.innerWidth / 10, 100)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move particles
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(147, 51, 234, 0.2)"
        ctx.fill()

        // Connect particles that are close
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(drawParticles)
    }

    const animationId = requestAnimationFrame(drawParticles)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
}

const TimelineNode = ({ icon, title, date, index }) => (
  <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 w-full">
    {/* Connection line */}
    {index > 0 && (
      <motion.div
        className="absolute left-1/2 md:left-[60px] top-[-50px] md:top-[-30px] w-[2px] md:w-[2px] h-[50px] md:h-[30px]"
        style={{
          background: "linear-gradient(to bottom, rgba(147, 51, 234, 0), rgba(147, 51, 234, 1))",
        }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
      />
    )}

    {/* Node */}
    <motion.div
      className="relative z-10 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-gradient-to-br from-purple-600 to-purple-900 text-white text-2xl shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-400/30"
      custom={index}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      variants={nodeVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-800 to-purple-950 flex items-center justify-center">
        {icon}
      </div>
    </motion.div>

    {/* Content */}
    <motion.div
      className="flex-1 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={contentVariants}
      whileHover={{
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        borderColor: "rgba(147, 51, 234, 0.3)",
        transition: { duration: 0.3 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold text-lg md:text-xl">{title}</h3>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-purple-400 text-sm font-medium">{date}</span>
          <ChevronRight className="h-4 w-4 text-purple-400" />
        </div>
      </div>
      <p className="text-gray-300 text-sm mt-1 md:hidden">{date}</p>
    </motion.div>
  </div>
)

const HackEclipseTimeline = () => {
  const events = [
    { icon: "📢", title: "Webinar + Official Announcement", date: "19th March" },
    { icon: "📝", title: "Registration Begins", date: "20th March" },
    { icon: "📑", title: "PPT Submission Opens", date: "13th April - 20th April" },
    { icon: "✔️", title: "Shortlisted PPT Announcement", date: "23rd April" },
    { icon: "🎓", title: "Student Mentor Sessions", date: "24th-30th April" },
    { icon: "⚡", title: "Prototype Progress + Elimination Round", date: "1st May" },
    { icon: "🏆", title: "Prototype Submission Deadline", date: "9th May" },
    { icon: "⭐", title: "Prototype Presentation + Judgement Round", date: "10th May" },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D061E] to-[#140A2D] -z-20" />
      <NetworkBackground />

      <motion.div
        className="relative z-10 container mx-auto px-4 py-16 md:py-24"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="inline-block mb-6">
            <motion.div
              className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Journey to Innovation
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              HackEclipse Timeline
            </h1>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 leading-relaxed">
            HackEclipse is designed to be an engaging, multi-stage hackathon that fosters creativity, mentorship, and
            innovation.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline nodes */}
          <div className="flex flex-col space-y-16 md:space-y-20">
            {events.map((event, index) => (
              <TimelineNode key={index} icon={event.icon} title={event.title} date={event.date} index={index} />
            ))}
          </div>

          {/* Final decorative element */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: events.length * 0.15 + 0.5, duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-900/20 flex items-center justify-center border border-purple-500/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/30 to-purple-900/30 flex items-center justify-center border border-purple-500/20">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default HackEclipseTimeline
