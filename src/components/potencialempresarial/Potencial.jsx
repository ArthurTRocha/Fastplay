import React from "react";
import "./potencial.css"
import seta from "../../assets/image/seta.png"
import Mapas from "../carouselmapas/Carouselmapa"
import Setaa from "../../assets/image/Setinha.png"
import { useTranslation } from 'react-i18next';


function Potencial() {
    const { t } = useTranslation();
    return (
        <div className="potencial">

            <div className="potencialtexto">
                <h1>
                {t("Potencial.Maximize")} {`\n`}
                {t("Potencial.Maximize2")} <span>{t("Potencial.Maximize3")} {`\n`}
                {t("Potencial.Maximize4")}</span>
                </h1>
            </div>

            <div className="quadroempresarial">

                <div className="anos">
                <div className="ano2022"><p>2022</p></div>
                <div className="iconesPotencial">
                <div className="traco"><p>75%</p></div>
                <div className="traco"><p>50%</p></div>
                <div className="traco"><p>25%</p></div>
                <div className="traco"><p>0%</p></div>
                </div>
                <div className="setaAnoss">
                <img className="setaAnos" src={Setaa} alt="Seta" /></div>
                <div className="ano2023"><p>2023</p></div>                
                </div>
                </div>

                <div className="setaempresarial">
                    <div className="setaempresarial1">
                    <img className="imagemSeta" src={seta} alt="Seta-Fastplay" /> 
                    <img className="imagemSeta" src={seta} alt="Seta-Fastplay" />
                    <div className="descricaoseta">
                    <div className="descriacaoseta1">
                        <p><span>+</span> {t("Potencial.De")} {`\n`} 
                        <span className="span1">40</span>{`\n`} 
                        {t("Potencial.Nacionais")}</p>

                        <p><span>+</span> {t("Potencial.De")} {`\n`} 
                        <span className="span1">25</span>{`\n`} 
                        {t("Potencial.Internacionais")}</p>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className="potencialtextos"><p>
                {t("Potencial.Dados")} {`\n`}
                {t("Potencial.Dados2")}
                </p></div>
                <div className="posicaoMapa01">
               <div className="posicaoMapa"><Mapas/></div>
               </div>
                
              
                

            







        </div>
    )
}
export default Potencial;