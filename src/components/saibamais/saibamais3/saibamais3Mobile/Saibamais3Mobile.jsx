import React from 'react';
import "./saibamais3mobile.css"; // Renomeie o arquivo CSS para "saibamais3Mobile.css"
import { useTranslation } from 'react-i18next';
import Seta2 from "../../../../assets/image/Seta2.png";
import retangulo3 from "../../../../assets/image/retangulo3.png";

function Saibamais3Mobile() {
  const { t } = useTranslation();

  return (
    <div className="saibaMais3Mobile"> {/* Adicione "Mobile" ao nome da classe */}
      <div className="seta2Mobile"> {/* Adicione "Mobile" ao nome da classe */}
        <img src={Seta2} alt="Seta" />
      </div>
      <div className="terceiroRetanguloMobile"> {/* Adicione "Mobile" ao nome da classe */}
        <h1>{t("Saibamais2.Titulo")}</h1>
        <p>
          {t("Saibamais2.Paragrafo")} {`\n`}
          {t("Saibamais2.Paragrafo1")} {`\n`}
          {t("Saibamais2.Paragrafo2")} {`\n`}
          {t("Saibamais2.Paragrafo3")} {`\n`}
          {t("Saibamais2.Paragrafo4")}
        </p>
        <div className="retangulo2Mobile"> {/* Adicione "Mobile" ao nome da classe */}
          <img src={retangulo3} alt="Retangulo" />
        </div>
      </div>
    </div>
  );
}

export default Saibamais3Mobile;
