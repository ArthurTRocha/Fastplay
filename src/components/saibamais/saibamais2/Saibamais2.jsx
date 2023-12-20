import React from "react";
import "./saibamais2.css"
import { useTranslation } from 'react-i18next';
import Dinheiro from "../../../assets/image/Dinheiro.png"
import newSeta from "../../../assets/image/newSeta.png"
function Saibamais2(){
    const { t } = useTranslation();
    
        return (
            <div className="saibaMais2">
                <div className="seta1">
                    <img src={newSeta} alt="Seta" />
                </div>
                <div className="segundoRetangulo">
                    <h1>{t("Saibamais1.Titulo")}</h1>
                        <p>{t("Saibamais1.Paragrafo")} {`\n`}
                        {t("Saibamais1.Paragrafo1")} {`\n`}
                        {t("Saibamais1.Paragrafo2")} {`\n`}
                        {t("Saibamais1.Paragrafo3")} </p>
                        </div>
                        <div className="dinheiroRetangulo">
                            <img src={Dinheiro} alt="Dinheiro" />
                        </div>
            </div>
        )}
    export default Saibamais2;