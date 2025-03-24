// components/HeroSection.jsx
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 2}s infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Parallax effect for background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Side - Text Content */}
        <div 
          className={`w-full lg:w-1/2 mb-16 lg:mb-0 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <div className="relative mb-4">
            <span className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-sm font-bold tracking-widest mb-2">
              IIT Madras
            </span>
            <h1 className="font-black text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 text-transparent bg-clip-text">
                HackEclipse
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              "Where Ideas Meet Innovation."
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Forge your software through the HackEclipse. Discover the extraordinary and reshape reality with powers beyond imagination.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium group">
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              <span className="relative flex items-center justify-center">
                <span>Register Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
            <button className="relative px-8 py-4 rounded-lg font-medium overflow-hidden group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 border border-white rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-lg"></span>
              <span className="relative text-white flex items-center justify-center">Learn More</span>
            </button>
          </div>

          <div className="bg-white bg-opacity-5 backdrop-blur-lg p-6 rounded-xl border border-white border-opacity-10 hover:border-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold ml-3">Think Beyond The Limites</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Unlock your powers of development and compite with other in HackEclipse to secrets of the universe through advanced technology and mystical arts. Your journey will unveil powers that transcend ordinary understanding.
            </p>
            <div className="flex items-center justify-between">
              <button className="flex items-center text-white text-sm font-medium hover:text-cyan-400 transition-colors">
                <span className="mr-2">Watch Trailer</span>
                <div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className="flex space-x-4">
                {['Discord', 'Twitter', 'YouTube'].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="text-gray-400 hover:text-white text-xs font-medium transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Stylized Figure/Image */}
        <div 
          className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative mx-auto max-w-md lg:max-w-full">
            <div 
              className="aspect-square rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md p-1"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              <div className="w-full h-full rounded-full bg-black bg-opacity-60 p-8 relative overflow-hidden">
                {/* Energy rings */}
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute inset-0 border-4 rounded-full opacity-70"
                    style={{
                      borderColor: i === 0 ? '#8B5CF6' : i === 1 ? '#3B82F6' : '#06B6D4',
                      transform: `scale(${0.7 + i * 0.15})`,
                      animation: `pulse ${3 + i}s infinite alternate ease-in-out`,
                    }}
                  />
                ))}
                
                {/* Center figure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-72">
                    {/* Figure silhouette */}
                    <div className="absolute inset-0 rounded-3xl bg-black"></div>
                    
                    {/* Energy weapon */}
                    <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-1 h-64 bg-gradient-to-b from-white via-cyan-400 to-purple-600">
                      <div className="absolute inset-0 animate-pulse blur-md bg-gradient-to-b from-white via-cyan-400 to-purple-600"></div>
                    </div>
                    
                    {/* Energy glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 filter blur-xl opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Holographic circles */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-full rounded-full border border-cyan-500/30"
                      style={{
                        transform: `rotate(${i * 15}deg)`,
                        animation: `spin ${20 + i * 5}s linear infinite${i % 2 === 0 ? ' reverse' : ''}`,
                      }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                    </div>
                  ))}
                </div>
                
                {/* Reflective floor */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.8); }
          100% { opacity: 0.7; transform: scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;