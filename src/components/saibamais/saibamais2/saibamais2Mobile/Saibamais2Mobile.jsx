import React from "react";
import "./saibamais2mobile.css"; 
import { useTranslation } from 'react-i18next';
import Dinheiro from "../../../../assets/image/Dinheiro.png";
import newSeta from "../../../../assets/image/newSeta.png";

function Saibamais2Mobile() {
  const { t } = useTranslation();

  return (
    <div className="saibaMais2Mobile">
      <div className="posicaoSaibamais2Mobile">
      <div className="seta1Mobile"> 
        <img src={newSeta} alt="" />
      </div>
      <div className="segundoRetanguloMobile"> 
        <h1>{t("Saibamais1.Titulo")}</h1>
        <p>
          {t("Saibamais1.Paragrafo")} {`\n`}
          {t("Saibamais1.Paragrafo1")} {`\n`}
          {t("Saibamais1.Paragrafo2")} {`\n`}
          {t("Saibamais1.Paragrafo3")}
        </p>
      </div>
      <div className="dinheiroRetanguloMobile"> 
        <img src={Dinheiro} alt="" />
      </div>
      </div>
    </div>
  );
}

export default Saibamais2Mobile;
