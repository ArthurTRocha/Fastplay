import React from "react";
import Header from "../components/header/Header";
import TrabalheConosco1 from "../components/trabalheconosco/trabalheconosco1/TrabalheConosco1";
import TrabalheConosco2 from "../components/trabalheconosco/trabalheconosco2/TrabalheConosco2";
import Footer from "../components/footer/Footer";
import FoooterTablet from "../components/footer/footertablet/FooterTablet";

function TrabalheConosco() {

    return (
    <div className="trabalheConosco">
      <Header/>
      <TrabalheConosco2/>
      <TrabalheConosco1/> 
      <div className="footerSaibamais"><Footer/></div>
      <div className="footerTabletSaibamais"><FoooterTablet/></div>
     
    </div>
)}
export default TrabalheConosco;