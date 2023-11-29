import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import FoooterTablet from "../components/footer/footertablet/FooterTablet"
import Objetivos from "../components/obejtivos/Obejtivos"
import EnvioEmail from "../components/emailenvio/Envioemail"
import CrescaConosco from "../components/crescaconosco/Crescaconosco"
import React, { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';  // Importe useLocation aqui



function Cadastro() {

  const suaDivRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scrollToDiv = new URLSearchParams(location.search).get('scrollToDiv') === 'true';

    if (scrollToDiv && suaDivRef.current) {
      suaDivRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.search]);

    return (
        <div className="cadastro">
            <Header/>
            <Objetivos/>
            <CrescaConosco/>
            <div ref={suaDivRef}><EnvioEmail/></div>
            <div className="footerSaibamais"><Footer/></div>
            <div className="footerTabletSaibamais"><FoooterTablet/></div>

        </div>
    )
}
export default Cadastro;