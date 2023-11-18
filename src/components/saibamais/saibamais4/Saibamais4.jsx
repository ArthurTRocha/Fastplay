import React from 'react';
import "./saibamais4.css"
import { useTranslation } from 'react-i18next';
import Seta3 from "../../../assets/image/Seta3.png"
import Mulher from "../../../assets/image/Mulher.png"




function Saibamais4(){
const { t } = useTranslation();

    return (
        <div className="saibaMais4">
            <div className="seta3">
                <img src={Seta3} alt="" />
            </div>
            <div className="quartoRetangulo">
                    <h1>{t("Saibamais3.Titulo")}</h1>
                        <p>{t("Saibamais3.Paragrafo")} {`\n`}
                        {t("Saibamais3.Paragrafo1")} {`\n`}
                        {t("Saibamais3.Paragrafo2")}
                   
                        </p>
                        <div className="mulherSaibamais4"><img src={Mulher} alt="" /></div>
                        
                        </div>

                
        </div>
    );
};

export default Saibamais4;