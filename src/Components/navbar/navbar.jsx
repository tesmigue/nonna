import React from 'react';
import {useState} from "react"
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from"react-icons/ri";
import Logo from "../../Assets/Logo.png";
//la forma de nombrar las classname: BEM-> Block Element Modifier
const Menu =()=>(
  <>
  <p><a href="#home"> inicio</a></p>
  <p><a href="#Progreso"> Progreso</a></p>
  <p><a href="#Ficha"> Ficha</a></p>
  <p><a href="#Estadisticas"> Estadísticas</a></p>
  <p><a href="#Chatbot"> Chatbot</a></p>
  </>
)

const Navbar = () => {

  const[toggleMenu,setToggleMenu]=useState(false);

  return (
    <div className="Levy__navbar">
      <div className ="Levy__navbar-links">
        
        <div className="Levy__navbar-links_logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="Levy__navbar-links_container">
          <p><a href="#home"> inicio</a></p>
          <p><a href="#Progreso"> Progreso</a></p>
          <p><a href="#Ficha"> Ficha</a></p>
          <p><a href="#Estadisticas"> Estadísticas</a></p>
          <p><a href="#Chatbot"> Chatbot</a></p>
        </div>

      </div>
      <div className="Levy__navbar-add">
        <p>Registrarse</p>
        <button type="button" >Ingresar</button>
      </div>
      <div className="Levy__navbar-menu">
        {toggleMenu
         ?<RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
         :<RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>}
        {toggleMenu &&(
          <div className="Levy__navbar-menu_container scale-up-center">
            <div className="Levy__navbar-menu_container_links">
              <Menu/>
              <div className="Levy__navbar-menu_container-links-add">
                <p>Registrarse</p>
                <button type="button" >Ingresar</button>
              </div>
            </div>
          </div>
        )

        }
      </div>
    </div>
  );
};

export default Navbar
