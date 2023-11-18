import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderMobile from "../components/header/headermobile/HeaderMobile"
import Saibamais1Mobile from "../components/saibamais/saibamais1/saibamais1Mobile/Saibamais1Mobile"
import Saibamais2Mobile from "../components/saibamais/saibamais2/saibamais2Mobile/Saibamais2Mobile"
import Saibamais3Mobile from "../components/saibamais/saibamais3/saibamais3Mobile/Saibamais3Mobile"
import Saibamais4Mobile from "../components/saibamais/saibamais4/saibamais4Mobile/Saibamais4Mobile"
import Saibamais5Mobile from "../components/saibamais/saibamais5/saibamais5Mobile/Saibamais5Mobile"
import FooterMobile from "../components/footer/footermobile/FooterMobile"



function SaibamaisMobile(){
const { t } = useTranslation();

    return (
        <div className="saibaMais">
            <HeaderMobile/>
            <Saibamais1Mobile/>
            <Saibamais2Mobile/>
            <Saibamais3Mobile/>
            <Saibamais4Mobile/>
            <Saibamais5Mobile/>
            <FooterMobile/>

                
        </div>
    );
};

export default SaibamaisMobile;