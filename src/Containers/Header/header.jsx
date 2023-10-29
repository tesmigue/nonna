import React from 'react';
import './header.css';
import people from '../../Assets/people.png';
import perfil from '../../Assets/Perfil.png';

const header = () => {
  return (
    <div className="Levy__header-container">
        <div className="Levy__header section__padding" id="home">
            <div className="Levy__header-content">
                <h1 className="texto">Bienvenido a Nonna!</h1>
                <p>Bienvenido a Nonna!, tu guia robótico. Queremos ayudarte a ti y a tus pacientes. Porfavor ingresa para ver como han progresado cada uno de tus pacientes! o registrate y comienza a utilizar la IA en tus terapias! </p>
                <div className="Levy__header-content__input-btnbox">
                    <button type="button">Añadir pacientes</button>
                    <button type="button">Elegir pacientes</button>
                </div>
                <div className="Levy__header-content__people">
                    <img src={people} alt="people"/>
                    <p>mas de 1600 psicologos utilizan Levy para sus terapias!</p>
                </div>
            </div>

            <div className="Levy__header-img">
                <img src={perfil} alt="perfil"/>
            </div>
            
        </div>
    </div>
  );
};

export default header
