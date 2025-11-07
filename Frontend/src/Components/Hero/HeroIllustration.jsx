import React from 'react';
import './HeroIllustration.css';

const HeroIllustration = () => {
  return (
    <div className="hero-illustration">
      {/* Particle effects */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 5}`}></div>
        ))}
      </div>

      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
        <defs>
          {/* Main Gradients */}
          <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" /><stop offset="50%" stopColor="#667eea" /><stop offset="100%" stopColor="#ff006e" />
          </linearGradient>
          <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" /><stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
          <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff006e" /><stop offset="100%" stopColor="#00ff88" />
          </linearGradient>

          {/* Enhanced Filters */}
          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="neonGlowFilter">
            <feGaussianBlur stdDeviation="8"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.8"/>
            </feComponentTransfer>
          </filter>
        </defs>

        {/* Neon Background Circles */}
        <circle cx="200" cy="200" r="190" fill="rgba(0, 255, 136, 0.02)" className="neon-circle neon-1" />
        <circle cx="200" cy="200" r="160" fill="rgba(255, 0, 110, 0.02)" className="neon-circle neon-2" />
        <circle cx="200" cy="200" r="130" fill="rgba(79, 172, 254, 0.03)" className="neon-circle neon-3" />

        {/* Brain Icon - Enhanced with Neon */}
        <g className="brain-icon-enhanced">
          <circle cx="150" cy="140" r="35" fill="none" stroke="url(#heroGradient1)" strokeWidth="2" className="brain-ring left-ring" opacity="0.6" />
          <path d="M 150 120 Q 130 100 130 140 Q 130 180 150 190 Q 170 180 170 140 Q 170 100 150 120" fill="url(#heroGradient1)" opacity="0.95" filter="url(#heroGlow)" className="brain-left" />
          
          <circle cx="250" cy="140" r="35" fill="none" stroke="url(#heroGradient2)" strokeWidth="2" className="brain-ring right-ring" opacity="0.6" />
          <path d="M 250 120 Q 270 100 270 140 Q 270 180 250 190 Q 230 180 230 140 Q 230 100 250 120" fill="url(#heroGradient2)" opacity="0.95" filter="url(#heroGlow)" className="brain-right" />
          
          {/* Connection with glow */}
          <rect x="195" y="140" width="10" height="50" fill="url(#heroGradient1)" opacity="0.8" filter="url(#neonGlowFilter)" className="brain-connection" />
          
          {/* Energy bolts */}
          <polygon points="200,160 215,185 208,185 220,210 180,210 200,160" fill="#00ff88" className="bolt-energy left-bolt" filter="url(#heroGlow)" />
          <polygon points="200,160 185,185 192,185 180,210 220,210 200,160" fill="#ff006e" className="bolt-energy right-bolt" filter="url(#heroGlow)" />
        </g>

        {/* Trophy Badge - Super Gamified */}
        <g className="trophy-badge-enhanced" transform="translate(200, 260)">
          {/* Glow aura */}
          <circle r="65" fill="none" stroke="url(#neonGlow)" strokeWidth="2" className="trophy-aura" opacity="0.4" />
          
          {/* Achievement glow */}
          <circle r="55" fill="rgba(0, 255, 136, 0.1)" className="achievement-glow" />
          
          {/* Trophy */}
          <path d="M -20 0 Q -25 15 -20 30 L 20 30 Q 25 15 20 0 Z" fill="url(#heroGradient1)" stroke="#00ff88" strokeWidth="2.5" filter="url(#heroGlow)" className="trophy-cup" />
          <rect x="-15" y="28" width="30" height="8" fill="url(#heroGradient1)" stroke="#00ff88" strokeWidth="1.5" />
          <rect x="-18" y="35" width="36" height="4" fill="url(#heroGradient1)" stroke="#00ff88" strokeWidth="1" />
          
          {/* Handles */}
          <path d="M -20 8 Q -40 5 -35 25" fill="none" stroke="url(#neonGlow)" strokeWidth="3.5" strokeLinecap="round" filter="url(#heroGlow)" className="trophy-handle" />
          <path d="M 20 8 Q 40 5 35 25" fill="none" stroke="url(#neonGlow)" strokeWidth="3.5" strokeLinecap="round" filter="url(#heroGlow)" className="trophy-handle" />
          
          {/* Star */}
          <polygon points="0,-15 4,-5 15,-5 6,2 10,12 0,6 -10,12 -6,2 -15,-5 -4,-5" fill="#00ff88" filter="url(#neonGlowFilter)" className="trophy-star" />
          
          {/* Score counter */}
          <text x="0" y="-40" textAnchor="middle" className="score-text" fill="#00ff88">+100</text>
        </g>

        {/* Floating Stars - Gamified */}
        <g className="floating-stars-enhanced">
          <polygon points="80,80 85,88 93,88 86,93 89,101 80,96 71,101 74,93 67,88 75,88" fill="#00ff88" opacity="0.8" className="star star-1" filter="url(#heroGlow)" />
          <polygon points="320,80 325,88 333,88 326,93 329,101 320,96 311,101 314,93 307,88 315,88" fill="#ff006e" opacity="0.8" className="star star-2" filter="url(#heroGlow)" />
          <polygon points="100,320 105,328 113,328 106,333 109,341 100,336 91,341 94,333 87,328 95,328" fill="#4facfe" opacity="0.8" className="star star-3" filter="url(#heroGlow)" />
          <polygon points="300,320 305,328 313,328 306,333 309,341 300,336 291,341 294,333 287,328 295,328" fill="#00ff88" opacity="0.8" className="star star-4" filter="url(#heroGlow)" />
          
          {/* Extra energy stars */}
          <polygon points="150,100 153,105 160,105 154,110 157,118 150,113 143,118 146,110 140,105 147,105" fill="#ff006e" opacity="0.6" className="star-extra star-5" filter="url(#heroGlow)" />
          <polygon points="250,100 253,105 260,105 254,110 257,118 250,113 243,118 246,110 240,105 247,105" fill="#4facfe" opacity="0.6" className="star-extra star-6" filter="url(#heroGlow)" />
        </g>

        {/* Energy Lines - More Intense */}
        <g className="energy-lines" stroke="url(#neonGlow)" strokeWidth="2.5" opacity="0.7" filter="url(#heroGlow)">
          <line x1="150" y1="190" x2="170" y2="245" className="line-connect line-1" />
          <line x1="250" y1="190" x2="230" y2="245" className="line-connect line-2" />
          <line x1="200" y1="190" x2="200" y2="245" className="line-center" />
        </g>

        {/* Pulsing rings */}
        <g className="pulse-rings">
          <circle cx="200" cy="200" r="160" className="pulse-ring ring-1" fill="none" stroke="url(#heroGradient1)" strokeWidth="1.5" opacity="0.6" />
          <circle cx="200" cy="200" r="180" className="pulse-ring ring-2" fill="none" stroke="url(#heroGradient2)" strokeWidth="1" opacity="0.4" />
        </g>

        {/* Level indicator */}
        <g className="level-indicator">
          <text x="200" y="30" textAnchor="middle" className="level-text" fill="url(#neonGlow)">READY TO BATTLE?</text>
        </g>
      </svg>

      {/* Animated glow background */}
      <div className="hero-glow-bg-enhanced"></div>
      
      {/* Score popups */}
      <div className="score-popup score-1">+10</div>
      <div className="score-popup score-2">+20</div>
      <div className="score-popup score-3">+15</div>
    </div>
  );
};

export default HeroIllustration;
