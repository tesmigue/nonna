import React from 'react'
import './Chatbox.css'
import { LiaRobotSolid } from "react-icons/lia";

const Chatbot = () => {
  return (
    <div className="Levy__Chatbot-container" id="Chatbot">
      <h1 className="Levy__Chatbot-title">Chatbox</h1>
      <div className="Levy__Chatbot section__padding">
        <div className="Levy__chatbot-input">
          <textarea type="text" placeholder="En que te puedo ayudar?" />
          <LiaRobotSolid />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;