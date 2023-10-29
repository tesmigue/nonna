import React from 'react';
import './Ficha.css';
import { LiaRobotSolid } from "react-icons/lia";

const Ficha = () => {
  return (
    <div className="Levy__Ficha-container section__padding">
        <div className="Levy__Ficha section__margin" id="Ficha">
            <div className="Levy__Ficha-columnone">
              <div className="Levy__Ficha-boton_box">
                  <button type="button" >Historial de diagnosticos</button>
              </div>
              <div className='Levy__Ficha-diagnostico_box'>
                <textarea className='Levy__Ficha-diagnostico_textbox' placeholder="Diagnostico" />
              </div>
            </div>

            <div className="Levy__Ficha-columntwo">
              <h1 className='Texto'>Medicinas</h1>
              <div className='Levy__Ficha-medicinas_box'>
                <textarea className='Levy__Ficha-medicinas_textbox' />
              </div>
              <h1 className='Texto'>Sugerencias</h1>
              <div className='Levy__ficha-sugerencias_box'>
                <LiaRobotSolid/>
                <textarea className='Levy__Ficha-sugerencias_textbox' />

              </div>
            </div>

          </div>
      </div>
  );
};
export default Ficha
