import React from 'react';
import "./saibamais4Mobile.css"; // Renomeie o arquivo CSS para "saibamais4Mobile.css"
import { useTranslation } from 'react-i18next';
import Seta3 from "../../../../assets/image/Seta3.png";
import Mulher from "../../../../assets/image/Mulher.png";

function Saibamais4Mobile() {
  const { t } = useTranslation();

  return (
    <div className="saibaMais4Mobile"> {/* Adicione "Mobile" ao nome da classe */}
      <div className="seta3Mobile"> {/* Adicione "Mobile" ao nome da classe */}
        <img src={Seta3} alt="Seta" />
      </div>
      <div className="quartoRetanguloMobile"> {/* Adicione "Mobile" ao nome da classe */}
        <h1>{t("Saibamais3.Titulo")}</h1>
        <p>
          {t("Saibamais3.Paragrafo")} {`\n`}
          {t("Saibamais3.Paragrafo1")} {`\n`}
          {t("Saibamais3.Paragrafo2")}
        </p>
        </div>
        <div className="mulherSaibamais4Mobile"> {/* Adicione "Mobile" ao nome da classe */}
          <img src={Mulher} alt="Mulher" />
        
      </div>
    </div>
  );
}

export default Saibamais4Mobile;
