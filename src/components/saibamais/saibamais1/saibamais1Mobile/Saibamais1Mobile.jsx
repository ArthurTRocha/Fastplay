import React from 'react';
import "./saibamais1mobile.css"; 
import { useTranslation } from 'react-i18next';
import Computador from "../../../../assets/image/Computador.png";

function Saibamais1Mobile() {
  const { t } = useTranslation();

  return (
    
      <div className="saibaMais1Mobile"> 
        <div className="textosPrimeirapaginaMobile"> 
          <h1>{t("Saibamais.Titulo")}</h1>
          <p>
            {t("Saibamais.Paragrafo")} {`\n`}
            {t("Saibamais.Paragrafo1")} {`\n`}
            {t("Saibamais.Paragrafo2")} {`\n`}
            {t("Saibamais.Paragrafo3")} {`\n`}
            {t("Saibamais.Paragrafo4")}
          </p>
          <div className="computadorRetanguloMobile"> 
            <img src={Computador} alt="Computador" />
          </div>
        </div>
      </div>
  );
}

export default Saibamais1Mobile;
