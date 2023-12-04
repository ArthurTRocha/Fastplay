import "../styles/home.css"
import React, { useState } from 'react';
import { MdSms } from "react-icons/md";




{/*IMPORTS PAGINAS*/}
import Header from "../components/header/Header";
import EmpresasSM from "../components/EmpresasSM/EmpresasSM";
import VendasMaiores from '../components/VendasMaiores/VendasMaiores';
import Informacoes from "../components/informações/Informacoes";
import Potencial from "../components/potencialempresarial/Potencial";
import Servicos from "../components/serviços/Servicos";
import Footer from "../components/footer/Footer";
import Entrecontato from '../components/entrecontato/Entrecontato.jsx';
import HeaderMobile from "../components/header/headermobile/HeaderMobile"
import EmpresasSMMobile from "../components/empresasSM/empresasSMMobile/EmpresasSMMobile";
import InformacoesMobile from "../components/informações/informaçõesMobile/InfomacoesMobile";
import VendasMaioresMobile from "../components/vendasMaiores/vendasmaioresmobile/VendasMaioresMobile";
import PotencialMobile from "../components/potencialempresarial/potencialMobile/PotencialMobile";
import ServicosMobile from "../components/serviços/servicosmobile/ServicosMobile";
import EntrecontatoMobile from '../components/entrecontato/entrecontatoMobile/EntrecontatoMobile.jsx';
import FooterMobile from '../components/footer/footermobile/FooterMobile';
import FooterTablet from '../components/footer/footertablet/FooterTablet';
import ChatAoVivo from "../components/chatfastplay/ChatAoVivo.jsx";
import Sidebar  from "../components/sidebar/Sidebar.jsx";



function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };


  

  return (
    <div className="home">
      <div className="headerMobilee"><HeaderMobile/></div>
        <div className="headerr"><Header/></div>

       <div className="empresasSMM"><EmpresasSM/></div>
         <div className="empresasSMMobilee"><EmpresasSMMobile/></div> 

        <div className="informacoess"><Informacoes/></div>
         <div className="informacoesMobilee"><InformacoesMobile/></div>

         <div className="vendasMaioress"><VendasMaiores/></div>
          <div className="vendasMaioresMobilee"><VendasMaioresMobile/></div>

          <div className="potenciall"><Potencial/></div>
           <div className="potencialmobilee"><PotencialMobile/></div>
         

         <div className="servicoss"><Servicos/></div>
          <div className="servicosMobilee"><ServicosMobile/></div>

          <div className="menuChatLateral">
          {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
          <button onClick={openSidebar}>Abrir Chat Ao Vivo <MdSms /></button>
          </div> 

          <div className="entrecontatoo"><Entrecontato/></div>
         <div className="entrecontatoMobilee"><EntrecontatoMobile/></div>


         <div className="footerr"><Footer/></div>
          <div className="footermobilee"><FooterMobile/></div>
           <div className="footerTablett"><FooterTablet/></div>

          </div>   
  );
}

export default Home;