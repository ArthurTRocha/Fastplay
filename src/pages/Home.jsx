import "../styles/home.css"
import React from 'react';


{/*IMPORTS PAGINAS*/}
import Header from "../components/header/Header";
import EmpresasSM from "../components/EmpresasSM/EmpresasSM";
import VendasMaiores from '../components/VendasMaiores/VendasMaiores';
import Informacoes from "../components/informações/Informacoes";
import Potencial from "../components/potencialempresarial/Potencial";
import Servicos from "../components/serviços/Servicos";
import Footer from "../components/footer/Footer";
import Envioemail from '../components/emailenvio/Envioemail';
import HeaderMobile from "../components/header/headermobile/HeaderMobile"
import EmpresasSMMobile from "../components/empresasSM/empresasSMMobile/EmpresasSMMobile";
import InformacoesMobile from "../components/informações/informaçõesMobile/InfomacoesMobile";
import VendasMaioresMobile from "../components/vendasMaiores/vendasmaioresmobile/VendasMaioresMobile";
import PotencialMobile from "../components/potencialempresarial/potencialMobile/PotencialMobile";
import ServicosMobile from "../components/serviços/servicosmobile/ServicosMobile";
import EnvioemailMobile from '../components/emailenvio/emailenvioMobile/EnvioemailMobile';
import FooterMobile from '../components/footer/footermobile/FooterMobile';
import FooterTablet from '../components/footer/footertablet/FooterTablet';






function Home() {
  
        
      
 
  
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


          <div className="envioemaill"><Envioemail/></div>
         <div className="envioemailMobilee"><EnvioemailMobile/></div>


         <div className="footerr"><Footer/></div>
          <div className="footermobilee"><FooterMobile/></div>
           <div className="footerTablett"><FooterTablet/></div>

          </div>   
  );
}

export default Home;