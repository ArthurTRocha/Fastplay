import React, { useState } from "react";
import './App.css';
import Router from './router/Router';  
import { MdSms } from "react-icons/md";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { BsWhatsapp } from "react-icons/bs";
import i18n from 'i18next';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const getWhatsAppLink = () => {
    const selectedLanguage = i18n.language;
    return selectedLanguage === 'pt'
    ? 'https://wa.me/31996013764?text=Olá!%20Gostaria%20de%20saber%20maiores%20informações%20sobre%20os%20seus%20produtos%20e%20serviços%20ou%20gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20o%20seu%20trabalho...'
    : 'https://api.whatsapp.com/send/?phone=19297264171&text=Hello+I+would+like+to+schedule+a+video+conference+to+discuss+marketing.&type=phone_number&app_absent=0';
    };

  return (
    <>
    <Router />
    <div className="menuChatLateral">
          {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
          <button className="abrirChat" onClick={openSidebar}><MdSms className="MdSms" /></button>
          </div>  
          <div className="iconeeWFIXO">
      <a href={getWhatsAppLink()} target="_blank"><BsWhatsapp className='iconeeHOME'/></a>
      </div>
    </>
  );
}

export default App;