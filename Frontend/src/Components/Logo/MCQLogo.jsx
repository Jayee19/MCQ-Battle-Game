import React, { useState } from 'react';
import './MCQLogo.css';

const MCQLogo = ({ size = 50 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`mcq-logo ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Define Gradients */}
        <defs>
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="50%" stopColor="#764ba2" />
            <stop offset="100%" stopColor="#f5576c" />
          </linearGradient>
          
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="shadowFilter">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Animated Background Circle */}
        <circle cx="100" cy="100" r="95" className="logo-outer-circle" fill="none" stroke="url(#mainGradient)" strokeWidth="2" filter="url(#glow)"/>
        
        {/* Question Mark - Left Side */}
        <g className="question-left">
          <circle cx="70" cy="70" r="25" fill="url(#mainGradient)" opacity="0.9" filter="url(#shadowFilter)"/>
          <text x="70" y="85" textAnchor="middle" fontSize="40" fontWeight="bold" fill="white" fontFamily="Arial">?</text>
        </g>

        {/* Question Mark - Right Side */}
        <g className="question-right">
          <circle cx="130" cy="70" r="25" fill="url(#glowGradient)" opacity="0.9" filter="url(#shadowFilter)"/>
          <text x="130" y="85" textAnchor="middle" fontSize="40" fontWeight="bold" fill="white" fontFamily="Arial">?</text>
        </g>

        {/* Center Trophy/Award */}
        <g className="trophy-icon" filter="url(#glow)">
          <path d="M 85 110 Q 80 120 85 140 L 115 140 Q 120 120 115 110 Z" fill="url(#mainGradient)" stroke="white" strokeWidth="1.5"/>
          <rect x="90" y="138" width="20" height="8" fill="url(#mainGradient)"/>
          <rect x="88" y="145" width="24" height="3" fill="url(#mainGradient)"/>
          <path d="M 85 118 Q 70 115 75 130" fill="none" stroke="url(#mainGradient)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 115 118 Q 130 115 125 130" fill="none" stroke="url(#mainGradient)" strokeWidth="2" strokeLinecap="round"/>
        </g>

        {/* Floating Stars */}
        <g className="stars">
          <polygon points="50,40 55,45 50,50 45,45" className="star star-1" fill="url(#mainGradient)"/>
          <polygon points="150,40 155,45 150,50 145,45" className="star star-2" fill="url(#glowGradient)"/>
          <polygon points="100,25 103,30 100,35 97,30" className="star star-3" fill="url(#mainGradient)"/>
        </g>

        {/* Connecting Lines */}
        <g className="connecting-lines" stroke="url(#glowGradient)" strokeWidth="1.5" opacity="0.6">
          <line x1="70" y1="95" x2="85" y2="110" className="line-left"/>
          <line x1="130" y1="95" x2="115" y2="110" className="line-right"/>
        </g>

        {/* Center Pulse Circle */}
        <circle cx="100" cy="100" r="8" className="pulse-circle" fill="url(#mainGradient)" filter="url(#glow)"/>
      </svg>

      {/* Glow Background */}
      <div className="logo-glow"></div>
    </div>
  );
};

export default MCQLogo;
