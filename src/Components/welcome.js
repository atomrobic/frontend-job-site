import React, { useEffect, useState } from 'react';
import './ParticleText.css'; // Import CSS for styling

const ParticleText = () => {
  const texts = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ': )'];
  const numberOfParticles = 12;
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particle positions for each character
    const generatedParticles = [];
    for (let i = 0; i < texts.length; i++) {
      for (let j = 0; j < numberOfParticles; j++) {
        generatedParticles.push({ index: i, particleId: `${i}-${j}` });
      }
    }
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="particle-container">
      {texts.map((text, i) => (
        <div key={i} className={`background background-${i}`}>
          <div className={`text text-${i}`}>{text}</div>
          <div className={`frame frame-${i}`} />
          {particles
            .filter(particle => particle.index === i)
            .map(particle => (
              <div
                key={particle.particleId}
                className={`particle particle-${particle.particleId}`}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default ParticleText;
