import React, { useEffect, useState } from 'react';
import './Style/3D-Background.css';

const Background3D = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePos({ x, y });

      // Update mouse follow element
      const mouseFollow = document.querySelector('.mouse-follow');
      if (mouseFollow) {
        mouseFollow.style.left = (x - 75) + 'px';
        mouseFollow.style.top = (y - 75) + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="scene-3d">
      {/* Animated Grid */}
      <div className="grid-3d"></div>

      {/* Glow Orbs */}
      <div className="glow-orb"></div>
      <div className="glow-orb"></div>
      <div className="glow-orb"></div>

      {/* Lens Flare */}
      <div className="lens-flare"></div>

      {/* Floating Spheres */}
      <div className="sphere"></div>
      <div className="sphere"></div>
      <div className="sphere"></div>
      <div className="sphere"></div>

      {/* Rotating 3D Cubes */}
      <div className="cube-container" style={{ top: '15%', left: '10%' }}>
        <div className="cube">
          <div className="cube-face">🎮</div>
          <div className="cube-face">🏆</div>
          <div className="cube-face">⭐</div>
          <div className="cube-face">🎯</div>
          <div className="cube-face">🚀</div>
          <div className="cube-face">💡</div>
        </div>
      </div>

      <div className="cube-container" style={{ bottom: '20%', right: '15%', animationDelay: '5s' }}>
        <div className="cube">
          <div className="cube-face">📚</div>
          <div className="cube-face">🎨</div>
          <div className="cube-face">🧠</div>
          <div className="cube-face">⚡</div>
          <div className="cube-face">🔥</div>
          <div className="cube-face">✨</div>
        </div>
      </div>

      {/* Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Mouse Follow */}
      <div className="mouse-follow"></div>
    </div>
  );
};

export default Background3D;
