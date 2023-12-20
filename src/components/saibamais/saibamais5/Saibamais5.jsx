import React from 'react';
import "./saibamais5.css"
import { useTranslation } from 'react-i18next';
import Cadeira from "../../../assets/image/Cadeira.png"
import Seta1 from "../../../assets/image/Seta1.png"

function Saibamais5(){
const { t } = useTranslation();

    return (
        <div className="saibaMais5">
             <div className="seta1-1">
                <img src={Seta1} alt="Seta" />
            </div>
            <div className="quintoRetangulo">
                    <h1>{t("Saibamais4.Titulo")}</h1>
                        <p>{t("Saibamais4.Paragrafo")} {`\n`}
                        {t("Saibamais4.Paragrafo1")} {`\n`}
                        {t("Saibamais4.Paragrafo2")} {`\n`}
                        {t("Saibamais4.Paragrafo3")} 
                   </p>
                        <div className="cadeira"><img src={Cadeira} alt="Cadeira" /></div>
                        
                        </div>

                
        </div>
    );
};

export default Saibamais5;