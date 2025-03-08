import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
// Import your actual image - in Vite you would typically import like this:
// import hackathonImage from "../assets/images.jpeg";
// For this example, I'll assume the image is imported as a prop or from a parent component

// Remove "use client" directive as it's not needed in Vite

const CountUp = ({ end, duration = 2.5 }) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return <span ref={nodeRef}>{count.toLocaleString()}+</span>
}

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-sky-400 mb-8 tracking-tight">
    {children}
  </h2>
)

const ZigZagSection = ({ title, content, image, imageAlt, isReversed = false, className = "" }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <div ref={ref} className={`py-20 ${className}`}>
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 ${isReversed ? "lg:grid-cols-[55%_45%]" : "lg:grid-cols-[45%_55%]"} gap-12 items-center px-6 md:px-12`}
      >
        <motion.div
          className={`space-y-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: isReversed ? 50 : -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <SectionTitle>{title}</SectionTitle>
          {content}
        </motion.div>

        <motion.div
          className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: isReversed ? -50 : 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl transform rotate-3 scale-105"></div>
            <img
              src={image || "/hack.jpg"}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-xl shadow-2xl relative z-10 transform transition-transform duration-500 hover:scale-[1.02]"
              srcSet={image}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const IITMBSDegree = ({ hackathonImage }) => {
  // For Vite, we'll use imported images or props
  // If you have the images in your public folder, you can use:
  const campusImage = "/campus.jpg" // Assuming these are in your public folder
  const studentsImage = "/students.jpg"

  // If you're importing them, you would use the imported variables directly

  return (
    <div className="bg-gradient-to-b from-[#0a0118] via-[#0c0326] to-[#0a0118] text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.3),transparent_70%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(50,120,255,0.3),transparent_70%)]"></div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-medium border border-purple-500/30">
              #1 Ranked University in India (NIRF)
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
            IIT Madras BS Degree & HackEclipse
          </h1>

          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Where academic excellence meets innovation, creating a community of future tech leaders and problem-solvers.
          </p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#learn-more"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* About Section - Zig */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ZigZagSection
          title="About IIT Madras BS Degree"
          image="/iit.png"
          imageAlt="IIT Madras Campus"
          content={
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-blue-100/90">
                The <span className="text-yellow-400 font-semibold">Indian Institute of Technology Madras (IITM)</span>,
                India's <span className="text-yellow-400 font-bold">#1-ranked university (NIRF)</span>, is redefining
                higher education with its{" "}
                <span className="text-yellow-400 font-bold">Bachelor of Science (BS) degree</span> in{" "}
                <span className="text-yellow-400 font-bold">Data Science & Applications</span> and{" "}
                <span className="text-yellow-400 font-bold">Electronic Systems</span>.
              </p>

              <p className="text-lg leading-relaxed text-blue-100/90">
                This program combines <strong>academic excellence</strong> with <strong>flexibility</strong>, making
                world-class education accessible to <strong>34,000+ learners globally</strong>.
              </p>

              <p className="text-lg leading-relaxed text-blue-100/90">
                But IITM BS is more than just a degree—it's a <strong>thriving community</strong> of{" "}
                <strong>innovators, problem-solvers, and tech enthusiasts</strong> ready to make an impact.
              </p>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl mt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">🏆</span>
                  <p className="font-bold text-lg text-purple-300">
                    Best <span className="text-purple-200">Online Program Award</span>
                  </p>
                </div>
                <div className="text-blue-200/80 text-sm">
                  Recognized by:
                  <span className="font-semibold text-yellow-300 ml-1">QS Reimagine Education</span>&{" "}
                  <span className="text-blue-300">Wharton University</span>
                </div>
              </motion.div>
            </div>
          }
        />
      </motion.div>

      {/* HackEclipse Section - Zag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ZigZagSection
          title="HackEclipse: Where Ideas Meet Innovation"
          image={hackathonImage}
          imageAlt="Hackathon"
          isReversed={true}
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20"
          content={
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-blue-100/90">
                At the heart of this ecosystem lies <span className="text-yellow-400 font-bold">HackEclipse</span>, an
                electrifying hackathon that challenges brilliant minds to <strong>redefine the future</strong> through{" "}
                <strong>technology and innovation</strong>.
              </p>

              <ul className="space-y-4 text-lg text-blue-100/90">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">◆</span>
                  <span>
                    <span className="text-yellow-400 font-semibold">Think big</span>, build fast, and innovate boldly.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">◆</span>
                  <span>
                    <span className="text-yellow-400 font-semibold">Collaborate</span> with like-minded problem-solvers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">◆</span>
                  <span>
                    <span className="text-yellow-400 font-semibold">Turn ideas into impact</span> with cutting-edge
                    technology.
                  </span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-blue-100/90">
                From <strong>AI-driven solutions</strong> to <strong>next-gen electronics</strong>, HackEclipse is where{" "}
                <strong>creativity meets code</strong>, and teamwork fuels transformation.
              </p>

              <p className="text-lg font-semibold text-blue-100/90">
                Whether you're a <strong>coding wizard, a design thinker, or a problem-solver</strong>, HackEclipse is
                your stage to shine.
              </p>

              <p className="text-xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                🚀 Are you ready to innovate, disrupt, and leave your mark?
              </p>
            </div>
          }
        />
      </motion.div>

      {/* Community Impact Section - Zig */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ZigZagSection
          title="Community Impact"
          image="/com.jpg"
          imageAlt="IITM BS Students"
          content={
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 p-8 rounded-xl text-center">
                <h3 className="text-2xl font-semibold text-blue-200 mb-4">Global Reach</h3>
                <div className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-200 mb-4">
                  <CountUp end={34000} />
                </div>
                <p className="text-lg text-blue-100/80">Learners across the globe</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">Industry-Driven</h4>
                  <p className="text-blue-100/80">
                    Curriculum designed with industry experts to ensure relevant skills and knowledge
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">Flexible Learning</h4>
                  <p className="text-blue-100/80">Accessible education that adapts to your schedule and learning pace</p>
                </motion.div>
              </div>

              <p className="text-lg leading-relaxed text-blue-100/90 italic">
                "IITM BS is transforming education by making world-class learning accessible to everyone with the drive to
                succeed."
              </p>
            </div>
          }
        />
      </motion.div>

      {/* Footer Section */}
      <div className="py-16 px-6 md:px-12 text-center">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 text-lg font-semibold text-blue-200 mb-8">
            Organized By IITM BS Students
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <motion.a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xl">📱</span>
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xl">📧</span>
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xl">🌐</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default IITMBSDegree
