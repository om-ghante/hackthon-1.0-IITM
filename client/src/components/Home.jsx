// "use client"
// import { motion } from "framer-motion"

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center text-center">
//       <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
//         <h1 className="text-6xl font-bold mb-4">Hack the Future</h1>
//         <p className="text-xl mb-8">Join us for an epic 48-hour coding adventure!</p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full"
//         >
//           Register Now
//         </motion.button>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero
"use client"

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DigitalDesignHome = () => {
  const backgroundRef = useRef(null);

  // Background animation effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(156, 39, 176, 0.4) 0%, rgba(1, 1, 1, 0.25) 50%)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple text-white overflow-hidden">
      {/* Animated background */}
      <div 
        ref={backgroundRef} 
        className="absolute inset-0 bg-black z-0"
      />
      
      {/* Floating particles for background effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation
        <header className="py-6 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500"
              animate={pulseAnimation}
            >
              < new Image
                src="/profile-pic.jpg" // Replace with your image
                alt="Lovro Podobnik"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <div>
              <h3 className="font-bold">Lovro Podobnik</h3>
              <p className="text-sm text-gray-400">Digital Product Designer</p>
            </div>
          </motion.div>

          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:block"
          >
            <ul className="flex space-x-8">
              {['Process', 'Work', 'Plans', 'About', 'FAQ'].map((item) => (
                <motion.li key={item}
                  whileHover={{ y: -2 }}
                >
                  <ahref={`#${item.to.toLowerCase()}`} 
                    className="relative text-sm font-medium hover:text-purple-400 transition-colors"
                  >
                    {item}
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </header> */}

        {/* Hero Section */}
        <motion.section 
          className="py-32 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-7xl font-bold mb-3"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Hack</span>
            <br />
            <span>The Future</span>
          </motion.h1>

          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-300 mb-10"
            variants={fadeInUp}
          >
            Join us for an Epic-48 hour code adventure!!
            <br />
            Code your dreams into reality, hack the future, and innovate beyond imagination.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            variants={fadeInUp}
          >
            {[
              { icon: "●", text: "Code" },
              { icon: "●", text: "Create" },
              { icon: "●", text: "Conquer" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-purple-500 text-sm">{feature.icon}</span>
                <span className="text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-medium shadow-lg shadow-purple-500/30"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(156, 39, 176, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Make your ideas happen
          </motion.button>
        </motion.section>

        {/* Logos Section with Enhanced Animations
        <motion.section
          className="py-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-12">
            Agencies and startups I worked with
          </p>
          
          <div className="flex justify-center items-center gap-20"> */}
            {/* Logo 1 with special animation
            <motion.div
              className="w-32 h-32 relative"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              drag
              dragConstraints={{
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
              }}
            >
              < new Image
                src="src\assets\kanhaH.png"
                alt="Client logo 1"
                layout="fill"
                objectFit="contain"
              />
              <motion.div
                className="absolute inset-0 bg-purple-500 rounded-full opacity-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
             */}{/* Logo 2 with different animation
            <motion.div
              className="w-32 h-32 relative"
              initial={{ opacity: 0, y: 20, rotateY: 90 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateY: 0,
                transition: { 
                  delay: 0.8,
                  duration: 0.8,
                  type: "spring"
                }
              }}
              whileHover={{
                scale: 1.1,
                rotateZ: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              drag
              dragConstraints={{
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
              }}
            >
              < new Image
                src="src\assets\sundarbanH.png"
                alt="Client logo 2"
                layout="fill"
                objectFit="contain"
              />
              <motion.div
                className="absolute inset-0 bg-pink-500 rounded-full opacity-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5,
                }}
              />
            </motion.div>
          </div>
        </motion.section> */}

        {/* Process Section */}
        <motion.section 
  id="process"
  className="py-32"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <motion.h2 
    className="text-4xl font-bold text-center mb-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    viewport={{ once: true }}
  >
    Design, without the hassle
  </motion.h2>

  <div className="relative">
    {/* Timeline line */}
    <motion.div
      className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500"
      initial={{ height: 0 }}
      whileInView={{ height: '100%' }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    />

    {/* Steps */}
    <div className="relative space-y-32">
      {[
        {
          number: 1,
          title: "Subscribe",
          description: "Subscribe and instantly get access to your dashboard, Trello board, and Slack channel."
        },
        {
          number: 2,
          title: "Send me your design request",
          description: "Get your first task within seconds by specifying the requirements."
        },
        {
          number: 3,
          title: "Receive your designs",
          description: "You will receive your first design updates within 48 hours."
        },
        {
          number: 4,
          title: "Simplifying revisions",
          description: "I offer unlimited revisions to ensure that the final design meets your expectations."
        }
      ].map((step, index) => (
        <div key={index} className="relative">
          <motion.div
            className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Step content */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index + 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index + 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {step.description}
              </motion.p>
            </div>
            
            {/* Center item - just for spacing */}
            <div className="w-0"></div>
            
            {/* Empty space on the other side */}
            <div className="w-1/2"></div>
          </motion.div>
          
          {/* Timeline step number */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-500 border-2 border-purple-500 flex items-center justify-center text-lg font-bold z-10"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 * index + 0.2, duration: 0.5, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {step.number}
          </motion.div>

          {/* Animated circle around the step number */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-purple-500 opacity-0"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.3 }}
            transition={{ delay: 0.2 * index + 0.4, duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </div>
      ))}
    </div>
  </div>
</motion.section>
      </div>
    </div>
  );
};

export default DigitalDesignHome;
