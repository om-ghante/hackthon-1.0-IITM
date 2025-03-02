// components/AboutSection.jsx
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const section = useRef(null);
  const elements = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (elements.current.length > 0) {
      elements.current.forEach(el => {
        if (el) observer.observe(el);
      });
    }
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (elements.current.length > 0) {
        elements.current.forEach(el => {
          if (el) observer.unobserve(el);
        });
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const addToRefs = (el) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  // Array of features for the cards
  const features = [
    {
      title: "Quantum Innovation",
      description: "Explore the frontiers of quantum computing and develop solutions that harness the power of quantum mechanics to solve previously impossible challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      color: "from-purple-600 to-indigo-600",
      delay: "0",
    },
    {
      title: "Neural Networks",
      description: "Design and train advanced neural networks that can learn, adapt, and evolve to tackle complex cognitive tasks with unprecedented accuracy and efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2h5M4.5 22h15M4.5 22V7L2 9.5M19.5 22V7L22 9.5M2 14.5h20M2 19.5h20M12 2v20M7 2v5M17 2v5"></path>
        </svg>
      ),
      color: "from-blue-600 to-cyan-600",
      delay: "300",
    },
    {
      title: "Dimensional Gateways",
      description: "Pioneer technologies that bridge virtual and physical dimensions, creating immersive experiences that transcend traditional boundaries of reality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M9.5 9 8 12h8l-1.5-3"></path>
          <path d="m7.5 15 2.5-6 2.5 6"></path>
          <path d="m13.5 9 2.5 6"></path>
        </svg>
      ),
      color: "from-teal-600 to-emerald-600",
      delay: "500",
    },
    {
      title: "Sentient Systems",
      description: "Develop autonomous systems with advanced decision-making capabilities that can adapt to complex environments and collaborate seamlessly with human operators.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <path d="M8 12h8"></path>
          <path d="M12 8v8"></path>
        </svg>
      ),
      color: "from-pink-600 to-rose-600",
      delay: "700",
    }
  ];

  return (
    <section 
      id="about" 
      ref={section} 
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, rgba(13, 6, 30, 0.9), rgba(20, 10, 45, 0.8))"
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 2px, transparent 0)", backgroundSize: "40px 40px" }}></div>
      </div>
      
      {/* Interactive floating orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.7) 0%, rgba(147, 51, 234, 0) 70%)",
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          transition: "transform 0.6s cubic-bezier(0.21, 0.61, 0.35, 1)",
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.7) 0%, rgba(37, 99, 235, 0) 70%)",
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          transition: "transform 0.8s cubic-bezier(0.21, 0.61, 0.35, 1)",
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-24">
          <div className="inline-block relative">
            <span
              ref={addToRefs}
              className="absolute -top-6 -left-6 w-12 h-12 opacity-0 transition-all duration-1000"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.8) 10%, transparent 70%)"
              }}
            >
            </span>
            <h2 
              ref={addToRefs}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight opacity-0 transition-opacity duration-1000 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
            >
              KANHA X SUNDERBANS HOUSE
            </h2>
            <div className="relative h-1 mx-auto overflow-hidden">
              <div 
                ref={addToRefs}
                className="absolute inset-0 w-full h-full opacity-0 transition-all duration-1000 delay-300"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.8), rgba(37, 99, 235, 0.8), transparent)",
                  animation: "shimmer 3s infinite"
                }}
              ></div>
            </div>
          </div>
          <p 
            ref={addToRefs} 
            className="max-w-2xl mx-auto mt-8 text-lg text-gray-300 opacity-0 transition-opacity duration-1000 delay-500"
          >
            Venture into the unknown with our revolutionary hackathon that merges cutting-edge technology with cosmic innovation. Transcend traditional boundaries and reshape reality itself.
          </p>
        </div>
        
        {/* Feature cards with hexagonal pattern background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className="group relative bg-black bg-opacity-30 backdrop-blur-lg rounded-xl overflow-hidden border border-white border-opacity-5 transform transition-all duration-1000 opacity-0 translate-y-10 hover:translate-y-0 hover:shadow-2xl"
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              {/* Hexagonal pattern background */}
              <div className="absolute inset-0 opacity-10 overflow-hidden">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544v-2.26zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.344 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V.283zm0 5.657L34.26 30.858l1.414 1.414L60 8.2V5.374zm0 5.656L37.088 33.486l1.414 1.414L60 13.86v-2.83zm0 5.657l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413L30 12.142l7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                  backgroundSize: "80px 80px",
                  transform: "rotate(30deg)",
                  animation: "shiftBackground 120s linear infinite"
                }}></div>
              </div>
              
              {/* Card content */}
              <div className="p-8 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-purple-300 group-hover:text-white transition-colors">
                  <span>Explore Technology</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 -m-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-xl opacity-30 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div 
          ref={addToRefs}
          className="mt-24 text-center opacity-0 transition-opacity duration-1000 delay-1000"
        >
          <div className="relative inline-block">
            <button className="relative overflow-hidden bg-transparent border-2 border-white border-opacity-30 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 z-10 group">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Enter The Void</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </button>
            
            {/* Animated particles around button */}
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className="absolute w-2 h-2 rounded-full bg-purple-500 opacity-0"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          
          50% {
            transform: translateY(-20px) scale(1);
            opacity: 0.7;
          }
        }
        
        @keyframes shiftBackground {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 1000px; }
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;