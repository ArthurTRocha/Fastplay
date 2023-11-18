import React from 'react';
import "./empresassmmobile.css"
import { useTranslation } from 'react-i18next';
import alvo from "../../../assets/image/alvo.png"
import sombra from "../../../assets/image/sombra.png"
import { Link } from 'react-router-dom';


function EmpresasSMMobile() {
  const { t } = useTranslation();

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
            <img className='alvo' src={alvo} alt="" />
          </div>
          <div className="sombraMobile">
            <img className='sombra' src={sombra} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default EmpresasSMMobile;
