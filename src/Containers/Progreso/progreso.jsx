import React from 'react';
import './progreso.css';
import ProgressBar from '../../Components/ProgressBar/ProgressBar'; // Asegúrate de que la ruta sea correcta

const Progreso = () => {
  const progress = 80;
  return (
    <div className="Levy__progreso-container">
      <div className='Levy__progreso section_margin' id="Progreso">
        <div className="Levy__progreso-heading">
          <h1 className='texto'>Progreso semanal del paciente</h1>
        </div>
        <div className="Levy__progreso-progress_box">
          <div className='Levy__progreso-progress'>
            <ProgressBar bgcolor={"var(--color-graphs)"} progress={progress} height={20} />
          </div>
        </div>
        <div className="Levy__progreso-paragraph">
          <p>El paciente ha completado el {progress}% de las tareas semanales </p>
        </div>
      </div>
    </div>
  )
}

export default Progreso;
