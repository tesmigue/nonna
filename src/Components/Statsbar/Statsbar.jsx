import React from 'react';
import './Statsbar.css';

const Statsbar = ({ progress }) => {
  const radius = 270; // Cambia el radio de la circunferencia a 300px
  const circumference = 2 * Math.PI * radius; // Calcula la circunferencia

  // Calcula la longitud de la línea de progreso
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <svg className="circle-progress" viewBox="0 0 600 600" width="600" height="600">
      <circle
        className="circle-progress-background"
        r={radius}
        cx="300"
        cy="300"
        strokeWidth="48"
        fill="none"
        stroke="whitesmoke"
      />
      <circle
        className="circle-progress-bar"
        r={radius}
        cx="300"
        cy="300"
        strokeWidth="48"
        fill="none"
        stroke="var(--color-graphs)"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
      <text className="circle-progress-text" x="300" y="300" dy=".3em" textAnchor="middle" fill="var(--color-text)">
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default Statsbar;
