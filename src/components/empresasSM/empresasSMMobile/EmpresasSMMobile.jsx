import React from 'react';
import "./empresassmmobile.css"
import { useTranslation } from 'react-i18next';
import alvo from "../../../assets/image/alvo.png"
import sombra from "../../../assets/image/sombra.png"
import { Link } from 'react-router-dom';
import { BsWhatsapp } from "react-icons/bs";  
import i18n from 'i18next';



function EmpresasSMMobile() {
  const { t } = useTranslation();

  const getWhatsAppLink = () => {
    const selectedLanguage = i18n.language;
    return selectedLanguage === 'pt'
    ? 'https://wa.me/31996013764?text=Olá!%20Gostaria%20de%20saber%20maiores%20informações%20sobre%20os%20seus%20produtos%20e%20serviços%20ou%20gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20o%20seu%20trabalho...'
    : 'https://api.whatsapp.com/send/?phone=19297264171&text=Hello+I+would+like+to+schedule+a+video+conference+to+discuss+marketing.&type=phone_number&app_absent=0';
    };


  return (
    <div className="EmpresasSMMobile">
      {`\n`}
      <div className="TextosEmpresasSMMobile">
        <h1>{t("EmpresasSM.Titulo")}{t("EmpresasSM.Titulo-1")}</h1>{`\n`} 
        <p>
          {t("EmpresasSM.Paragrafo")}
          {t("EmpresasSM.Paragrafo-1")}
          
          {t("EmpresasSM.Paragrafo-2")}
          
          {t("EmpresasSM.Paragrafo-3")}
          {`\n\n`}
          {t("EmpresasSM.Paragrafo-4")}
          <span>{t("EmpresasSM.Paragrafo-5")}</span>
          {t("EmpresasSM.Paragrafo-6")}
          
          {t("EmpresasSM.Paragrafo-7")}
        
          {t("EmpresasSM.Paragrafo-8")}
        </p>
        {`\n`}
        <div className="positionbuttonMobileqtme">

        <Link to="/SaibamaisMobile">
        <button className='button-qtmeMobile'>{t("EmpresasSM.Transformar")}
        </button>
        </Link>
      </div>
      </div>

      
      
      
      
      
        <div className="TextosEmpresasSM2Mobile">
        <h1>
          {t("EmpresasSM.Titulo-2")}{t("EmpresasSM.Titulo-3")}
        </h1> {`\n`}
        <p>
          {t("EmpresasSM.Paragrafo-9")} 
          {t("EmpresasSM.Paragrafo-10")} 
          {t("EmpresasSM.Paragrafo-11")} 
          {t("EmpresasSM.Paragrafo-12")} 
          {t("EmpresasSM.Paragrafo-13")}
        </p>
        <div className="posicaoAlvoSombra">
        <div className="alvo-sombraMobile">
          <div className="alvoMobile">
            <img className='alvo' src={alvo} alt="Alvo" />
          </div>
          <div className="sombraMobile">
            <img className='sombra' src={sombra} alt="Sombra" />
          </div>
        </div>
        </div>
      </div>
      <div className="iconeeWFIXO">
      <a href={getWhatsAppLink()} target="_blank"><BsWhatsapp className='iconeeHOME'/></a>
      </div>
    </div>
  )
}

export default EmpresasSMMobile;
