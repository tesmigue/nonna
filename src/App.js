//rafce
import React from 'react';
import { Navbar} from './Components/indexcomponents';
import { Footer ,Progreso,Ficha,Estadisticas,Chatbot, Header } from './Containers/indexContainers';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
        <div className='darkgrey__bg'>
          <Navbar />
          <Header />
        </div>
        <div className="Progreso">
          <Progreso />
        </div>
        <Ficha/>
        <Estadisticas/>
        <Chatbot/>
        <Footer/> 
    </div>
  );
};

export default App
