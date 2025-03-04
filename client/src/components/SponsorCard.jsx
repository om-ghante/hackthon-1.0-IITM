import { useState } from 'react';
import PropTypes from 'prop-types';

const SponsorCard = ({ name, logoUrl }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Normalize tilt values (max 20 degrees)
    const tiltX = (y / rect.height * 2) * 20;
    const tiltY = -(x / rect.width * 2) * 20;
    
    setTilt({ x: tiltX, y: tiltY });
  };
  
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };
  
  return (
    <div 
      className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg cursor-pointer transition-all duration-300 transform hover:shadow-xl hover:bg-opacity-50 group"
      style={{ 
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.3s ease, background-opacity 0.3s ease'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center justify-center h-40">
        {logoUrl ? (
          <img 
            src={logoUrl} 
            alt={`${name} logo`} 
            className="max-h-28 max-w-full object-contain mb-4 transition-transform duration-500 transform group-hover:scale-110"
          />
        ) : (
          <div className="w-20 h-20 bg-gray-700 bg-opacity-70 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
          </div>
        )}
        <h3 className="text-xl font-bold text-white text-center">{name}</h3>
      </div>
    </div>
  );
};

SponsorCard.propTypes = {
  name: PropTypes.string.isRequired,
  logoUrl: PropTypes.string
};

export default SponsorCard;