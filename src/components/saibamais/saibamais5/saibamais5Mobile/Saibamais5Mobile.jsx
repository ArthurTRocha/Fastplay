import React from 'react';
import "./saibamais5mobile.css"; // Renomeie o arquivo CSS para "saibamais5Mobile.css"
import { useTranslation } from 'react-i18next';
import Cadeira from "../../../../assets/image/Cadeira.png";
import Seta1 from "../../../../assets/image/Seta1.png"

function Saibamais5Mobile() {
  const { t } = useTranslation();

  return (
    <div className="saibaMais5Mobile"> {/* Adicione "Mobile" ao nome da classe */}
      <div className="seta1-1Mobile"> {/* Adicione "Mobile" ao nome da classe */}
      <img src={Seta1} alt="" />
      </div>
      <div className="quintoRetanguloMobile"> {/* Adicione "Mobile" ao nome da classe */}
        <h1>{t("Saibamais4.Titulo")}</h1>
        <p>
          {t("Saibamais4.Paragrafo")} {`\n`}
          {t("Saibamais4.Paragrafo1")} {`\n`}
          {t("Saibamais4.Paragrafo2")} {`\n`}
          {t("Saibamais4.Paragrafo3")}
        </p>
        <div className="cadeiraMobile"> {/* Adicione "Mobile" ao nome da classe */}
          <img src={Cadeira} alt="" />
        </div>
      </div>
      <div className="colorBlackk"></div>
    </div>
  );
}

export default Saibamais5Mobile;
