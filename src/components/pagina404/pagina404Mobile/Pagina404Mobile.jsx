import React from 'react';
import "./pagina404mobile.css"
import i404 from "../../../assets/image/404.png"
import Seta2 from "../../../assets/image/seta2.png"
import FooterMobile from "../../footer/footermobile/FooterMobile"
import HeaderMobile from "../../header/headermobile/HeaderMobile"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Pagina404Mobile () {
    const { t } = useTranslation();

  return (
    <div className='pagina404Mobile'>
        <div className="headerMobile404Mobile"><HeaderMobile/></div>   

        <div className="setaCimaPai404Mobile">
          
        <div className="setaCima404Mobile">
        <Link to="/home"><img src={Seta2} alt="Seta" /></Link>
        </div>
        
        </div>
        <div className="imagemTexto404Mobile">
        <div className="image404Mobile">
            <img src={i404} alt="Pagina não encontrada" />
        </div>
      <h3>{t("Pagina404.Mensagem")}</h3>
      </div>
      <div className="colorBrancaFeedback"></div>
      <div className="footerMobile404Mobile"><FooterMobile/></div>
    </div>
  );
};

export default Pagina404Mobile;
