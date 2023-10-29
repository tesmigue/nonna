import React from 'react';
import './Estadisticas.css';
import Statsbar from '../../Components/Statsbar/Statsbar';

const Estadisticas = () => {
  
  const progress = {
    'Procrastinacion': 80,
    'Autocontrol': 60,
    'Ansiedad': 40,
    'Distracciones': 20
  };

  return (
    <div>
      <div className="Levy__Estadisticas-container section__padding">
        <div className="Levy__Estadisticas-graphs_row section__margin" id="Estadisticas">
          <div className="Levy__Estadisticas-graphs_box">
            <div className="Levy__Estadisticas-heading">
              <h1 className='texto'>Procrastinacion</h1>
            </div>
          
            <div className="Levy__Estadisticas-graphs">
              <Statsbar bgcolor={"var(--color-graphs)"} progress={progress["Procrastinacion"]} height={20} />
            </div>
          </div>
          <div className="Levy__Estadisticas-graphs_box">
            <div className="Levy__Estadisticas-heading">
              <h1 className='texto'>Autocontrol</h1>
            </div>
            <div className="Levy__Estadisticas-graphs">
              <Statsbar bgcolor={"var(--color-graphs)"} progress={progress["Autocontrol"]} height={20}/>
            </div>
          </div>
          <div className="Levy__Estadisticas-graphs_box">
            <div className="Levy__Estadisticas-heading">
              <h1 className='texto'>Ansiedad</h1>
            </div>
            <div className="Levy__Estadisticas-graphs">
              <Statsbar bgcolor={"var(--color-graphs)"} progress={progress["Ansiedad"]} height={20}/>
            </div>
          </div>
          <div className="Levy__Estadisticas-graphs_box">
            <div className="Levy__Estadisticas-heading">
              <h1 className='texto'>Distracciones</h1>
            </div>

            <div className="Levy__Estadisticas-graphs">
              <Statsbar bgcolor={"var(--color-graphs)"} progress={progress["Distracciones"]} height={20}/>
            </div>
          </div>
        </div>
      </div>
      <div className="Levy__Estadisticas-textbox">
        <textarea className='Levy__Estadisticas-textbox_textbox' placeholder="Sugerencias" />
      </div>
    </div>
  )
}

export default Estadisticas