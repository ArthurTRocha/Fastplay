import HeaderMobile from "../components/header/headermobile/HeaderMobile"
import FooterMobile from "../components/footer/footermobile/FooterMobile"
import EnvioEmailMobile from "../components/emailenvio/emailenvioMobile/EnvioemailMobile"
import ObejetivosMobile from "../components/obejtivos/obejtivosmobile/ObejtivosMobile"
import CrescaConoscoMobile from "../components/crescaconosco/crescaconoscomobile/CrescaconoscoMobile"
import React, { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom'; 



function CadastroMobile () {
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
    <div className="cadastroMobile">
            <HeaderMobile/>
            <ObejetivosMobile/>
            <CrescaConoscoMobile/>
            <div ref={suaDivRef}><EnvioEmailMobile/></div>
            <FooterMobile/>

    </div>

)}
export default CadastroMobile;