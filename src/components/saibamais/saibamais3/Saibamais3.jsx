import React from 'react';
import "./saibamais3.css"
import { useTranslation } from 'react-i18next';
import Seta2 from "../../../assets/image/Seta2.png"
import retangulo3 from "../../../assets/image/retangulo3.png"


function Saibamais3(){
const { t } = useTranslation();

    return (
        <div className="saibaMais3">
            <div className="seta2">
                <img src={Seta2} alt="Seta" />
            </div>
            <div className="terceiroRetangulo">
                    <h1>{t("Saibamais2.Titulo")}</h1>
                        <p>{t("Saibamais2.Paragrafo")} {`\n`}
                        {t("Saibamais2.Paragrafo1")} {`\n`}
                        {t("Saibamais2.Paragrafo2")} {`\n`}
                        {t("Saibamais2.Paragrafo3")} {`\n`}
                        {t("Saibamais2.Paragrafo4")} </p>
                        <div className="retangulo2"><img src={retangulo3} alt="Retangulo" />
                        </div>
                        </div>

                
        </div>
    );
};

export default Saibamais3;