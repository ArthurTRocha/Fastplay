import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from "../components/header/Header"
import Saibamais1 from "../components/saibamais/saibamais1/Saibamais1"
import Saibamais2 from "../components/saibamais/saibamais2/Saibamais2"
import Saibamais3 from "../components/saibamais/saibamais3/Saibamais3"
import Saibamais4 from "../components/saibamais/saibamais4/Saibamais4"
import Saibamais5 from "../components/saibamais/saibamais5/Saibamais5"
import Footer from '../components/footer/Footer';
import FoooterTablet from "../components/footer/footertablet/FooterTablet"
import "../styles/saibamais.css"



function Saibamais(){
const { t } = useTranslation();
window.scrollTo(0, 0);

    return (
        <div className="saibaMais">
            <Header/>
            <Saibamais1/>
            <Saibamais2/>
            <Saibamais3/>
            <Saibamais4/>
            <Saibamais5/>
            <div className="footerSaibamais"><Footer/></div>
            <div className="footerTabletSaibamais"><FoooterTablet/></div>
            

         

                
        </div>
    );
};

export default Saibamais;