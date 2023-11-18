import React from 'react';
import "./saibamais1.css"
import { useTranslation } from 'react-i18next';
import Computador from "../../../assets/image/Computador.png"

function Saibamais1(){
    const { t } = useTranslation();
    
        return (
            <div className="saibaMais">
    
    
    
                <div className="saibaMais1">
                        <div className="textosPrimeirapagina">
                            <h1>{t("Saibamais.Titulo")}</h1>
                            <p>
                            {t("Saibamais.Paragrafo")} {`\n`}
                            {t("Saibamais.Paragrafo1")} {`\n`}
                            {t("Saibamais.Paragrafo2")} {`\n`}
                            {t("Saibamais.Paragrafo3")} {`\n`}
                            {t("Saibamais.Paragrafo4")} 
                            </p>
                            <div className="computadorRetangulo">
                                <img src={Computador} alt="" />
                            </div>
                            </div>
                            </div>
                            </div>
                            );
                            };
                            export default Saibamais1;